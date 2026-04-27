package com.kailinx.api.events;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;

@Service
public class EventService {

  private static final Map<String, String> BUCKET_TO_TRUNC = Map.of(
    "1m", "minute",
    "5m", "minute",
    "15m", "minute",
    "1h", "hour",
    "1d", "day"
  );

  private static final Map<String, String> FIELD_ALLOWLIST = Map.of(
    "event_name", "event_name",
    "page", "page",
    "referrer", "referrer",
    "device", "device"
  );

  private final JdbcTemplate jdbcTemplate;
  private final ObjectMapper objectMapper;

  public EventService(JdbcTemplate jdbcTemplate, ObjectMapper objectMapper) {
    this.jdbcTemplate = jdbcTemplate;
    this.objectMapper = objectMapper;
    ensureSchema();
  }

  private void ensureSchema() {
    jdbcTemplate.execute("""
      CREATE TABLE IF NOT EXISTS events_raw (
        id BIGSERIAL PRIMARY KEY,
        happened_at TIMESTAMPTZ NOT NULL,
        event_name TEXT NOT NULL,
        session_id TEXT,
        page TEXT,
        referrer TEXT,
        device TEXT,
        ip_hash TEXT,
        ua_hash TEXT,
        props JSONB NOT NULL DEFAULT '{}'::jsonb
      )
      """);
    jdbcTemplate.execute("CREATE INDEX IF NOT EXISTS idx_events_raw_happened_at ON events_raw(happened_at DESC)");
    jdbcTemplate.execute("CREATE INDEX IF NOT EXISTS idx_events_raw_event_name ON events_raw(event_name)");
    jdbcTemplate.execute("CREATE INDEX IF NOT EXISTS idx_events_raw_page ON events_raw(page)");
    jdbcTemplate.execute("CREATE INDEX IF NOT EXISTS idx_events_raw_referrer ON events_raw(referrer)");
    jdbcTemplate.execute("CREATE INDEX IF NOT EXISTS idx_events_raw_device ON events_raw(device)");
  }

  public int ingest(List<EventDtos.EventPayload> payloads, String ipHash, String uaHash) {
    final String sql = """
      INSERT INTO events_raw (
        happened_at, event_name, session_id, page, referrer, device, ip_hash, ua_hash, props
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CAST(? AS jsonb))
      """;

    int accepted = 0;
    for (var event : payloads) {
      try {
        var propsJson = objectMapper.writeValueAsString(event.props() == null ? Map.of() : event.props());
        jdbcTemplate.update(
          sql,
          Timestamp.from(event.happenedAt()),
          event.eventName(),
          event.sessionId(),
          event.page(),
          event.referrer(),
          event.device(),
          ipHash,
          uaHash,
          propsJson
        );
        accepted++;
      } catch (JsonProcessingException ex) {
        // Skip malformed payload props while accepting valid event bodies.
      }
    }
    return accepted;
  }

  public List<EventDtos.AggregatePoint> aggregate(String window, String bucket) {
    Instant from = resolveWindow(window);
    String trunc = BUCKET_TO_TRUNC.getOrDefault(bucket, "hour");

    String sql = """
      SELECT date_trunc('%s', happened_at) AS bucket, event_name, COUNT(*) AS count
      FROM events_raw
      WHERE happened_at >= ?
      GROUP BY bucket, event_name
      ORDER BY bucket ASC, count DESC
      """.formatted(trunc);

    RowMapper<EventDtos.AggregatePoint> mapper = (rs, rowNum) -> new EventDtos.AggregatePoint(
      rs.getTimestamp("bucket").toInstant().toString(),
      rs.getString("event_name"),
      rs.getLong("count")
    );

    return jdbcTemplate.query(sql, mapper, Timestamp.from(from));
  }

  public List<EventDtos.TopPoint> top(String field, String window, int limit) {
    Instant from = resolveWindow(window);
    String column = FIELD_ALLOWLIST.getOrDefault(field, "event_name");

    String sql = """
      SELECT COALESCE(NULLIF(%s, ''), '(none)') AS value, COUNT(*) AS count
      FROM events_raw
      WHERE happened_at >= ?
      GROUP BY value
      ORDER BY count DESC
      LIMIT ?
      """.formatted(column);

    RowMapper<EventDtos.TopPoint> mapper = (rs, rowNum) -> new EventDtos.TopPoint(
      rs.getString("value"),
      rs.getLong("count")
    );

    return jdbcTemplate.query(sql, mapper, Timestamp.from(from), Math.max(1, Math.min(200, limit)));
  }

  private Instant resolveWindow(String window) {
    return switch (window) {
      case "15m" -> Instant.now().minus(15, ChronoUnit.MINUTES);
      case "1h" -> Instant.now().minus(1, ChronoUnit.HOURS);
      case "6h" -> Instant.now().minus(6, ChronoUnit.HOURS);
      case "24h" -> Instant.now().minus(24, ChronoUnit.HOURS);
      case "7d" -> Instant.now().minus(7, ChronoUnit.DAYS);
      case "30d" -> Instant.now().minus(30, ChronoUnit.DAYS);
      default -> Instant.now().minus(24, ChronoUnit.HOURS);
    };
  }
}

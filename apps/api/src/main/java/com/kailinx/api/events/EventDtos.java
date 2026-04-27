package com.kailinx.api.events;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.Instant;
import java.util.List;
import java.util.Map;

public final class EventDtos {

  public record EventIngestRequest(
    @NotEmpty List<@Valid EventPayload> events
  ) {}

  public record EventPayload(
    @NotBlank @Size(max = 120) String eventName,
    @NotNull Instant happenedAt,
    @Size(max = 120) String sessionId,
    @Size(max = 300) String page,
    @Size(max = 300) String referrer,
    @Size(max = 80) String device,
    Map<String, Object> props
  ) {}

  public record AggregatePoint(String bucket, String eventName, long count) {}

  public record TopPoint(String value, long count) {}

  public record IngestResponse(int accepted) {}
}

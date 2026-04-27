package com.kailinx.api.events;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;
import java.util.List;

@RestController
@RequestMapping("/v1/events")
public class EventController {

  private final EventService eventService;
  private final EventRateLimiter eventRateLimiter;

  public EventController(EventService eventService, EventRateLimiter eventRateLimiter) {
    this.eventService = eventService;
    this.eventRateLimiter = eventRateLimiter;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.ACCEPTED)
  public EventDtos.IngestResponse ingest(
    @Valid @RequestBody EventDtos.EventIngestRequest request,
    HttpServletRequest servletRequest
  ) {
    String sourceIp = getClientIp(servletRequest);
    if (!eventRateLimiter.allow(sourceIp)) {
      throw new ResponseStatusException(HttpStatus.TOO_MANY_REQUESTS, "Rate limit exceeded");
    }

    String ua = servletRequest.getHeader("user-agent");
    String ipHash = sha256(sourceIp);
    String uaHash = sha256(ua == null ? "" : ua);

    int accepted = eventService.ingest(request.events(), ipHash, uaHash);
    return new EventDtos.IngestResponse(accepted);
  }

  @GetMapping("/aggregate")
  public List<EventDtos.AggregatePoint> aggregate(
    @RequestParam(defaultValue = "24h") String window,
    @RequestParam(defaultValue = "1h") String bucket
  ) {
    return eventService.aggregate(window, bucket);
  }

  @GetMapping("/top")
  public List<EventDtos.TopPoint> top(
    @RequestParam(defaultValue = "event_name") String field,
    @RequestParam(defaultValue = "24h") String window,
    @RequestParam(defaultValue = "10") int limit
  ) {
    return eventService.top(field, window, limit);
  }

  private String getClientIp(HttpServletRequest request) {
    String xff = request.getHeader("x-forwarded-for");
    if (xff != null && !xff.isBlank()) {
      return xff.split(",")[0].trim();
    }
    return request.getRemoteAddr();
  }

  private String sha256(String value) {
    try {
      var digest = MessageDigest.getInstance("SHA-256");
      byte[] hash = digest.digest(value.getBytes(StandardCharsets.UTF_8));
      return HexFormat.of().formatHex(hash);
    } catch (NoSuchAlgorithmException ex) {
      throw new IllegalStateException(ex);
    }
  }
}

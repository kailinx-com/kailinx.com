package com.kailinx.api.events;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class EventRateLimiter {

  private final int requestsPerMinute;
  private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

  public EventRateLimiter(@Value("${events.rate-limit.requests-per-minute:240}") int requestsPerMinute) {
    this.requestsPerMinute = requestsPerMinute;
  }

  public boolean allow(String key) {
    var now = Instant.now().getEpochSecond();
    var minute = now / 60;
    var bucket = buckets.computeIfAbsent(key, ignored -> new Bucket(minute, 0));
    synchronized (bucket) {
      if (bucket.minute != minute) {
        bucket.minute = minute;
        bucket.count = 0;
      }
      if (bucket.count >= requestsPerMinute) {
        return false;
      }
      bucket.count++;
      return true;
    }
  }

  private static final class Bucket {
    long minute;
    int count;

    private Bucket(long minute, int count) {
      this.minute = minute;
      this.count = count;
    }
  }
}

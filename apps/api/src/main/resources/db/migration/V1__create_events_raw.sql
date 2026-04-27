CREATE TABLE IF NOT EXISTS events_raw (
  id BIGSERIAL PRIMARY KEY,
  happened_at TIMESTAMPTZ NOT NULL,
  event_name VARCHAR(120) NOT NULL,
  session_id VARCHAR(120),
  page VARCHAR(300),
  referrer VARCHAR(300),
  device VARCHAR(80),
  ip_hash VARCHAR(80),
  ua_hash VARCHAR(80),
  props JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_events_raw_happened_at ON events_raw(happened_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_raw_event_name ON events_raw(event_name);
CREATE INDEX IF NOT EXISTS idx_events_raw_page ON events_raw(page);
CREATE INDEX IF NOT EXISTS idx_events_raw_referrer ON events_raw(referrer);
CREATE INDEX IF NOT EXISTS idx_events_raw_device ON events_raw(device);

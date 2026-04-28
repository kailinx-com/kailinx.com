type EventProps = Record<string, string | number | boolean | null | undefined>;

type EventEnvelope = {
  eventName: string;
  happenedAt: string;
  sessionId: string;
  page: string;
  referrer: string;
  device: string;
  props: Record<string, string | number | boolean | null>;
};

const API_BASE = "https://api.kailinx.com";
const STORAGE_KEY = "kailinx.events.session";

function getSessionId() {
  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (existing) return existing;
    const created = crypto.randomUUID();
    sessionStorage.setItem(STORAGE_KEY, created);
    return created;
  } catch {
    return "session-unavailable";
  }
}

function normalizeProps(props?: EventProps): Record<string, string | number | boolean | null> {
  if (!props) return {};
  const out: Record<string, string | number | boolean | null> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined) continue;
    out[key] = value;
  }
  return out;
}

function postEvents(events: EventEnvelope[]) {
  const body = JSON.stringify({ events });
  const url = `${API_BASE}/v1/events`;

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    const ok = navigator.sendBeacon(url, blob);
    if (ok) return;
  }

  void fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

export function trackEvent(eventName: string, props?: EventProps) {
  const payload: EventEnvelope = {
    eventName,
    happenedAt: new Date().toISOString(),
    sessionId: getSessionId(),
    page: window.location.pathname,
    referrer: document.referrer,
    device: navigator.userAgent,
    props: normalizeProps(props),
  };
  postEvents([payload]);
}

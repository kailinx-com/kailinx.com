export interface AggregatePoint {
  bucket: string;
  eventName: string;
  count: number;
}

export interface TopItem {
  value: string;
  count: number;
}

const API_BASE = process.env.EVENTS_API_BASE ?? "https://api.kailinx.com";

async function fetchJson<T>(path: string): Promise<T> {
  const token = process.env.EVENTS_DASHBOARD_TOKEN;
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      ...(token ? { "x-internal-token": token } : {}),
    },
  });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function fetchVolume(window = "24h", bucket = "1h") {
  return fetchJson<AggregatePoint[]>(`/v1/events/aggregate?window=${window}&bucket=${bucket}`);
}

export function fetchTop(field: "event_name" | "page" | "referrer" | "device", window = "24h", limit = 12) {
  return fetchJson<TopItem[]>(`/v1/events/top?field=${field}&window=${window}&limit=${limit}`);
}

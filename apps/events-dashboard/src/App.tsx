import { useEffect, useMemo, useState } from "react";
import { SummaryCard } from "./components/SummaryCard";
import { TopList } from "./components/TopList";
import { VolumeTable } from "./components/VolumeTable";
import { fetchTop, fetchVolume, type AggregatePoint, type TopItem } from "./lib/api";
import "./index.css";

type LoadState = "idle" | "loading" | "error";

export default function App() {
  const [state, setState] = useState<LoadState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState<AggregatePoint[]>([]);
  const [topEvents, setTopEvents] = useState<TopItem[]>([]);
  const [topPages, setTopPages] = useState<TopItem[]>([]);
  const [topReferrers, setTopReferrers] = useState<TopItem[]>([]);
  const [topDevices, setTopDevices] = useState<TopItem[]>([]);

  useEffect(() => {
    const load = async () => {
      setState("loading");
      setError(null);
      try {
        const [vol, events, pages, refs, devices] = await Promise.all([
          fetchVolume("24h", "1h"),
          fetchTop("event_name", "24h", 10),
          fetchTop("page", "24h", 10),
          fetchTop("referrer", "24h", 10),
          fetchTop("device", "24h", 10),
        ]);
        setVolume(vol);
        setTopEvents(events);
        setTopPages(pages);
        setTopReferrers(refs);
        setTopDevices(devices);
        setState("idle");
      } catch (err) {
        setState("error");
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };
    void load();
  }, []);

  const totalEvents = useMemo(() => volume.reduce((sum, p) => sum + p.count, 0), [volume]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">Observability</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Event Logging Dashboard
          </h1>
        </div>
        <span className="rounded border border-zinc-300 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600">
          Last 24 hours
        </span>
      </header>

      {state === "error" ? (
        <div className="mb-6 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Failed to load dashboard data: {error}
        </div>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Total events" value={totalEvents.toLocaleString()} subtitle="Across all event types" />
        <SummaryCard title="Unique event names" value={String(new Set(volume.map(v => v.eventName)).size)} />
        <SummaryCard title="Top event" value={topEvents[0]?.value ?? "-"} subtitle={`${topEvents[0]?.count ?? 0} hits`} />
        <SummaryCard title="Load state" value={state === "loading" ? "Loading" : "Healthy"} />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-2">
        <VolumeTable points={volume} />
        <TopList title="Top events" items={topEvents} />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <TopList title="Top pages" items={topPages} />
        <TopList title="Top referrers" items={topReferrers} />
        <TopList title="Top devices" items={topDevices} />
      </section>
    </main>
  );
}

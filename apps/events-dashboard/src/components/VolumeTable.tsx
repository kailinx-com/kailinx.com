import type { AggregatePoint } from "../lib/api";

export function VolumeTable({ points }: { points: AggregatePoint[] }) {
  const grouped = new Map<string, number>();
  for (const p of points) {
    grouped.set(p.bucket, (grouped.get(p.bucket) ?? 0) + p.count);
  }
  const rows = [...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-zinc-900">Volume over time</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-zinc-500">
              <th className="pb-2 pr-2">Bucket</th>
              <th className="pb-2">Events</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([bucket, count]) => (
              <tr key={bucket} className="border-t border-zinc-100">
                <td className="py-2 pr-2 text-zinc-700">{new Date(bucket).toLocaleString()}</td>
                <td className="py-2 font-medium text-zinc-900">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

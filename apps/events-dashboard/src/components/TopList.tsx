import type { TopItem } from "../lib/api";

export function TopList({ title, items }: { title: string; items: TopItem[] }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map(item => (
          <li key={`${item.value}-${item.count}`} className="flex items-center justify-between gap-3 text-sm">
            <span className="truncate text-zinc-700">{item.value || "(none)"}</span>
            <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700">{item.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

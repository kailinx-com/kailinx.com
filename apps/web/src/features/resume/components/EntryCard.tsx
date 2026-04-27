import type { BulletEntry } from "../../../types/resume";

export function EntryCard({
  entry,
  dimmed,
  collapsed,
  onToggle,
  onOpenCoursework,
}: {
  entry: BulletEntry;
  dimmed: boolean;
  collapsed: boolean;
  onToggle: () => void;
  onOpenCoursework?: () => void;
}) {
  const hasBullets = (entry.bullets?.length ?? 0) > 0;
  return (
    <div
      className={[
        "pl-0.5 transition-all duration-200",
        dimmed
          ? "opacity-30"
          : "opacity-100",
      ].join(" ")}
    >
      <div>
        {hasBullets ? (
        <div
          role="button"
          tabIndex={0}
          aria-expanded={!collapsed}
          onClick={onToggle}
          onKeyDown={e => {
            if (e.key !== "Enter" && e.key !== " ") return;
            if (e.target !== e.currentTarget) return;
            e.preventDefault();
            onToggle();
          }}
          className="w-full text-left group rounded-sm focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="font-bold text-black text-[13px] hover:underline"
                  >
                    {entry.title}
                  </a>
                ) : (
                  <span className="font-bold text-black text-[13px]">{entry.title}</span>
                )}
                {entry.incoming && (
                  <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wide bg-zinc-100 text-zinc-700 border border-zinc-300 px-1.5 py-0.5 rounded font-semibold">
                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" />
                    Incoming
                  </span>
                )}
              </div>
              {entry.subtitle && (
                <p className="text-[12px] text-zinc-700 mt-0.5">
                  <span className="italic">{entry.subtitle}</span>
                  {entry.showCourseworkModal && onOpenCoursework && (
                    <>
                      <span className="not-italic text-zinc-300" aria-hidden>
                        {" "}
                        ·{" "}
                      </span>
                      <button
                        type="button"
                        aria-label="View full course list"
                        onClick={e => {
                          e.stopPropagation();
                          onOpenCoursework();
                        }}
                        onKeyDown={e => e.stopPropagation()}
                        className="not-italic ml-0.5 inline-flex items-center rounded-sm border border-zinc-300/90 bg-white px-2 py-0.5 align-baseline text-[10px] font-medium text-zinc-800 transition hover:border-zinc-500 hover:text-black focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-zinc-500"
                      >
                        Course list
                      </button>
                    </>
                  )}
                </p>
              )}
            </div>
            <div className="flex items-start gap-2 shrink-0">
              <div className="text-right text-[11px] text-zinc-700">
                <p className="font-medium whitespace-nowrap">{entry.period}</p>
                {entry.location && <p className="italic mt-0.5 whitespace-nowrap">{entry.location}</p>}
              </div>
              <span
                className={[
                  "text-zinc-400 text-xs mt-0.5 transition-transform duration-200 select-none",
                  collapsed ? "" : "rotate-180",
                ].join(" ")}
              >
                ▾
              </span>
            </div>
          </div>
        </div>
        ) : (
        <div className="w-full text-left">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-black text-[13px] hover:underline"
                  >
                    {entry.title}
                  </a>
                ) : (
                  <span className="font-bold text-black text-[13px]">{entry.title}</span>
                )}
                {entry.incoming && (
                  <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wide bg-zinc-100 text-zinc-700 border border-zinc-300 px-1.5 py-0.5 rounded font-semibold">
                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" />
                    Incoming
                  </span>
                )}
              </div>
              {entry.subtitle && (
                <p className="text-[12px] text-zinc-700 mt-0.5">
                  <span className="italic">{entry.subtitle}</span>
                  {entry.showCourseworkModal && onOpenCoursework && (
                    <>
                      <span className="not-italic text-zinc-300" aria-hidden>
                        {" "}
                        ·{" "}
                      </span>
                      <button
                        type="button"
                        aria-label="View full course list"
                        onClick={onOpenCoursework}
                        className="not-italic ml-0.5 inline-flex items-center rounded-sm border border-zinc-300/90 bg-white px-2 py-0.5 align-baseline text-[10px] font-medium text-zinc-800 transition hover:border-zinc-500 hover:text-black focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-zinc-500"
                      >
                        Course list
                      </button>
                    </>
                  )}
                </p>
              )}
            </div>
            <div className="flex items-start gap-2 shrink-0 text-right text-[11px] text-zinc-700">
              <div>
                <p className="font-medium whitespace-nowrap">{entry.period}</p>
                {entry.location && <p className="italic mt-0.5 whitespace-nowrap">{entry.location}</p>}
              </div>
            </div>
          </div>
        </div>
        )}
      </div>

      {hasBullets && (
      <div
        className={[
          "overflow-hidden transition-all duration-300 ease-in-out",
          collapsed ? "max-h-0 opacity-0" : "max-h-150 opacity-100",
        ].join(" ")}
      >
        <ul className="mt-1.5 space-y-0.5 pb-0.5">
          {entry.bullets!.map((bullet, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[12px] text-zinc-800">
              <span className="text-zinc-500 shrink-0 leading-5 select-none">-</span>
              <span className="leading-5">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}

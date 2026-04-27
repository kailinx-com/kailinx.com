import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import {
  NEU_COURSEWORK_TERMS,
  NEU_TRANSFER_CREDITS,
} from "./neuCourseworkData";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function NeuCourseworkModal({ open, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-zinc-900/45 backdrop-blur-[2px] transition-opacity"
        aria-label="Close course list"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[min(88vh,800px)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-zinc-200/90 bg-zinc-50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]"
      >
        <header className="shrink-0 border-b border-zinc-200/90 bg-white px-5 py-3.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <h2
              id={titleId}
              className="shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-black leading-none"
            >
              Northeastern coursework
            </h2>
            <div
              className="h-0 min-w-3 flex-1 border-t border-black"
              aria-hidden
            />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-800"
              aria-label="Close"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          <div className="space-y-8">
            {NEU_COURSEWORK_TERMS.map(term => (
              <section key={term.id} className="space-y-2.5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  {term.label}
                </h3>
                <ul className="overflow-hidden rounded-lg border border-zinc-200/80 bg-white divide-y divide-zinc-200/80">
                  {term.courses.map(c => (
                    <li
                      key={`${term.id}-${c.code}-${c.title}`}
                      className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 px-3.5 py-2.5"
                    >
                      <span className="font-mono text-[12px] font-medium tabular-nums text-zinc-800">
                        {c.code}
                      </span>
                      <span className="text-[12px] leading-snug text-zinc-800">{c.title}</span>
                      {c.status === "in_progress" && (
                        <span className="text-[10px] font-medium uppercase tracking-wide text-amber-700/90">
                          In progress
                        </span>
                      )}
                      {c.status === "planned" && (
                        <span className="text-[10px] font-medium uppercase tracking-wide text-sky-700/80">
                          Planned
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="space-y-2.5">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Transfer credit</h3>
              {NEU_TRANSFER_CREDITS.map(block => (
                <div key={block.from} className="rounded-lg border border-zinc-200/60 bg-white/60 px-3.5 py-2.5">
                  <p className="text-[11px] font-medium text-zinc-600">{block.from}</p>
                  <ul className="mt-2 space-y-1.5">
                    {block.rows.map(r => (
                      <li key={r.code} className="text-[12px] text-zinc-800">
                        <span className="font-mono">{r.code}</span> {r.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>

        <footer className="shrink-0 border-t border-zinc-200 bg-white/80 px-5 py-3 text-center text-[10px] text-zinc-400">
          B.S. Computer Science, minor Computer Engineering · Khoury College of Computer Sciences
        </footer>
      </div>
    </div>,
    document.body,
  );
}

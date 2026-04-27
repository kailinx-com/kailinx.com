import { PROFILE } from "../../../data/profile";
import { trackEvent } from "../../../lib/events";

export function FooterSection() {
  return (
    <footer className="mt-2 border-t border-zinc-200/80 pt-8 pb-2 text-center text-[11px] text-zinc-500">
      <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>
          <span className="text-zinc-400">© {new Date().getFullYear()}</span>{" "}
          <span className="text-zinc-600">{PROFILE.name}</span>
        </span>
        <span className="text-zinc-300 select-none" aria-hidden>
          |
        </span>
        <a
          href="/Kailin_Xing_Resume_SoftwareIntern.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Open as PDF (new tab)"
          onClick={() => trackEvent("resume_pdf_opened", { source: "footer" })}
          className="text-zinc-500 underline underline-offset-[3px] decoration-zinc-300/80 transition-colors hover:text-zinc-800 hover:decoration-zinc-500"
        >
          pdf
        </a>
      </p>
    </footer>
  );
}

import { HUMAN_LANGUAGES, PROFILE } from "../../../data/profile";

export function HeaderSection({
  emailCopied,
  onEmailClick,
}: {
  emailCopied: boolean;
  onEmailClick: () => void;
}) {
  return (
    <header className="text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {PROFILE.name}
      </h1>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[13px] text-muted-foreground sm:mt-3.5">
        <span>{PROFILE.location}</span>
        <span className="text-zinc-300 select-none" aria-hidden>
          |
        </span>
        <span>{PROFILE.phone}</span>
        <span className="text-zinc-300 select-none" aria-hidden>
          |
        </span>
        <button
          type="button"
          onClick={onEmailClick}
          title={emailCopied ? "Copied!" : "Click to copy email"}
          className="hover:text-foreground transition-colors cursor-pointer"
        >
          {emailCopied
            ? <span className="text-emerald-600 font-medium">Copied!</span>
            : PROFILE.email
          }
        </button>
        <span className="text-zinc-300 select-none" aria-hidden>
          |
        </span>
        <a
          href={PROFILE.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground underline underline-offset-2 decoration-zinc-300 transition-colors"
        >
          {PROFILE.linkedinText}
        </a>
        <span className="text-zinc-300 select-none" aria-hidden>
          |
        </span>
        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground underline underline-offset-2 decoration-zinc-300 transition-colors"
        >
          {PROFILE.githubText}
        </a>
      </div>
      <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] text-zinc-500">
        <a href={`mailto:${PROFILE.schoolEmail}`} className="hover:text-foreground transition-colors">
          {PROFILE.schoolEmail}
        </a>
        <span className="text-zinc-300 select-none" aria-hidden>
          |
        </span>
        <a
          href={PROFILE.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground underline underline-offset-2 decoration-zinc-300/80"
        >
          {PROFILE.xText}
        </a>
      </div>
      <p className="mx-auto mt-1.5 max-w-2xl text-center text-[11px] leading-relaxed text-zinc-500">
        {HUMAN_LANGUAGES}
      </p>
    </header>
  );
}

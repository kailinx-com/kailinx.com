import { Link } from "react-router-dom";
import { HUMAN_LANGUAGES, PROFILE } from "../data/profile";

const textLink =
  "text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-black hover:decoration-zinc-500";

export default function AboutPage() {
  return (
    <div className="space-y-8 text-left">
      <header>
        <div className="mb-2 flex items-center gap-2">
          <p className="m-0 shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-black">
            About
          </p>
          <div className="h-px flex-1 border-t border-black" />
        </div>
        <div className="mt-0.5 flex flex-col items-center gap-3 sm:mt-1 sm:flex-row sm:items-start sm:gap-4">
          <div className="shrink-0">
            <img
              src="/kailin-avatar-notion-transparent.png"
              alt="Stylized portrait illustration of Kailin"
              width={220}
              height={220}
              decoding="async"
              className="h-48 w-48 max-w-full select-none object-contain sm:h-56 sm:w-56"
            />
          </div>
          <div className="min-w-0 flex-1 text-center sm:pt-0 sm:text-left">
            <h1 className="m-0 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              {PROFILE.name}
            </h1>
            <p className="mt-1 text-[13px] text-zinc-500">Based in {PROFILE.location}</p>
          </div>
        </div>
      </header>

      <div className="space-y-4 text-[14px] leading-[1.75] text-zinc-800 sm:text-[15px] sm:leading-8">
        <p>
          I&rsquo;m <span className="text-black">Kailin</span>—a third-year computer science student
          at <span className="text-black">Northeastern University</span> (minoring in computer
          engineering). I&rsquo;m an incoming software engineering intern at{" "}
          <span className="text-black">NVIDIA</span>, and an HPC research assistant at NUCAR
          (Northeastern&rsquo;s computer architecture research lab). Before that, I was a full-stack
          software engineering co-op at the <span className="text-black">Boston Red Sox</span>.
        </p>
        <p>
          Born in Shenzhen, raised in Warsaw. I&rsquo;m open to new tech stacks, always ready for new
          opportunities, and I like work that is clear, reviewed, and measurable.
        </p>
      </div>

      <section>
        <h2 className="mb-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-black">
          Contact
        </h2>
        <ul className="m-0 list-none space-y-2.5 p-0 text-[13px] text-zinc-800">
          <li>
            <a href={`tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`} className={textLink}>
              {PROFILE.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${PROFILE.schoolEmail}`} className={textLink}>
              {PROFILE.schoolEmail}
            </a>{" "}
            <span className="text-[11px] text-zinc-400">(school)</span>
          </li>
          <li>
            <a href={`mailto:${PROFILE.email}`} className={textLink}>
              {PROFILE.email}
            </a>{" "}
            <span className="text-[11px] text-zinc-400">(personal)</span>
          </li>
          <li>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              {PROFILE.githubText}
            </a>
          </li>
          <li>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              {PROFILE.linkedinText}
            </a>
          </li>
          <li>
            <a href={PROFILE.xUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
              {PROFILE.xText}
            </a>
          </li>
        </ul>
      </section>

      <p className="text-[12px] leading-relaxed text-zinc-500">
        <span className="text-zinc-400">Languages: </span>
        {HUMAN_LANGUAGES}
      </p>

      <p className="text-[12px] text-zinc-500">
        For experience, projects, and certifications, see the{" "}
        <Link to="/" className="text-zinc-700 underline decoration-zinc-300 underline-offset-2 transition-colors hover:text-black">
          Resume
        </Link>{" "}
        page.
      </p>
    </div>
  );
}

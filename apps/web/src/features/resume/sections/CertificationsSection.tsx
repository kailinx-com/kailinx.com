import { CERTIFICATIONS } from "../../../content/certifications";
import { SectionHeader } from "../components/SectionHeader";

export function CertificationsSection({
  isDimmed,
}: {
  isDimmed: (tags?: string[]) => boolean;
}) {
  return (
    <section>
      <SectionHeader title="Certifications" />
      <ul className="mt-0.5 list-none space-y-2.5 p-0 text-[12px] text-zinc-800">
        {CERTIFICATIONS.map(c => (
          <li
            key={c.id}
            className={[
              "border-l-2 border-zinc-200 pl-3 transition-all duration-200",
              isDimmed(c.tags) ? "opacity-30" : "opacity-100",
            ].join(" ")}
          >
            <p className="font-semibold text-black">
              {c.name} <span className="font-normal text-zinc-600">— {c.issuer}, {c.date}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

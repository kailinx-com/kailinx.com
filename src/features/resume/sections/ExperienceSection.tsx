import { EXPERIENCES } from "../../../content/experiences";
import { EntryCard } from "../components/EntryCard";
import { SectionHeader } from "../components/SectionHeader";

export function ExperienceSection({
  isDimmed,
  collapsed,
  onToggleCollapsed,
}: {
  isDimmed: (tags?: string[]) => boolean;
  collapsed: Set<string>;
  onToggleCollapsed: (id: string) => void;
}) {
  return (
    <section>
      <SectionHeader title="Experience" />
      <div className="space-y-3.5">
        {EXPERIENCES.map(exp => (
          <EntryCard
            key={exp.id}
            entry={exp}
            dimmed={isDimmed(exp.tags)}
            collapsed={collapsed.has(exp.id)}
            onToggle={() => onToggleCollapsed(exp.id)}
          />
        ))}
      </div>
    </section>
  );
}

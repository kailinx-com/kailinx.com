import { EDUCATION_ENTRIES } from "../../../content/education";
import { EntryCard } from "../components/EntryCard";
import { SectionHeader } from "../components/SectionHeader";

export function EducationSection({
  isDimmed,
  collapsed,
  onToggleCollapsed,
  onOpenCoursework,
}: {
  isDimmed: (tags?: string[]) => boolean;
  collapsed: Set<string>;
  onToggleCollapsed: (id: string) => void;
  onOpenCoursework: () => void;
}) {
  return (
    <section>
      <SectionHeader title="Education" />
      <div className="space-y-3.5">
        {EDUCATION_ENTRIES.map(edu => (
          <EntryCard
            key={edu.id}
            entry={edu}
            dimmed={isDimmed(edu.tags)}
            collapsed={collapsed.has(edu.id)}
            onToggle={() => onToggleCollapsed(edu.id)}
            onOpenCoursework={edu.showCourseworkModal ? onOpenCoursework : undefined}
          />
        ))}
      </div>
    </section>
  );
}

import { PROJECTS } from "../../../content/projects";
import { EntryCard } from "../components/EntryCard";
import { SectionHeader } from "../components/SectionHeader";

export function ProjectsSection({
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
      <SectionHeader title="Projects" />
      <div className="space-y-3.5">
        {PROJECTS.map(proj => (
          <EntryCard
            key={proj.id}
            entry={proj}
            dimmed={isDimmed(proj.tags)}
            collapsed={collapsed.has(proj.id)}
            onToggle={() => onToggleCollapsed(proj.id)}
          />
        ))}
      </div>
    </section>
  );
}

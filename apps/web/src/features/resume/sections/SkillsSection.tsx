import { SKILLS } from "../../../content/skills";
import { SectionHeader } from "../components/SectionHeader";
import { SkillPill } from "../components/SkillPill";

export function SkillsSection({
  selectedSkills,
  filterActive,
  onToggleSkill,
  onClearSkills,
}: {
  selectedSkills: Set<string>;
  filterActive: boolean;
  onToggleSkill: (skill: string) => void;
  onClearSkills: () => void;
}) {
  return (
    <section>
      <SectionHeader title="Technical Skills" />
      <div className="space-y-2">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="flex gap-2 flex-wrap sm:flex-nowrap items-start">
            <span className="text-[12px] font-semibold text-black sm:w-44 shrink-0 pt-0.5">
              {category}:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {skills.map(skill => (
                <SkillPill
                  key={skill}
                  label={skill}
                  active={selectedSkills.has(skill)}
                  onClick={() => onToggleSkill(skill)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-[11px] text-zinc-500">
          {filterActive
            ? `${selectedSkills.size} skill${selectedSkills.size !== 1 ? "s" : ""} selected — filtering results below`
            : "Click any skill to filter experience, projects & certifications"}
        </p>
        {filterActive && (
          <button
            onClick={onClearSkills}
            className="text-[11px] text-zinc-500 hover:text-zinc-800 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>
    </section>
  );
}

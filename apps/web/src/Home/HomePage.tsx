import { useState } from "react";
import "../index.css";
import { PROFILE } from "../data/profile";
import { NeuCourseworkModal } from "./NeuCourseworkModal";
import { CertificationsSection } from "../features/resume/sections/CertificationsSection";
import { EducationSection } from "../features/resume/sections/EducationSection";
import { ExperienceSection } from "../features/resume/sections/ExperienceSection";
import { FooterSection } from "../features/resume/sections/FooterSection";
import { HeaderSection } from "../features/resume/sections/HeaderSection";
import { ProjectsSection } from "../features/resume/sections/ProjectsSection";
import { SkillsSection } from "../features/resume/sections/SkillsSection";
import { isEntryDimmed } from "../features/resume/utils/filters";

export default function HomePage() {
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set());
  const [collapsed, setCollapsed] = useState<Set<string>>(
    () => new Set(["edu-codepath", "edu-asw-ib"]),
  );
  const [emailCopied, setEmailCopied] = useState(false);
  const [courseworkOpen, setCourseworkOpen] = useState(false);

  const filterActive = selectedSkills.size > 0;

  function toggleSkill(skill: string) {
    setSelectedSkills(prev => {
      const next = new Set(prev);
      next.has(skill) ? next.delete(skill) : next.add(skill);
      return next;
    });
  }

  function toggleCollapsed(id: string) {
    setCollapsed(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function isDimmed(tags?: string[]) {
    return isEntryDimmed({ tags, selectedSkills, filterActive });
  }

  async function handleEmailClick() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  return (
    <div className="w-full">
      <div className="space-y-8 sm:space-y-10">
        <HeaderSection emailCopied={emailCopied} onEmailClick={handleEmailClick} />

        <div className="space-y-8 text-left sm:space-y-10">
          <EducationSection
            isDimmed={isDimmed}
            collapsed={collapsed}
            onToggleCollapsed={toggleCollapsed}
            onOpenCoursework={() => setCourseworkOpen(true)}
          />

          <SkillsSection
            selectedSkills={selectedSkills}
            filterActive={filterActive}
            onToggleSkill={toggleSkill}
            onClearSkills={() => setSelectedSkills(new Set())}
          />

          <ExperienceSection
            isDimmed={isDimmed}
            collapsed={collapsed}
            onToggleCollapsed={toggleCollapsed}
          />

          <ProjectsSection
            isDimmed={isDimmed}
            collapsed={collapsed}
            onToggleCollapsed={toggleCollapsed}
          />

          <CertificationsSection isDimmed={isDimmed} />

          <FooterSection />
        </div>
      </div>
      <NeuCourseworkModal open={courseworkOpen} onClose={() => setCourseworkOpen(false)} />
    </div>
  );
}

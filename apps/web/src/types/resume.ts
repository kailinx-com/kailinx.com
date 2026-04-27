export interface BulletEntry {
  id: string;
  title: string;
  url?: string;
  subtitle: string;
  location?: string;
  period: string;
  incoming?: boolean;
  bullets?: string[];
  tags?: string[];
  showCourseworkModal?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  tags: string[];
}

export type SkillMap = Record<string, string[]>;

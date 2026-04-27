import type { BulletEntry } from "../types/resume";

export const EDUCATION_ENTRIES: BulletEntry[] = [
  {
    id: "edu-neu",
    title: "Northeastern University",
    subtitle: "Bachelor of Science in Computer Science, Minor: Computer Engineering | GPA: 3.6/4.0",
    location: "Boston, MA",
    period: "Sep 2023 -- May 2027",
    bullets: [
      "Fall 2023 — Northeastern University London, London, United Kingdom (Global Scholars 2023 fall; Sep 2023 -- Dec 2023).",
      "Spring 2024 — Mills College, Oakland, California (Global Scholars 2024 spring; Jan 2024 -- Apr 2024).",
      "Competitions: Harvard Undergraduate Trading Competition — 5th place overall, 3rd place news-based trading",
    ],
    showCourseworkModal: true,
  },
  {
    id: "edu-codepath",
    title: "CodePath",
    subtitle: "TIP 103, TIP 102, and SE 101",
    location: "Remote",
    period: "Jun 2023 -- Nov 2024",
    bullets: [
      "SE 101: Intro to Software Engineering — Jun 2023 -- Aug 2023. Built a solid Python foundation through lectures, pair programming, and interactive sessions with peers.",
      "TIP 102: Intermediate Technical Interview Prep — Jun 2024 -- Aug 2024.",
      "TIP 103: Advanced Technical Interview Prep — Jun 2024 -- Nov 2024.",
    ],
  },
  {
    id: "edu-asw-ib",
    title: "American School of Warsaw",
    subtitle:
      "International Baccalaureate Diploma Programme, College/University Preparatory and Advanced High School/Secondary Diploma Program",
    location: "Warsaw, Poland",
    period: "Aug 2021 -- May 2023",
    bullets: [
      "IBDP courses: Math Analysis & Approaches Higher Level, Computer Science Higher Level, Business Management Higher Level, Physics Standard Level, English A: Language & Literature Standard Level, Spanish Ab Initio Standard Level",
      "Activities and societies: Competitive Coding Club | Student Council | Student Leadership Council: Executive Co-Publicist & 10th Grade Publicist | Media Club: Livestream Specialist; Photographer | 10+ times Coffee House Solo Singer/Performer | Jazz/Rock/Pop Razz Band Lead Singer | Varsity Football | Varsity Tennis | Online Gazette | MUN: ASMMUN 2020, IV ZYGMUN 2021, Yale MUN 2023 | Speech & Debate | Relay For Life",
      "International Baccalaureate Middle Years Programme, Aug 2018 -- May 2021.",
    ],
  },
];

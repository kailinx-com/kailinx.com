export type NeuCourseStatus = "completed" | "in_progress" | "planned";

export interface NeuCourse {
  code: string;
  title: string;
  credits: number;
  grade: string;
  status: NeuCourseStatus;
}

export interface NeuTerm {
  id: string;
  label: string;
  courses: NeuCourse[];
}

export const NEU_COURSEWORK_TERMS: NeuTerm[] = [
  {
    id: "fall-2023",
    label: "Fall 2023",
    courses: [
      { code: "ABRC 5005", title: "Global Scholars — London", credits: 0, grade: "S", status: "completed" },
      { code: "CS 1800", title: "Discrete Structures", credits: 4, grade: "A", status: "completed" },
      { code: "CS 1802", title: "Seminar for CS 1800", credits: 1, grade: "A", status: "completed" },
      { code: "CS 2500", title: "Fundamentals of Computer Science 1", credits: 4, grade: "A", status: "completed" },
      { code: "CS 2501", title: "Lab for CS 2500", credits: 1, grade: "A", status: "completed" },
      { code: "ENGW 1111", title: "First-Year Writing", credits: 4, grade: "B+", status: "completed" },
      { code: "HIST 2376", title: "Britain and the British Empire", credits: 4, grade: "A−", status: "completed" },
    ],
  },
  {
    id: "spring-2024",
    label: "Spring 2024",
    courses: [
      { code: "CS 2510", title: "Fundamentals of Computer Science 2", credits: 4, grade: "A", status: "completed" },
      { code: "CS 2511", title: "Lab for CS 2510", credits: 1, grade: "A", status: "completed" },
      { code: "CS 2810", title: "Mathematics of Data Models", credits: 4, grade: "A", status: "completed" },
      { code: "CS 3200", title: "Database Design", credits: 4, grade: "A", status: "completed" },
      { code: "MATH 1365", title: "Intro to Math Reasoning", credits: 4, grade: "A−", status: "completed" },
    ],
  },
  {
    id: "summer1-2024",
    label: "Summer 1 2024",
    courses: [
      { code: "GE 1110", title: "Engineering Design", credits: 4, grade: "A", status: "completed" },
      { code: "GE 1111", title: "Engineering Problem Solving and Computation", credits: 4, grade: "A", status: "completed" },
    ],
  },
  {
    id: "summer2-2024",
    label: "Summer 2 2024",
    courses: [
      { code: "HIST 1130", title: "History of the United States", credits: 4, grade: "A−", status: "completed" },
      { code: "MATH 2331", title: "Linear Algebra", credits: 4, grade: "A", status: "completed" },
    ],
  },
  {
    id: "fall-2024",
    label: "Fall 2024",
    courses: [
      { code: "CS 2800", title: "Logic and Computation", credits: 4, grade: "C−", status: "completed" },
      { code: "CS 3500", title: "Object-Oriented Design", credits: 4, grade: "B", status: "completed" },
      { code: "CS 3501", title: "Lab for CS 3500", credits: 1, grade: "B", status: "completed" },
      { code: "EECE 2140", title: "Computing Fundamentals for Engineers", credits: 4, grade: "A", status: "completed" },
      { code: "GE 1000", title: "First-Year Seminar", credits: 1, grade: "S", status: "completed" },
      { code: "MATH 1342", title: "Calculus 2 for Science & Engineering", credits: 4, grade: "C", status: "completed" },
    ],
  },
  {
    id: "spring-2025",
    label: "Spring 2025",
    courses: [
      { code: "CS 1210", title: "Professional Development (Co-op)", credits: 1, grade: "A−", status: "completed" },
      { code: "CS 3000", title: "Algorithms & Data", credits: 4, grade: "D+", status: "completed" },
      { code: "CS 3650", title: "Computer Systems", credits: 4, grade: "D", status: "completed" },
      { code: "EECE 2310", title: "Introduction to Digital Design & Computer Architecture", credits: 4, grade: "A", status: "completed" },
      { code: "EECE 2311", title: "Lab for EECE 2310", credits: 1, grade: "A", status: "completed" },
      { code: "THTR 1125", title: "Improvisation", credits: 4, grade: "B", status: "completed" },
    ],
  },
  {
    id: "summer1-2025",
    label: "Summer 1 2025",
    courses: [
      { code: "CS 3800", title: "Theory of Computation", credits: 4, grade: "C", status: "completed" },
      { code: "EECE 2540", title: "Fundamentals of Networks", credits: 4, grade: "A", status: "completed" },
    ],
  },
  {
    id: "summer2-2025",
    label: "Summer 2 2025",
    courses: [
      { code: "COOP 3945", title: "Co-op Work Experience", credits: 0, grade: "S", status: "completed" },
    ],
  },
  {
    id: "fall-2025",
    label: "Fall 2025",
    courses: [
      { code: "COOP 3945", title: "Co-op Work Experience", credits: 0, grade: "S", status: "completed" },
    ],
  },
  {
    id: "spring-2026",
    label: "Spring 2026 (in progress)",
    courses: [
      { code: "CS 4550", title: "Web Development", credits: 4, grade: "—", status: "in_progress" },
      { code: "CS 4730", title: "Distributed Systems", credits: 4, grade: "—", status: "in_progress" },
      { code: "CY 2550", title: "Foundations of Cybersecurity", credits: 4, grade: "—", status: "in_progress" },
      { code: "EECE 2160", title: "Embedded Design Enabling Robotics", credits: 4, grade: "—", status: "in_progress" },
    ],
  },
  {
    id: "summer-2026",
    label: "Summer 2026 (registered)",
    courses: [
      { code: "COOP 3945", title: "Co-op Work Experience", credits: 0, grade: "—", status: "planned" },
    ],
  },
  {
    id: "fall-2026",
    label: "Fall 2026 (registered)",
    courses: [
      { code: "CS 4400", title: "Programming Languages", credits: 4, grade: "—", status: "planned" },
      { code: "CS 4530", title: "Fundamentals of Software Engineering", credits: 4, grade: "—", status: "planned" },
      { code: "PHIL 1145", title: "Technology and Human Values", credits: 4, grade: "—", status: "planned" },
    ],
  },
];

export const NEU_TRANSFER_CREDITS: { from: string; rows: { code: string; title: string; grade: string; credits: number }[] }[] = [
  {
    from: "International Baccalaureate (Sw)",
    rows: [
      { code: "BUSN 1990", title: "Elective", grade: "T", credits: 4 },
      { code: "CS 1990", title: "Elective", grade: "T", credits: 4 },
    ],
  },
  {
    from: "Arizona State University",
    rows: [
      { code: "MATH 1341", title: "Calculus 1 for Science & Engineering", grade: "T", credits: 3 },
    ],
  },
];

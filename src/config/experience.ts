export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2026 — Present",
    description:
      "Building and maintaining modern web applications with a focus on scalable architecture and user experience.",
    highlights: [
      "Developed responsive web interfaces using modern frontend technologies.",
      "Worked with reusable components and maintainable application architecture.",
      "Collaborated with stakeholders to deliver practical digital solutions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Company Name",
    period: "2025 — 2026",
    description:
      "Focused on developing responsive interfaces and improving the usability of web applications.",
    highlights: [
      "Built reusable UI components.",
      "Improved responsive behavior across desktop and mobile devices.",
      "Integrated frontend interfaces with application services.",
    ],
  },
];
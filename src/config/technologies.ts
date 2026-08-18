import {
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "@icons-pack/react-simple-icons";

import type { ComponentType } from "react";

type TechnologyIconProps = {
  size?: number;
  className?: string;
  color?: string;
  title?: string;
};

export type Technology = {
  name: string;
  icon: ComponentType<TechnologyIconProps>;
};

export const technologies: Technology[] = [
  // Web Development
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "HTML/CSS",
    icon: SiHtml5,
  },
  {
    name: "WordPress",
    icon: SiWordpress,
  },

  // Backend & Database
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Redis",
    icon: SiRedis,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
  },
  {
    name: "Flask",
    icon: SiFlask,
  },

  // Data & Machine Learning
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "Pandas",
    icon: SiPandas,
  },
  {
    name: "NumPy",
    icon: SiNumpy,
  },
  {
    name: "Scikit-learn",
    icon: SiScikitlearn,
  },

  // Tools
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
];
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

import type { ComponentType } from "react";

export type ProjectTechnology = {
  name: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
    color?: string;
    title?: string;
  }>;
};

export type Project = {
  title: string;
  description: string;
  technologies: ProjectTechnology[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A modern web application focused on delivering a clean and practical user experience.",
    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    title: "Project Two",
    description:
      "A responsive digital product built with maintainable architecture and modern web technologies.",
    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
    ],
  },
  {
    title: "Project Three",
    description:
      "An application designed to solve practical problems through thoughtful product and engineering decisions.",
    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Python",
        icon: SiPython,
      },
    ],
  },
];
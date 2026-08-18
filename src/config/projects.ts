import {
  SiFlask,
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
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Aurora",
    description:
      "A full-stack digital wedding invitation platform currently in development, designed with a modular architecture and modern web technologies.",
    technologies: [
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
        name: "Node.js",
        icon: SiNodedotjs,
      },
    ],
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing professional experience, selected projects, technical skills, and academic background.",
    technologies: [
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
    ],
    image: "/projects/preview-dikril.png",
    href: "https://dikril-hakim.vercel.app",
  },

  {
    title: "Auctore Group Company Profile",
    description:
      "A responsive company profile website built with a modular component structure and a focus on maintainability, responsive design, and SEO.",
    technologies: [
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
    ],
    image: "/projects/preview-auctore.png",
    href: "https://auctore-group.vercel.app",
  },

  {
    title: "Property Price Prediction",
    description:
      "An academic machine learning project for predicting property prices in the Greater Bandung Area using the K-Nearest Neighbors Regression method.",
    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
    image: "/projects/preview-ta.jpeg",
  },
];

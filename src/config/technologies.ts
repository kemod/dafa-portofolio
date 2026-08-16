import {
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
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
  {
    name: "React",
    icon: SiReact,
  },
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
  {
    name: "Python",
    icon: SiPython,
  },
];
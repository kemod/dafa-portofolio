import {
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { TechnologyPill } from "@/components/common/technology-pill";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Technologies } from "@/components/sections/technologies";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <FeaturedProjects />

      <Experience />

      <Technologies />

    </>
  );
}
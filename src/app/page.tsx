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

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <FeaturedProjects />

      <Experience />

      <Section id="technologies">
        <Container>
          <div className="mb-12">
            <SectionHeader
              align="center"
              title="Technologies"
              description="Tools and technologies I use to build modern web applications."
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <TechnologyPill
              icon={SiReact}
              name="React"
            />

            <TechnologyPill
              icon={SiNextdotjs}
              name="Next.js"
            />

            <TechnologyPill
              icon={SiTypescript}
              name="TypeScript"
            />

            <TechnologyPill
              icon={SiPython}
              name="Python"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
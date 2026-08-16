import { Container } from "@/components/common/container";
import { TechnologyPill } from "@/components/common/technology-pill";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { technologies } from "@/config/technologies";

export function Technologies() {
  return (
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
          {technologies.map((technology) => (
            <TechnologyPill
              key={technology.name}
              icon={technology.icon}
              name={technology.name}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
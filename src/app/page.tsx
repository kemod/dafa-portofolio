import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { TechnologyPill } from "@/components/common/technology-pill";

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <div className="mb-12">
            <SectionHeader
              title="Featured Projects"
              description="A collection of selected software engineering and web development projects."
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mb-12">
            <SectionHeader
              align="center"
              title="Technologies"
              description="Tools and technologies I use to build modern web applications."
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-wrap gap-3">
            <TechnologyPill icon="⚛️" name="React" />

            <TechnologyPill icon="▲" name="Next.js" />

            <TechnologyPill icon="📘" name="TypeScript" />

            <TechnologyPill icon="🐍" name="Python" />
          </div>
        </Container>
      </Section>
    </>
  );
}

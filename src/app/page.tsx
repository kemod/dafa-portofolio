import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";

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
    </>
  );
}
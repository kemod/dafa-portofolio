import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            title="About"
            description="A brief introduction and overview of my background."
          />

          <div className="space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              I am a software engineer focused on building modern web
              applications with clean architecture and maintainable code.
            </p>

            <p>
              I enjoy turning ideas into practical digital experiences while
              continuously improving my technical skills and understanding of
              modern web technologies.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
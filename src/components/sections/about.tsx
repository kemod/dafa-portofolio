import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            title="About Me"
            description="Informatics graduate with experience across web development, e-commerce operations, and digital technologies."
          />

          <div className="space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              I am an Informatics graduate from Universitas Jenderal Achmad
              Yani with professional experience in e-commerce operations,
              particularly across Shopee, TikTok Shop, and Tokopedia.
            </p>

            <p>
              Alongside my e-commerce experience, I have hands-on experience
              building websites and web applications through professional,
              academic, organizational, and independent projects. My technical
              interests include modern web development, backend technologies,
              databases, and machine learning.
            </p>

            <p>
              I enjoy turning ideas into practical digital solutions while
              continuously improving my technical skills, problem-solving
              abilities, and understanding of modern technologies.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
"use client";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { useTranslation } from "@/i18n/use-translation";

export function About() {
  const t = useTranslation();

  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <ScrollReveal>
            <SectionHeader
              title={t.about.title}
              description={t.about.description}
            />
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-4 text-base leading-7 text-muted-foreground">
              <p>{t.about.paragraph1}</p>

              <p>{t.about.paragraph2}</p>

              <p>{t.about.paragraph3}</p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
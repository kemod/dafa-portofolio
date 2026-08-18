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
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:items-start">
          {/* Section heading */}
          <ScrollReveal>
            <SectionHeader
              title={t.about.title}
              description={t.about.description}
            />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={150}>
            <div className="space-y-8">
              <div className="space-y-5 text-base leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
                <p>{t.about.paragraph1}</p>

                <p>{t.about.paragraph2}</p>

                <p>{t.about.paragraph3}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="group rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-primary"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {t.about.focus.label}
                    </span>
                  </div>

                  <p className="font-heading text-sm font-semibold">
                    {t.about.focus.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {t.about.focus.description}
                  </p>
                </div>

                <div className="group rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-primary"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {t.about.interests.label}
                    </span>
                  </div>

                  <p className="font-heading text-sm font-semibold">
                    {t.about.interests.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {t.about.interests.description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
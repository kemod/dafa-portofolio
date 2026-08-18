"use client";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { committeeExperiences } from "@/config/committee";
import { useTranslation } from "@/i18n/use-translation";

export function Committee() {
  const t = useTranslation();

  return (
    <Section id="committee">
      <Container>
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeader
              title={t.committee.title}
              description={t.committee.description}
            />
          </div>
        </ScrollReveal>

        <div className="relative space-y-8">
          {/* Timeline */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] top-4 bottom-4 w-px bg-border"
          />

          {committeeExperiences.map((experience, index) => {
            const translation = t.committee.experiences[index];

            return (
              <ScrollReveal
                key={`${experience.event}-${experience.role}-${experience.period}`}
                delay={index * 120}
              >
                <article className="group relative pl-10">
                  {/* Timeline Marker */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-background"
                  >
                    <span className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:bg-primary" />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border bg-card p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">
                          {translation.role}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {experience.event}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                      {translation.description}
                    </p>

                    <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-6 text-muted-foreground">
                      {translation.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-5"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-current"
                          />

                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
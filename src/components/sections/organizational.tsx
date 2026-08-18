"use client";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { organizationalExperiences } from "@/config/organizational";
import { useTranslation } from "@/i18n/use-translation";

export function Organizational() {
  const t = useTranslation();

  return (
    <Section id="organizational">
      <Container>
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeader
              title={t.organizational.title}
              description={t.organizational.description}
            />
          </div>
        </ScrollReveal>

        <div className="space-y-10">
          {organizationalExperiences.map((experience, index) => {
            const translation = t.organizational.experiences[index];

            return (
              <ScrollReveal
                key={`${experience.organization}-${experience.role}-${experience.period}`}
                delay={index * 100}
              >
                <article className="group border-l pl-6 sm:pl-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                        {translation.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {experience.organization}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                    {translation.description}
                  </p>

                  <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-6 text-muted-foreground">
                    {translation.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-5"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary/70"
                        />

                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
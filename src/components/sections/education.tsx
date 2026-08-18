"use client";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { TechnologyPill } from "@/components/common/technology-pill";
import { education } from "@/config/education";
import { useTranslation } from "@/i18n/use-translation";

export function Education() {
  const t = useTranslation();

  return (
    <Section id="education">
      <Container>
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeader
              title={t.education.title}
              description={t.education.description}
            />
          </div>
        </ScrollReveal>

        <div className="space-y-10">
          {/* Academic Background */}
          <ScrollReveal>
            <article className="border-l pl-6 sm:pl-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {education.degree}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {education.institution}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {education.location}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {education.period}
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Academic Project */}
          <ScrollReveal delay={150}>
            <article className="rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:p-8">
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-muted-foreground">
                  {t.education.academicProject}
                </p>

                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {education.thesis.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {education.thesis.technologies.map((technology) => (
                    <TechnologyPill
                      key={technology.name}
                      icon={technology.icon}
                      name={technology.name}
                    />
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
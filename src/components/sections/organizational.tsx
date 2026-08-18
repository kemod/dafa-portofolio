import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { organizationalExperiences } from "@/config/organizational";

export function Organizational() {
  return (
    <Section id="organizational">
      <Container>
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeader
              title="Organizational Experience"
              description="Leadership and technical experience gained through organizational activities."
            />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[5px] top-0 w-px bg-border sm:left-[7px]"
          />

          <div className="space-y-8">
            {organizationalExperiences.map((experience, index) => (
              <ScrollReveal
                key={`${experience.organization}-${experience.role}-${experience.period}`}
                delay={index * 120}
              >
                <article className="group relative pl-8 sm:pl-10">
                  {/* Timeline Marker */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 flex h-[11px] w-[11px] items-center justify-center rounded-full border-2 border-primary bg-background ring-4 ring-background transition-all duration-300 group-hover:bg-primary group-hover:ring-primary/10"
                  />

                  {/* Content Card */}
                  <div className="rounded-2xl border bg-card p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                          Organizational Experience
                        </p>

                        <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-foreground/80">
                          {experience.organization}
                        </p>
                      </div>

                      <p className="shrink-0 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {experience.description}
                    </p>

                    <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-6 text-muted-foreground">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-5"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-primary/70 transition-colors duration-300 group-hover:bg-primary"
                          />

                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { experiences } from "@/config/experience";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeader
              title="Experience"
              description="A selection of my professional experience and responsibilities."
            />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[5px] top-0 w-px bg-border sm:left-[7px]"
          />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <ScrollReveal
                key={`${experience.company}-${experience.role}-${experience.period}`}
                delay={index * 120}
              >
                <article className="group relative pl-8 sm:pl-10">
                  {/* Timeline marker */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 flex h-[11px] w-[11px] items-center justify-center rounded-full border-2 border-primary bg-background ring-4 ring-background transition-all duration-300 group-hover:bg-primary group-hover:ring-primary/10"
                  />

                  {/* Experience content */}
                  <div className="rounded-2xl border bg-card p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                          Experience
                        </p>

                        <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-foreground/80">
                          {experience.company}
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
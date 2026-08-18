import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { TechnologyPill } from "@/components/common/technology-pill";
import { education } from "@/config/education";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeader
              title="Education"
              description="My academic background and academic project."
            />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {/* Academic Background */}
          <ScrollReveal delay={100}>
            <article className="relative border-l border-primary/30 pl-6 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background"
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    Education
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
                    {education.degree}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-foreground/80">
                    {education.institution}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {education.location}
                  </p>
                </div>

                <p className="shrink-0 text-sm font-medium text-muted-foreground">
                  {education.period}
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Academic Project */}
          <ScrollReveal delay={200}>
            <article className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-500 group-hover:bg-primary/10"
              />

              <div className="relative z-10 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  Academic Project
                </p>

                <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
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
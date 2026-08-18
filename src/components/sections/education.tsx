import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { TechnologyPill } from "@/components/common/technology-pill";
import { education } from "@/config/education";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <div className="mb-12">
          <SectionHeader
            title="Education"
            description="My academic background and academic project."
          />
        </div>

        <div className="space-y-10">
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

          <article className="rounded-xl border p-6 sm:p-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">
                Academict Project
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
        </div>
      </Container>
    </Section>
  );
}
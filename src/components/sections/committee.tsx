import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { committeeExperiences } from "@/config/committee";

export function Committee() {
  return (
    <Section id="committee">
      <Container>
        <div className="mb-12">
          <SectionHeader
            title="Committee Experience"
            description="Event experience gained through organizational activities."
          />
        </div>

        <div className="space-y-10">
          {committeeExperiences.map((experience) => (
            <article
              key={`${experience.event}-${experience.role}-${experience.period}`}
              className="border-l pl-6 sm:pl-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {experience.role}
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
                {experience.description}
              </p>

              <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-6 text-muted-foreground">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-5">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-current"
                    />

                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
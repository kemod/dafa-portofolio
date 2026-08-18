import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:items-start">
          {/* Section heading */}
          <ScrollReveal>
            <SectionHeader
              title="About Me"
              description="Informatics graduate with experience across web development, e-commerce operations, and digital technologies."
            />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={150}>
            <div className="space-y-8">
              <div className="space-y-5 text-base leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
                <p>
                  I am an Informatics graduate from Universitas Jenderal Achmad
                  Yani with professional experience in e-commerce operations,
                  particularly across Shopee, TikTok Shop, and Tokopedia.
                </p>

                <p>
                  Alongside my e-commerce experience, I have hands-on experience
                  building websites and web applications through professional,
                  academic, organizational, and independent projects. My
                  technical interests include modern web development, backend
                  technologies, databases, and machine learning.
                </p>

                <p>
                  I enjoy turning ideas into practical digital solutions while
                  continuously improving my technical skills, problem-solving
                  abilities, and understanding of modern technologies.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="group rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-primary"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Focus
                    </span>
                  </div>

                  <p className="font-heading text-sm font-semibold">
                    Modern Web Development
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Building practical and maintainable web applications.
                  </p>
                </div>

                <div className="group rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-primary"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Interests
                    </span>
                  </div>

                  <p className="font-heading text-sm font-semibold">
                    Backend, Database &amp; ML
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Exploring technologies that turn ideas into useful
                    solutions.
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
"use client";

import Link from "next/link";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { useTranslation } from "@/i18n/use-translation";

export function Hero() {
  const t = useTranslation();

  return (
    <Section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <Container>
        <div className="relative z-10 max-w-4xl">
          {/* Availability */}
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-emerald-600 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:text-emerald-400">
                <span
                  aria-hidden="true"
                  className="relative flex h-2 w-2"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                {t.hero.available}
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {t.hero.availability}
              </p>
            </div>
          </ScrollReveal>

          {/* Role */}
          <ScrollReveal delay={100}>
            <p className="mt-10 text-sm font-medium tracking-[0.2em] text-primary">
              {t.hero.role}
            </p>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal delay={200}>
            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={300}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {t.hero.description}
            </p>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={400}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {t.hero.viewProjects}

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <a
                href="/cv/Dafa-Setiandi-CV.pdf"
                download
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {t.hero.downloadCv}

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>

              <Link
                href="#contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {t.hero.contact}

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
"use client";

import Link from "next/link";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";
import { useTranslation } from "@/i18n/use-translation";

export function Hero() {
  const t = useTranslation();

  return (
    <Section className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            {/* Availability */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-500"
                />

                {t.hero.available}
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {t.hero.availability}
              </p>
            </div>

            {/* Role */}
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              {t.hero.role}
            </p>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {t.hero.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                {t.hero.viewProjects}
              </Link>

              <a
                href="/cv/Dafa-Setiandi-CV.pdf"
                download
                className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.04] hover:text-primary"
              >
                {t.hero.downloadCv}
              </a>

              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.04] hover:text-primary"
              >
                {t.hero.contact}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
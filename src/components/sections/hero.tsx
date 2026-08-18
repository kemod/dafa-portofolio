import Link from "next/link";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

export function Hero() {
  return (
    <Section className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-500"
              />

              Available for Work
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Open to full-time, freelance, and remote opportunities.
            </p>
          </div>

          <p className="mb-4 text-sm font-medium text-muted-foreground">
            SOFTWARE ENGINEER
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building thoughtful digital experiences with modern web
            technologies.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I build modern, responsive, and user-focused web applications
            with a strong focus on clean architecture and maintainable code.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              View Projects
            </Link>

            <a
              href="/cv/Dafa-Setiandi-CV.pdf"
              download
              className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Download CV
            </a>

            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
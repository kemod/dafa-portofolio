import Link from "next/link";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="rounded-2xl border bg-muted/30 px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="mx-auto max-w-2xl">
            <SectionHeader
              align="center"
              title="Let's Work Together"
              description="Have a project, idea, or opportunity in mind? I'd love to hear from you."
            />

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Get in Touch
              </a>

              <Link
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm font-medium transition-colors hover:bg-muted"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
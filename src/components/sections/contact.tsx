import { SiGithub } from "@icons-pack/react-simple-icons";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Section } from "@/components/common/section";

const email = "dafasetiandi20@gmail.com";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/kemod",
    type: "github",
    description: "github.com/kemod",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dafa-setiandi",
    type: "linkedin",
    description: "linkedin.com/in/dafa-setiandi",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/62895371019988",
    type: "whatsapp",
    description: "Chat on WhatsApp",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden bg-[#111318] text-white"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl"
      />

      <Container className="relative z-10">
        {/* Section label */}
        <ScrollReveal>
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Contact
            </p>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={100}>
          <div className="mt-12 max-w-4xl">
            <h2 className="font-heading text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Work
            </h2>

            <h2 className="mt-1 font-heading text-5xl font-light uppercase leading-[0.9] tracking-[-0.04em] text-white/40 sm:text-6xl lg:text-7xl">
              Together
            </h2>
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={200}>
          <div className="mt-10 max-w-2xl">
            <p className="text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Have a project in mind or looking for a software engineer to
              join your team? Let&apos;s talk — I am always open to new
              opportunities.
            </p>
          </div>
        </ScrollReveal>

        {/* Email */}
        <ScrollReveal delay={300}>
          <div className="mt-10">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-4"
            >
              <span className="text-xl font-semibold text-white/90 underline decoration-white/25 underline-offset-8 transition-colors duration-300 group-hover:text-blue-400 group-hover:decoration-blue-400 sm:text-2xl"
              >
                {email}
              </span>

              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-400/50 group-hover:bg-blue-400 group-hover:text-white"
              >
                ↗
              </span>
            </a>
          </div>
        </ScrollReveal>

        {/* Contact links */}
        <ScrollReveal delay={400}>
          <div className="mt-14 border-t border-white/10 pt-8">
            <div className="grid gap-3 sm:grid-cols-3">
              {contacts.map((contact) => {
                if (contact.type === "github") {
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                          <SiGithub
                            size={18}
                            aria-hidden="true"
                            className="text-white/60 transition-colors duration-300 group-hover:text-blue-400"
                          />
                        </span>

                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            {contact.label}
                          </p>

                          <p className="mt-0.5 text-xs text-white/45">
                            {contact.description}
                          </p>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </a>
                  );
                }

                if (contact.type === "linkedin") {
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-xs font-bold text-white/60 transition-colors duration-300 group-hover:text-blue-400"
                          aria-hidden="true"
                        >
                          in
                        </span>

                        <div>
                          <p className="text-sm font-semibold text-white/90">
                            {contact.label}
                          </p>

                          <p className="mt-0.5 text-xs text-white/45">
                            {contact.description}
                          </p>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                      >
                        ↗
                      </span>
                    </a>
                  );
                }

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[10px] font-bold text-white/60 transition-colors duration-300 group-hover:text-blue-400"
                        aria-hidden="true"
                      >
                        WA
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-white/90">
                          {contact.label}
                        </p>

                        <p className="mt-0.5 text-xs text-white/45">
                          {contact.description}
                        </p>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                    >
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
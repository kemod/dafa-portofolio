import { SiGithub } from "@icons-pack/react-simple-icons";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";

const email = "dafasetiandi20@gmail.com";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/kemod",
    type: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dafa-setiandi",
    type: "linkedin",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/62895371019988",
    type: "whatsapp",
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="border-t pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
        </div>

        <div className="mt-12 max-w-4xl">
          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Let&apos;s Work
          </h2>

          <h2 className="mt-1 text-5xl font-light uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Together
          </h2>
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Have a project in mind or looking for a software engineer to join
            your team? Let&apos;s talk — I am always open to new opportunities.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="text-xl font-semibold underline decoration-1 underline-offset-8 transition-opacity hover:opacity-60 sm:text-2xl"
          >
            {email}
          </a>

          <a
            href={`mailto:${email}`}
            aria-label="Send email"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition-colors hover:bg-muted"
          >
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-14 border-t pt-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {contacts.map((contact) => {
              if (contact.type === "github") {
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <SiGithub
                      size={18}
                      aria-hidden="true"
                    />

                    <span>{contact.label}</span>
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
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span
                      className="flex h-[18px] w-[18px] items-center justify-center rounded-sm border text-[11px] font-bold leading-none"
                      aria-hidden="true"
                    >
                      in
                    </span>

                    <span>{contact.label}</span>
                  </a>
                );
              }

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span
                    className="flex h-[18px] w-[18px] items-center justify-center rounded-sm border text-[9px] font-bold leading-none"
                    aria-hidden="true"
                  >
                    WA
                  </span>

                  <span>{contact.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
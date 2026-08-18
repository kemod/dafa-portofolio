import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { TechnologyPill } from "@/components/common/technology-pill";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { technologies } from "@/config/technologies";

const webDevelopment = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "HTML/CSS",
  "WordPress",
  "Responsive Web Design",
];

const backendDatabase = [
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Redis",
  "Laravel",
  "Flask",
  "REST API",
];

const dataMachineLearning = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "KNN Regression",
];

const ecommerce = [
  "Shopee Seller Center",
  "TikTok Shop Seller Center",
  "Tokopedia Seller Center",
  "Affiliate Management",
  "Campaign Management",
];

const tools = [
  "Git",
  "GitHub",
  "Vercel",
  "Postman",
  "Microsoft Office",
];

const otherSkills = [
  "SEO",
  "Website Maintenance",
  "Customer Support",
];

const softSkills = [
  "Communication",
  "Teamwork & Collaboration",
  "Leadership",
  "Problem Solving",
  "Adaptability",
  "Attention to Detail",
];

const languages = [
  "Indonesian (Native)",
  "English (Basic)",
];

const technologyMap = new Map(
  technologies.map((technology) => [technology.name, technology]),
);

function TechnologyGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-sm sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125"
        />

        <h3 className="font-heading text-sm font-semibold tracking-tight">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const technology = technologyMap.get(item);

          if (!technology) {
            return (
              <span
                key={item}
                className="inline-flex items-center rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
              >
                {item}
              </span>
            );
          }

          return (
            <TechnologyPill
              key={technology.name}
              icon={technology.icon}
              name={technology.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Technologies() {
  const groups = [
    {
      title: "Web Development",
      items: webDevelopment,
    },
    {
      title: "Backend & Database",
      items: backendDatabase,
    },
    {
      title: "Data & Machine Learning",
      items: dataMachineLearning,
    },
    {
      title: "E-Commerce",
      items: ecommerce,
    },
    {
      title: "Tools",
      items: tools,
    },
    {
      title: "Other",
      items: otherSkills,
    },
    {
      title: "Soft Skills",
      items: softSkills,
    },
    {
      title: "Languages",
      items: languages,
    },
  ];

  return (
    <Section id="technologies">
      <Container>
        <ScrollReveal>
          <div className="mb-12 flex justify-center text-center">
            <SectionHeader
              align="center"
              title="Skills & Technologies"
              description="Technical skills, tools, and professional capabilities developed through academic, professional, and independent projects."
            />
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              delay={index * 80}
            >
              <TechnologyGroup
                title={group.title}
                items={group.items}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
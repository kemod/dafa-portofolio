import { Container } from "@/components/common/container";
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
    <div className="text-center">
      <h3 className="mb-4 text-sm font-semibold tracking-tight">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item) => {
          const technology = technologyMap.get(item);

          if (!technology) {
            return (
              <span
                key={item}
                className="rounded-full border px-3 py-1.5 text-xs font-medium"
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
  return (
    <Section id="technologies">
      <Container>
        <div className="mb-12 flex justify-center text-center">
          <SectionHeader
            align="center"
            title="Skills & Technologies"
            description="Technical skills, tools, and professional capabilities developed through academic, professional, and independent projects."
          />
        </div>

        <div className="mx-auto max-w-5xl space-y-10">
          <TechnologyGroup
            title="Web Development"
            items={webDevelopment}
          />

          <TechnologyGroup
            title="Backend & Database"
            items={backendDatabase}
          />

          <TechnologyGroup
            title="Data & Machine Learning"
            items={dataMachineLearning}
          />

          <TechnologyGroup
            title="E-Commerce"
            items={ecommerce}
          />

          <TechnologyGroup
            title="Tools"
            items={tools}
          />

          <TechnologyGroup
            title="Other"
            items={otherSkills}
          />

          <TechnologyGroup
            title="Soft Skills"
            items={softSkills}
          />

          <TechnologyGroup
            title="Languages"
            items={languages}
          />
        </div>
      </Container>
    </Section>
  );
}
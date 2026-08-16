import { Container } from "@/components/common/container";
import { ProjectCard } from "@/components/common/project-card";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { projects } from "@/config/projects";

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <Container>
        <div className="mb-12">
          <SectionHeader
            title="Featured Projects"
            description="A collection of selected software engineering and web development projects."
          />
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
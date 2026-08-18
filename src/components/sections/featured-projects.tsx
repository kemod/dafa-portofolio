"use client";

import { useState } from "react";

import { Container } from "@/components/common/container";
import { ProjectCard } from "@/components/common/project-card";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { projects } from "@/config/projects";

export function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
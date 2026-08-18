"use client";

import { useState } from "react";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
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
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12">
            <SectionHeader
              title="Featured Projects"
              description="A collection of selected software engineering and web development projects."
            />
          </div>
        </ScrollReveal>

        {/* Projects */}
        <div className="space-y-8">
          {visibleProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 100}
            >
              <div className="group">
                <ProjectCard project={project} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Read More */}
        {projects.length > 3 && (
          <ScrollReveal delay={100}>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <span>
                  {showAll ? "Show Less" : "Read More"}
                </span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  {showAll ? "↑" : "↓"}
                </span>
              </button>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </Section>
  );
}
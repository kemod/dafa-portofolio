import Link from "next/link";

import { TechnologyPill } from "@/components/common/technology-pill";
import type { Project } from "@/config/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <article className="overflow-hidden rounded-xl border transition-colors hover:bg-muted/30">
      <div className="aspect-video bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Project Preview
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechnologyPill
                key={technology.name}
                icon={technology.icon}
                name={technology.name}
              />
            ))}
          </div>

          {project.href && (
            <div className="mt-6">
              <span className="text-sm font-medium">
                View Project →
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  if (!project.href) {
    return content;
  }

  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="block"
    >
      {content}
    </Link>
  );
}
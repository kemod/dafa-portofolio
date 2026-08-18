import Image from "next/image";
import Link from "next/link";

import { TechnologyPill } from "@/components/common/technology-pill";
import type { Project } from "@/config/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border transition-colors hover:bg-muted/30">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Project Preview
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            {project.description}
          </p>

          {project.technologies.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechnologyPill
                  key={technology.name}
                  icon={technology.icon}
                  name={technology.name}
                />
              ))}
            </div>
          )}

          {project.href && (
            <div className="mt-6">
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium transition-opacity hover:opacity-70"
              >
                Live Demo
                <span aria-hidden="true" className="ml-1">
                  ↗
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
import Image from "next/image";
import Link from "next/link";

import { TechnologyPill } from "@/components/common/technology-pill";
import type { Project } from "@/config/projects";

type ProjectCardProps = {
  project: Project;
  title: string;
  description: string;
  liveDemoLabel: string;
};

export function ProjectCard({
  project,
  title,
  description,
  liveDemoLabel,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      {/* Project Preview */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${title} project preview`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            {/* Subtle hover overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Project Preview
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="max-w-3xl">
          {/* Title */}
          <h3 className="font-heading text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {description}
          </p>

          {/* Technologies */}
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

          {/* Live Demo */}
          {project.href && (
            <div className="mt-7">
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {liveDemoLabel}

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                >
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
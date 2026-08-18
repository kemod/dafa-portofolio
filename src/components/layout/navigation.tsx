"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigation } from "@/config/navigation";

const labels = {
  about: "About",
  education: "Education",
  organizational: "Organization",
  committee: "Committee",
  experience: "Experience",
  projects: "Projects",
  technologies: "Skills & Technologies",
  contact: "Contact",
} as const;

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-7">
        {navigation.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`group relative inline-flex py-2 font-heading text-sm font-medium tracking-tight transition-colors duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {labels[item.key]}

                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/config/navigation";
import { useTranslation } from "@/i18n/use-translation";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const t = useTranslation();

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    function updateActiveSection() {
      if (isNavigatingRef.current) {
        return;
      }

      const scrollPosition = window.scrollY + 140;

      let currentSection = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section;
        } else {
          break;
        }
      }

      setActiveSection(currentSection.id);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  function handleNavigation(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    isNavigatingRef.current = true;

    setActiveSection(sectionId);

    window.history.pushState(null, "", `#${sectionId}`);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
      setActiveSection(sectionId);
    }, 1200);
  }

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
                onClick={(event) => handleNavigation(event, item.href)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group relative inline-flex py-2",
                  "font-heading text-sm font-medium tracking-tight",
                  "transition-colors duration-300",
                  "focus-visible:outline-2",
                  "focus-visible:outline-offset-4",
                  "focus-visible:outline-ring",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {t.nav[item.key]}

                <span
                  aria-hidden="true"
                  className={[
                    "absolute bottom-0 left-0 h-px bg-primary",
                    "transition-all duration-300 ease-out",
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  ].join(" ")}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
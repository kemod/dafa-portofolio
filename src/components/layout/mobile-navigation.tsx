"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/config/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={
          isOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <span
          aria-hidden="true"
          className="text-lg leading-none"
        >
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-56 origin-top-right animate-in overflow-hidden rounded-xl border bg-background shadow-lg duration-200 fade-in zoom-in-95"
        >
          <ul className="p-2">
            {navigation.map((item, index) => (
              <li
                key={item.href}
                className="animate-in fill-mode-both fade-in slide-in-from-top-1"
                style={{
                  animationDelay: `${index * 40}ms`,
                  animationFillMode: "both",
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
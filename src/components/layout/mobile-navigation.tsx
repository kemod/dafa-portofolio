"use client";

import { useState } from "react";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { navigation } from "@/config/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        type="button"
        aria-label={
          isOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className={[
          "relative inline-flex h-10 w-10 items-center justify-center",
          "rounded-md border",
          "text-sm",
          "transition-all duration-300",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          isOpen
            ? "border-primary bg-primary text-primary-foreground shadow-sm"
            : "border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/[0.04] hover:text-primary",
        ].join(" ")}
      >
        <span
          aria-hidden="true"
          className="text-lg leading-none transition-transform duration-300"
        >
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {/* Mobile Menu */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={[
          "absolute inset-x-0 top-full z-50",
          "origin-top border-b border-border",
          "bg-background",
          "shadow-sm",
          "transition-all duration-300 ease-out",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-4">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-1">
            {navigation.map((item, index) => (
              <li
                key={item.href}
                className={[
                  "transition-all duration-300 ease-out",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0",
                ].join(" ")}
                style={{
                  transitionDelay: isOpen
                    ? `${index * 50}ms`
                    : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary/[0.06] hover:text-primary"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    {item.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="translate-x-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Language */}
          <div
            className={[
              "mt-4 border-t border-border pt-4",
              "transition-all duration-300 ease-out",
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0",
            ].join(" ")}
            style={{
              transitionDelay: isOpen
                ? `${navigation.length * 50 + 50}ms`
                : "0ms",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                  Language
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Choose your preferred language
                </p>
              </div>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
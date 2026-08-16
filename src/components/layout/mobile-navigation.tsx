"use client";

import { useState } from "react";
import Link from "next/link";

import { navigation } from "@/config/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border text-sm"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b bg-background"
        >
          <ul className="flex flex-col p-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
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
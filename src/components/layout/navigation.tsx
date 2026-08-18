"use client";

import Link from "next/link";

import { navigation } from "@/config/navigation";
import { useTranslation } from "@/i18n/use-translation";

export function Navigation() {
  const t = useTranslation();

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-6">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {t.nav[item.key]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
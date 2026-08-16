import Link from "next/link";

import { navigation } from "@/config/navigation";

export function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-6">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-foreground/70"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
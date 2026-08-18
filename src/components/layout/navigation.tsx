import Link from "next/link";

import { navigation } from "@/config/navigation";

export function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-1">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
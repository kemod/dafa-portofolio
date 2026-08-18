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
              className="group relative inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {item.label}

              <span
                aria-hidden="true"
                className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";
import { Navigation } from "./navigation";
import { MobileNavigation } from "./mobile-navigation";

type HeaderProps = ComponentPropsWithoutRef<"header">;

export function Header({
  className,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn("relative w-full border-b", className)}
      {...props}
    >
      <Container className="flex min-h-16 items-center justify-between">
        <a
          href="/"
          className="font-semibold tracking-tight"
          aria-label="Home"
        >
          Dafa
        </a>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
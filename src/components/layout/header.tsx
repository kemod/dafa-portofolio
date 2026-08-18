import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./mobile-navigation";
import { Navigation } from "./navigation";

type HeaderProps = ComponentPropsWithoutRef<"header">;

export function Header({
  className,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "relative z-50 w-full border-b bg-background",
        className,
      )}
      {...props}
    >
      <Container className="flex min-h-16 items-center justify-between">
        <a
          href="/"
          className="font-semibold tracking-tight transition-opacity hover:opacity-70"
          aria-label="Dafa Setiandi — Home"
        >
          Dafa
        </a>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="md:hidden">
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
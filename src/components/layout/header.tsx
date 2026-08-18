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
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <Container className="flex h-18 items-center justify-between">
        <a
          href="/"
          className="text-base font-semibold tracking-tight transition-opacity hover:opacity-70"
          aria-label="Dafa Setiandi — Home"
        >
          Dafa Setiandi
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
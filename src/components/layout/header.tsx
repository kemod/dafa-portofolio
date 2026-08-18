import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/common/container";
import { LanguageSwitcher } from "@/components/common/language-switcher";
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
        "sticky top-0 z-50 w-full border-b bg-background",
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

        <div className="flex items-center gap-6">
          {/* Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <Navigation />
            <LanguageSwitcher />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
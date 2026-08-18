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

        <div className="hidden items-center gap-6 md:flex">
          <Navigation />
          <LanguageSwitcher />
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
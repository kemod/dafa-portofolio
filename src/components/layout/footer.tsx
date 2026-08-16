import type { ComponentPropsWithoutRef } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

type FooterProps = ComponentPropsWithoutRef<"footer">;

export function Footer({
  className,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn("w-full border-t", className)}
      {...props}
    >
      <Container className="flex min-h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Dafa. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
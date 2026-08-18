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
      <Container className="flex min-h-16 flex-col items-center justify-center gap-2 py-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2026 Dafa Setiandi. All rights reserved.
        </p>

        <p className="text-xs text-muted-foreground">
          Built with Next.js &amp; TypeScript
        </p>
      </Container>
    </footer>
  );
}
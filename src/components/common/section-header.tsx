import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  description?: string;
  align?: "left" | "center";
};

const alignment = {
  left: "text-left",
  center: "text-center",
};

export function SectionHeader({
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(alignment[align], className)}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
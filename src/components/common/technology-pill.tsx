import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type TechnologyPillProps = ComponentPropsWithoutRef<"div"> & {
  name: string;
  icon: ReactNode;
};

export function TechnologyPill({
  name,
  icon,
  className,
  ...props
}: TechnologyPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
        className
      )}
      {...props}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
}
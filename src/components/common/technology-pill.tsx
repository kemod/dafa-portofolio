import type { ComponentType } from "react";

type TechnologyIconProps = {
  size?: number;
  className?: string;
  color?: string;
  title?: string;
};

type TechnologyPillProps = {
  icon: ComponentType<TechnologyIconProps>;
  name: string;
};

export function TechnologyPill({
  icon: Icon,
  name,
}: TechnologyPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium">
      <Icon
        size={16}
        color="default"
        title={name}
        className="shrink-0"
      />

      <span>{name}</span>
    </span>
  );
}
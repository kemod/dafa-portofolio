"use client";

import {
  useLanguage,
  type Language,
} from "@/components/providers/language-provider";

const languages: {
  value: Language;
  label: string;
}[] = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "id",
    label: "ID",
  },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="relative inline-flex items-center rounded-full border border-border/70 bg-background p-1"
      aria-label="Language selector"
    >
      {/* Animated active indicator */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-y-1 left-1 w-9 rounded-full",
          "bg-primary",
          "shadow-sm",
          "transition-transform duration-300 ease-out",
          language === "id"
            ? "translate-x-full"
            : "translate-x-0",
        ].join(" ")}
      />

      {languages.map((item) => {
        const isActive = language === item.value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => setLanguage(item.value)}
            aria-pressed={isActive}
            className={[
              "relative z-10 min-w-9 rounded-full px-3 py-1.5",
              "text-xs font-semibold tracking-wide",
              "transition-all duration-300",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
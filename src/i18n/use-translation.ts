"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { translations } from "./index";

export function useTranslation() {
  const { language } = useLanguage();

  return translations[language];
}
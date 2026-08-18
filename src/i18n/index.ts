import { en } from "./en";
import { id } from "./id";

export const translations = {
  en,
  id,
};

export type Language = keyof typeof translations;
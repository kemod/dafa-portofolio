import {
  SiFlask,
  SiNumpy,
  SiPandas,
  SiPython,
  SiScikitlearn,
} from "@icons-pack/react-simple-icons";

import type { ComponentType } from "react";

export type EducationTechnology = {
  name: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
    color?: string;
    title?: string;
  }>;
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  thesis: {
    title: string;
    technologies: EducationTechnology[];
  };
};

export const education: Education = {
  institution: "Universitas Jenderal Achmad Yani",
  location: "Cimahi, Indonesia",
  degree: "Informatics Engineering (S.Kom)",
  period: "Sep 2020 — Feb 2025",
  thesis: {
    title:
      "Prediksi Harga Properti di Bandung Raya Menggunakan Metode K-Nearest Neighbors Regression",
    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
      },
    ],
  },
};
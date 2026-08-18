import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { LanguageProvider } from "@/components/providers/language-provider";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://dafa-setiandi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Dafa Setiandi — Software Engineer & Web Developer",
    template: "%s — Dafa Setiandi",
  },

  description:
    "Dafa Setiandi is an Informatics graduate and software engineer focused on modern web development, backend technologies, e-commerce, and practical digital solutions.",

  keywords: [
    "Dafa Setiandi",
    "Dafa",
    "Dafa Setiandi Software Engineer",
    "Dafa Setiandi Web Developer",
    "Dafa Setiandi Portfolio",
    "Dafa Setiandi Developer",
    "Dafa Setiandi Informatics",
    "Dafa Software Engineer",
    "Dafa Web Developer",
    "Dafa Developer",
    "Software Engineer Dafa",
    "Web Developer Dafa",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Informatics Engineering",
    "Web Development",
    "E-Commerce",
  ],

  authors: [
    {
      name: "Dafa Setiandi",
      url: siteUrl,
    },
  ],

  creator: "Dafa Setiandi",
  publisher: "Dafa Setiandi",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dafa Setiandi",
    title: "Dafa Setiandi — Software Engineer & Web Developer",
    description:
      "Portfolio of Dafa Setiandi, an Informatics graduate and software engineer focused on modern web development, backend technologies, and digital solutions.",
    images: [
      {
        url: "/og/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Dafa Setiandi — Software Engineer & Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dafa Setiandi — Software Engineer & Web Developer",
    description:
      "Portfolio of Dafa Setiandi, an Informatics graduate and software engineer focused on modern web development and digital solutions.",
    images: ["/og/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <JsonLd />

          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
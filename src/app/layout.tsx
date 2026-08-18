import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dafa-setiandi.vercel.app"),

  title: {
    default: "Dafa Setiandi — Software Engineer",
    template: "%s — Dafa Setiandi",
  },

  description:
    "Dafa Setiandi is an Informatics graduate and software engineer focused on modern web development, backend technologies, e-commerce, and practical digital solutions.",

  keywords: [
    "Dafa Setiandi",
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
      url: "https://dafa-setiandi.vercel.app",
    },
  ],

  creator: "Dafa Setiandi",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dafa-setiandi.vercel.app",
    siteName: "Dafa Setiandi — Software Engineer",
    title: "Dafa Setiandi — Software Engineer",
    description:
      "Portfolio of Dafa Setiandi, an Informatics graduate and software engineer focused on modern web development, backend technologies, and digital solutions.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dafa Setiandi — Software Engineer",
    description:
      "Portfolio of Dafa Setiandi, an Informatics graduate and software engineer focused on modern web development and digital solutions.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
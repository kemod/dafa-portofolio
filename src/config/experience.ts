export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Freelance IT / Web Developer",
    company: "Independent",
    period: "2026 - Present",
    description:
      "Developing web applications and digital products through independent projects, with a focus on modern web technologies, responsive interfaces, and practical digital solutions.",
    highlights: [
      "Developed Aurora, a full-stack digital wedding invitation platform currently in development.",
      "Developed a responsive personal portfolio website using Next.js, React, TypeScript, and Tailwind CSS.",
      "Developed the Auctore Group company profile website with a modular component structure and responsive design.",
    ],
  },
  {
    role: "Marketplace Administrator",
    company: "Routfits — Cimahi, Indonesia",
    period: "Mar 2025 — Apr 2026",
    description:
      "Managed day-to-day marketplace operations across Shopee, TikTok Shop, and Tokopedia, covering product management, promotions, orders, affiliate activities, and customer interactions.",
    highlights: [
      "Managed product listings including product images, descriptions, specifications, pricing, SKUs, and variants.",
      "Managed promotional activities including flash sales, store discounts, campaigns, and vouchers.",
      "Managed affiliate and advertising commission settings.",
      "Monitored incoming orders to minimize processing delays.",
      "Handled marketplace violation appeals and account-related issues.",
      "Responded to customer inquiries and reviews across marketplace platforms.",
    ],
  },
  {
    role: "Service Quality Staff — Participant Services",
    company: "BPJS Kesehatan — Bandung, Indonesia",
    period: "Aug 2023 — Sep 2023",
    description:
      "Supported participant service operations during an internship at BPJS Kesehatan, including data management, administrative support, and participant service activities.",
    highlights: [
      "Managed and maintained participant data.",
      "Assisted in handling participant complaints and service-related information.",
      "Provided administrative support for daily participant service activities.",
      "Assisted in communicating and implementing organizational policies.",
      "Designed and developed the PANDAWA Helpdesk website.",
    ],
  },
];
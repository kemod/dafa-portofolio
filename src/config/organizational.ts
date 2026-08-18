export type OrganizationalExperience = {
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const organizationalExperiences: OrganizationalExperience[] = [
  {
    organization:
      "Unit Kegiatan Mahasiswa Informasi dan Komunikasi (INKOM)",
    role: "Vice Head of Web Programmer Division",
    period: "Oct 2021 — Sep 2022",
    description:
      "Supported the Web Programmer Division in maintaining the organization's website and coordinating website-related activities.",
    highlights: [
      "Provided WordPress training to internal INKOM UNJANI members.",
      "Coordinated website updates and maintenance with division members.",
      "Coordinated with other divisions to update website content.",
    ],
  },
  {
    organization:
      "Unit Kegiatan Mahasiswa Informasi dan Komunikasi (INKOM)",
    role: "Web Programmer Staff",
    period: "Oct 2022 — Sep 2023",
    description:
      "Supported website maintenance, content management, and SEO activities for INKOM UNJANI.",
    highlights: [
      "Delivered WordPress learning materials to internal INKOM UNJANI members.",
      "Updated and maintained the INKOM UNJANI website.",
      "Managed website SEO activities.",
    ],
  },
];
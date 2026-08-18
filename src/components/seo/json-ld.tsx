export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dafa Setiandi",
    url: "https://dafa-setiandi.vercel.app",
    jobTitle: "Software Engineer",
    description:
      "Informatics graduate and software engineer focused on modern web development, backend technologies, e-commerce, and practical digital solutions.",
    sameAs: [
      "https://github.com/kemod",
      "https://linkedin.com/in/dafa-setiandi",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dafa Setiandi",
    url: "https://dafa-setiandi.vercel.app",
    description:
      "Personal portfolio of Dafa Setiandi, an Informatics graduate and software engineer.",
    author: {
      "@type": "Person",
      name: "Dafa Setiandi",
      url: "https://dafa-setiandi.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}
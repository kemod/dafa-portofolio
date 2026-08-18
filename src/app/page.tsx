import { About } from "@/components/sections/about";
import { Committee } from "@/components/sections/committee";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Organizational } from "@/components/sections/organizational";
import { Technologies } from "@/components/sections/technologies";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Education />

        <Organizational />

        <Committee />

        <Experience />

        <FeaturedProjects />

        <Technologies />

        <Contact />
      </main>
    </>
  );
}
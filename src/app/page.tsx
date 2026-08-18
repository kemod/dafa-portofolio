import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Technologies } from "@/components/sections/technologies";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Education />

      <FeaturedProjects />

      <Experience />

      <Technologies />

      <Contact />

    </>
  );
}

import { Header } from "@/components/layout/header";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Technologies } from "@/components/sections/technologies";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Hero />

      <About />

      <FeaturedProjects />

      <Experience />

      <Technologies />

      <Contact />

      <Footer />
    </>
  );
}

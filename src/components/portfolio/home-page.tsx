import { AboutSection } from "@/components/portfolio/about";
import { ContactSection } from "@/components/portfolio/contact";
import { SiteFooter } from "@/components/portfolio/footer";
import { SiteHeader } from "@/components/portfolio/header";
import { HeroSection } from "@/components/portfolio/hero";
import { ProjectsSection } from "@/components/portfolio/projects";
import { SkillsSection } from "@/components/portfolio/skills";

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#top">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

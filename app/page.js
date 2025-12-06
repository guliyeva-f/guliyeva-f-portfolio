import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export const metadata = {
  title: "Fatima`s Portfolio",
  description: "Fatima's portfolio website",
};

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <div className="flex justify-center -translate-y-px">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <div className="flex justify-center -translate-y-px">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <ContactSection />
    </div>
  )
};
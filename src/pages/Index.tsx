import { useEffect } from "react";
import NavBar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ExperienceSection from "@/components/sections/experience-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/layout/footer";
import { useThemeStore } from "@/lib/theme-store";

export default function Index() {
  const { theme } = useThemeStore();
  
  // Apply theme on component mount and theme changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
import React, { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030303] overflow-hidden font-sans">
      {/* Global Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Bluish Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-500/[0.05] blur-3xl" />
        
        {/* Large blurred blue glow spots */}
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[130px] mix-blend-screen" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80vw] h-[80vw] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen opacity-50" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <HeroSection />
        <TrustSection />
        <ProjectsSection />
        <TechStackSection />
        <WorkProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;

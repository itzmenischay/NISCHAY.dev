import { useEffect, useState } from "react";
import { LoaderContext } from "@/context/LoaderContext";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WorkProcessSection } from "@/components/sections/WorkProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { MorphingSquare } from "@/components/ui/MorphingSquare";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsLoaderFinished(true);
      }, 500); // Wait for loader exit animation (0.5s) to complete
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    // Wait for the window to load or set a small timeout for the animation to show
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Wait for 1 second to show off the loader, or adjust as needed
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't initialize lenis while loading
    
    const isMobile = window.innerWidth < 768;
    
    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: isMobile ? 1.5 : 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <LoaderContext.Provider value={{ isLoading, isLoaderFinished }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303]"
          >
            <MorphingSquare message="Loading Portfolio..." />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-[#030303] overflow-hidden font-sans">
        {/* Global Cinematic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Bluish Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-500/[0.05] blur-3xl" />
          
          {/* Large blurred blue glow spots - optimized for mobile */}
          <div className="hidden md:block absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
          <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[130px] mix-blend-screen" />
          <div className="hidden md:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80vw] h-[80vw] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen opacity-50" />
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
    </LoaderContext.Provider>
  );
}

export default App;

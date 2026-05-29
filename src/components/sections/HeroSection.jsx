import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Terminal,
  Layers,
  Clock,
  Zap,
} from "lucide-react";
import { HeroGeometric } from "@/components/HeroBackground";
import { useLoader } from "@/context/LoaderContext";

export function HeroSection() {
  const { isLoaderFinished } = useLoader();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.1, // matches HeroBackground
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const stats = [
    { label: "Projects Completed", value: "20+", icon: Layers },
    { label: "Technologies", value: "15+", icon: Terminal },
    { label: "Years Learning", value: "2+", icon: Clock },
    { label: "Fast Delivery", value: "100%", icon: Zap },
  ];

  return (
    <section id="home" className="relative w-full">
      <HeroGeometric
        badge="Available For Freelance"
        title1="Hi, I'm Nischay"
        title2="Building Modern Web Experiences"
      >
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isLoaderFinished ? "visible" : "hidden"}
          className="flex flex-col items-center w-full"
        >
          <p className="text-base sm:text-sm md:text-lg text-white/60 mb-10 leading-relaxed font-light tracking-wide max-w-xl lg:max-w-2xl mx-auto px-4">
            I design and develop immersive web experiences that feel fast,
            modern, and memorable — blending clean architecture, cinematic
            interactions, and pixel-perfect UI.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative">View Projects</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-full transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
            >
              <span className="relative">Contact Me</span>
            </a>

            <a
              href="#"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-full transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
            >
              <Download className="w-4 h-4" />
              <span className="relative">Resume</span>
            </a>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isLoaderFinished
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.55, // slightly after hero content
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="w-full max-w-4xl px-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/[0.05] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                >
                  <stat.icon className="mb-2 h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />

                  <span className="mb-1 text-2xl font-bold text-white">
                    {stat.value}
                  </span>

                  <span className="text-center text-xs uppercase tracking-wider text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </HeroGeometric>
    </section>
  );
}

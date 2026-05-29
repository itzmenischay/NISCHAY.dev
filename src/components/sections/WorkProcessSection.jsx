import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirement Discussion",
    description:
      "Understanding your vision, target audience, and business goals to outline the perfect solution.",
  },
  {
    number: "02",
    title: "Planning & Wireframing",
    description:
      "Creating a structural blueprint and defining the technical architecture before writing any code.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Crafting a premium, cinematic visual experience that aligns with your brand identity.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Writing clean, scalable, and optimized code using the latest modern tech stack.",
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description:
      "Rigorous testing across devices and performance optimization for lightning-fast speeds.",
  },
  {
    number: "06",
    title: "Deployment & Support",
    description:
      "Launching the product securely and providing reliable long-term maintenance.",
  },
];

function ProcessStep({ step, idx }) {
  const stepRef = useRef(null);
  const isEven = idx % 2 === 0;

  const isCenterInView = useInView(stepRef, {
    margin: "-50% 0px -50% 0px",
  });

  // Fixes first render animation issue
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : false;

  return (
    <div
      ref={stepRef}
      className={`process-step relative flex flex-col md:flex-row items-center w-full ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Milestone Circle */}
      <div className="absolute left-6 md:left-1/2 w-6 h-6 -translate-x-1/2 flex items-center justify-center z-20">
        <motion.div
          animate={{
            borderColor: isCenterInView
              ? "rgba(59,130,246,0.8)"
              : "rgba(59,130,246,0.2)",

            boxShadow: isCenterInView
              ? "0 0 20px rgba(59,130,246,0.6), inset 0 0 10px rgba(59,130,246,0.4)"
              : "0 0 0px rgba(59,130,246,0)",
          }}
          transition={{
            duration: 0.4,
          }}
          className="milestone-circle w-full h-full rounded-full bg-background border-2 flex items-center justify-center"
        >
          <motion.div
            animate={{
              backgroundColor: isCenterInView
                ? "rgba(59,130,246,1)"
                : "rgba(59,130,246,0.2)",

              scale: isCenterInView ? 1 : 0.5,
            }}
            transition={{
              duration: 0.4,
              type: "spring",
              bounce: 0.4,
            }}
            className="milestone-inner w-2 h-2 rounded-full"
          />
        </motion.div>
      </div>

      {/* Content Card */}
      <div className="w-full md:w-1/2 pl-16 md:pl-0">
        <motion.div
          initial={{
            opacity: 0,

            // Desktop:
            // Left cards → left to right
            // Right cards → right to left
            // Mobile:
            // ALL cards → right to left
            x: isDesktop ? (isEven ? 120 : -120) : 120,

            scale: 0.98,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          animate={{
            borderColor: isCenterInView
              ? "rgba(59,130,246,0.4)"
              : "rgba(59,130,246,0.1)",

            boxShadow: isCenterInView
              ? "0 0 30px -5px rgba(59,130,246,0.2)"
              : "none",
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],

            borderColor: {
              duration: 0.4,
            },

            boxShadow: {
              duration: 0.4,
            },
          }}
          className={`process-card p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-blue-500/10 ${
            isEven
              ? "md:ml-12 lg:ml-16 md:text-left"
              : "md:mr-12 lg:mr-16 md:text-right"
          }`}
        >
          <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-500/20 to-transparent mb-4 block tracking-tighter">
            {step.number}
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
            {step.title}
          </h3>

          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
}

export function WorkProcessSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative py-24 px-4 md:px-8 w-full max-w-6xl mx-auto z-10 overflow-hidden"
    >
      <SectionHeading
        title="Work Process"
        subtitle="My structured approach to delivering high-quality digital products."
      />

      <div ref={containerRef} className="relative mt-16 md:mt-24 pb-12">
        {/* Center Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/10 md:-translate-x-1/2">
          {/* Active Glowing Line */}
          <motion.div
            style={{
              height: lineHeight,
            }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          />
        </div>

        {/* Process Steps */}
        <div className="flex flex-col gap-16 md:gap-24 relative z-10">
          {PROCESS_STEPS.map((step, idx) => (
            <ProcessStep key={idx} step={step} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

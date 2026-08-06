import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Layout, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";

const TRUST_DATA = [
  {
    title: "Clean Code",
    description: "Structured, readable, and highly maintainable architecture.",
    icon: Code2,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "UX-Focused",
    description: "Seamless and intuitive experience across all devices.",
    icon: Layout,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Reliable Support",
    description: "Long-term maintenance and guaranteed stability.",
    icon: HeartHandshake,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Fast Development",
    description: "Efficient workflows ensuring quick and precise delivery.",
    icon: Clock,
    colSpan: "col-span-1 md:col-span-3",
  },
  {
    title: "Modern Stack",
    description: "Utilizing up-to-date tools for maximum performance.",
    icon: Zap,
    colSpan: "col-span-1 md:col-span-3",
  }
];

export function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="trust" className="relative py-24 px-4 md:px-8 w-full max-w-7xl mx-auto z-10">
      <SectionHeading 
        title="Why Should You Choose Me?" 
        subtitle="Why should you choose me specifically over other developers?" 
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-6 gap-6"
      >
        {TRUST_DATA.map((item, index) => (
          <GlassCard key={index} className={item.colSpan} hoverEffect={false}>
            <motion.div variants={itemVariants} className="flex flex-col h-full justify-between gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm md:text-base">{item.description}</p>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center self-end md:self-start mt-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
            </motion.div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}

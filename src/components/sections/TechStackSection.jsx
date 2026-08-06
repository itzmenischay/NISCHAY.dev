import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { useMobile } from "@/hooks/useMobile";

const TECH_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5/html5-original.svg" },
      { name: "CSS3", icon: "css3/css3-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "React.js", icon: "react/react-original.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
      {
        name: "Framer Motion",
        icon: "framermotion/framermotion-original.svg",
        invert: true,
      },
      { name: "GSAP", icon: "greensock/greensock-original.svg" },
      { name: "Next.js", icon: "nextjs/nextjs-original.svg", invert: true },
      { name: "Redux", icon: "redux/redux-original.svg" },
      { name: "Material UI", icon: "materialui/materialui-original.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      {
        name: "Express.js",
        icon: "express/express-original.svg",
        invert: true,
      },
      { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
      {
        name: "Socket.io",
        icon: "socketio/socketio-original.svg",
        invert: true,
      },
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
      { name: "REST API", icon: "fastapi/fastapi-original.svg" },
      { name: "JWT Auth", icon: "jsonwebtokens/jsonwebtokens-original.svg" },
      { name: "Mongoose", icon: "mongoose/mongoose-original.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git/git-original.svg" },
      { name: "GitHub", icon: "github/github-original.svg", invert: true },
      { name: "VS Code", icon: "vscode/vscode-original.svg" },
      { name: "Postman", icon: "postman/postman-original.svg" },
      { name: "Figma", icon: "figma/figma-original.svg" },
      { name: "Canva", icon: "canva/canva-original.svg" },
      { name: "Vercel", icon: "vercel/vercel-original.svg", invert: true },
      { name: "Netlify", icon: "netlify/netlify-original.svg" },
      { name: "npm", icon: "npm/npm-original-wordmark.svg" },
      { name: "Docker", icon: "docker/docker-original.svg" },
      { name: "Render", icon: "render/render-original.svg" },
    ],
  },
];

export function TechStackSection() {
  const isMobile = useMobile();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.08,
        delayChildren: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      filter: isMobile ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="stack"
      className="relative py-24 px-4 md:px-8 w-full max-w-7xl mx-auto z-10"
    >
      <SectionHeading
        title="My Tech Stack"
        subtitle="The premium tools and technologies I use to build scalable, high-performance web applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {TECH_CATEGORIES.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.97,
              filter: isMobile ? "none" : "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              delay: idx * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`${
              idx === 2
                ? "md:col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-3 xl:col-span-2 mx-auto w-full lg:w-1/2"
                : ""
            }`}
          >
            <GlassCard className="p-8 h-full" whileHover={{}}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 tracking-tight"
              >
                {category.title}
              </motion.h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                  margin: "0px 0px -120px 0px",
                }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{
                      scale: 1.04,
                      transition: {
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-blue-500/[0.05] hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] md:hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-default overflow-hidden"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]" />

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 2,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative w-10 h-10 flex items-center justify-center"
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                        alt={skill.name}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-contain filter drop-shadow-sm md:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.45)] md:group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.45)] transition-all duration-500 ${skill.invert ? "invert" : ""}`}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />

                      <div className="hidden text-xs font-bold text-white/50">
                        {skill.name[0]}
                      </div>
                    </motion.div>

                    {/* Text */}
                    <motion.span
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                      className="text-xs font-medium text-white/60 text-center group-hover:text-white transition-colors duration-500"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

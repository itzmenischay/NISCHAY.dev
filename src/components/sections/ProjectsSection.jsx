import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import projectsData from "@/data/projectsData";
import { useMobile } from "@/hooks/useMobile";

export function ProjectsSection() {
  const isMobile = useMobile();
  return (
    <section
      id="projects"
      className="relative py-28 px-4 md:px-8 w-full max-w-7xl mx-auto z-10"
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="A curated showcase of premium digital experiences, full-stack systems, and modern web applications."
      />

      {/* 2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 items-stretch">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="h-full"
            initial={{
              opacity: 0,
              y: 40,
              filter: isMobile ? "none" : "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <GlassCard
              className="flex flex-col overflow-hidden p-0 h-full group min-h-full"
              whileHover={{}}
            >
              {/* Preview */}
              <div className="relative h-[240px] sm:h-[280px] overflow-hidden bg-black/50 border-b border-white/[0.05] shrink-0">
                <PreviewRenderer project={project} />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                {/* Top Content */}
                <div>
                  {/* Category */}
                  <span className="text-blue-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl border border-blue-500/20 bg-blue-500/10 text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Links */}
                <ProjectLinks project={project} />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- PREVIEW RENDERER ---------- */

function PreviewRenderer({ project }) {
  const thumb = project.thumbnail || project.fallbackThumbnail;

  if (project.previewType === "video" && project.previewVideo) {
    return (
      <video
        src={project.previewVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    );
  }

  if (project.previewType === "live" && project.previewUrl) {
    return (
      <>
        {thumb && (
          <img
            src={thumb}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <iframe
          src={project.previewUrl}
          loading="lazy"
          title={project.title}
          className="absolute top-0 left-0 w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none border-none z-10"
        />
      </>
    );
  }

  return (
    <img
      src={thumb}
      alt={project.title}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover"
    />
  );
}

/* ---------- LINKS ---------- */

function ProjectLinks({ project }) {
  return (
    <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/[0.06]">
      {project.liveLink && project.liveLink !== "#" && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">Live Demo</span>
        </a>
      )}

      {project.githubLink && project.githubLink !== "#" && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium"
        >
          <Code className="w-4 h-4" />
          <span className="text-sm">GitHub</span>
        </a>
      )}
    </div>
  );
}

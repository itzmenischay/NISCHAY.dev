import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-16 md:mb-24 flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {title.split(" ").map((word, i, arr) => {
            const isLast = i === arr.length - 1;
            return (
              <span
                key={i}
                className={
                  isLast
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
                    : "text-white"
                }
              >
                {word}{" "}
              </span>
            );
          })}
        </h2>
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

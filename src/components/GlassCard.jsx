import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({ children, className, glow = true, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative rounded-2xl p-6 sm:p-8 h-full",
        "bg-card/40 backdrop-blur-xl border border-blue-500/30",
        "transition-all duration-300",
        glow &&
          "hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:border-blue-500/30",
        className,
      )}
      {...props}
    >
      {/* Inner subtle glow */}
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* IMPORTANT FIX */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
}

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Trust", href: "#trust" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out",
        isScrolled ? "top-5 w-[92%] max-w-5xl" : "top-0 w-full max-w-7xl px-4",
      )}
    >
      <motion.nav
        layout
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "relative flex items-center justify-between transition-all duration-500",
          isScrolled
            ? `
              px-6 md:px-8 py-4
              rounded-full
              bg-white/10
              backdrop-blur-3xl
              border border-blue-500/10
              shadow-[0_0_40px_rgba(59,130,246,0.08)]
            `
            : `
              px-6 md:px-10 py-6
              bg-transparent
              border border-transparent
            `,
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-bold text-xl tracking-tight text-white group"
        >
          NISCHAY.
          <span className="text-blue-500 transition-colors duration-300 group-hover:text-cyan-400">
            dev
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-white/60 hover:text-white transition-all duration-300 group"
            >
              {link.name}

              <span
                className="
                  absolute -bottom-1 left-0
                  h-[1px] w-0
                  bg-blue-400
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="
                absolute top-full left-0 right-0
                mt-4
                rounded-3xl
                border border-blue-500/10
                bg-[#0a0a0f]/90
                backdrop-blur-2xl
                shadow-[0_0_30px_rgba(59,130,246,0.12)]
                p-6
                flex flex-col gap-5
                md:hidden
              "
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

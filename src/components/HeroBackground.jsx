import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLoader } from "@/context/LoaderContext";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-blue-500/[0.12]",
}) {
  const { isLoaderFinished } = useLoader();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={
        isLoaderFinished
          ? {
              opacity: 1,
              y: 0,
              rotate,
            }
          : {
              opacity: 0,
              y: -150,
              rotate: rotate - 15,
            }
      }
      transition={{
        duration: 2.4,
        delay: 0,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-blue-400/10",
            "shadow-[0_8px_32px_0_rgba(59,130,246,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  children,
}) {
  const { isLoaderFinished } = useLoader();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.1, // slight delay for smoothness, but no stagger
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Floating Capsules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Left Capsule */}
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.18]"
          className="
            left-[-42%] top-[10%] scale-[0.45]

            sm:left-[-25%] sm:top-[14%] sm:scale-[0.65]

            md:left-[-15%] md:top-[18%] md:scale-[0.8]

            lg:left-[-5%] lg:top-[20%] lg:scale-100
          "
        />

        {/* Bottom Right Large */}
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-sky-500/[0.18]"
          className="
            right-[-40%] top-[76%] scale-[0.5]

            sm:right-[-20%] sm:top-[74%] sm:scale-[0.7]

            md:right-[-10%] md:top-[74%] md:scale-[0.85]

            lg:right-[0%] lg:top-[75%] lg:scale-100
          "
        />

        {/* Bottom Left Medium */}
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-cyan-500/[0.18]"
          className="
            left-[-8%] bottom-[6%] scale-[0.55]

            sm:left-[0%] sm:bottom-[8%] sm:scale-[0.75]

            md:left-[6%] md:bottom-[10%] md:scale-[0.9]

            lg:left-[10%] lg:bottom-[10%] lg:scale-100
          "
        />

        {/* Top Right Small */}
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-indigo-500/[0.18]"
          className="
            right-[2%] top-[4%] scale-[0.65]

            sm:right-[8%] sm:top-[7%] sm:scale-[0.8]

            md:right-[14%] md:top-[10%] md:scale-[0.9]

            lg:right-[20%] lg:top-[15%] lg:scale-100
          "
        />

        {/* Top Left Accent */}
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-blue-400/[0.18]"
          className="
            left-[6%] top-[2%] scale-[0.7]

            sm:left-[12%] sm:top-[4%] sm:scale-[0.85]

            md:left-[18%] md:top-[7%] md:scale-[0.95]

            lg:left-[25%] lg:top-[10%] lg:scale-100
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isLoaderFinished ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.05] border border-blue-500/[0.15] mb-8 md:mb-12 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            <Circle className="h-2 w-2 fill-blue-500/80 text-blue-500/80 animate-pulse" />
            <span className="text-sm text-blue-100/80 tracking-wide font-medium">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isLoaderFinished ? "visible" : "hidden"}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>

              <br />

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-cyan-300">
                {title2}
              </span>
            </h1>
          </motion.div>

          {children}
        </div>
      </div>
    </div>
  );
}

export { HeroGeometric };

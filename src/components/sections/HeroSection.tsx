import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { spring } from "@/lib/motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center px-6 pt-32 pb-16 md:px-12 lg:px-20 overflow-hidden"
      data-testid="hero-section"
    >
      <motion.div style={{ opacity, y }} className="max-w-[1400px] mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.05 }}
          className="text-hero-eyebrow mb-10 md:mb-14"
        >
          {personalInfo.title} · {personalInfo.monogram} · Building Applied AI products
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-display text-[#1d1d1f] max-w-[18ch]"
        >
          I bridge the gap between enterprise architecture and Applied AI.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.32 }}
          className="mt-14 md:mt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <p className="max-w-md text-[15px] leading-relaxed text-[#555559]">
            I am currently six months out from launching a B2B AI automation agency. From
            shipping mission-critical infrastructure at Citi to building conversational AI products.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-[#333336] press-scale"
              data-testid="hero-cta-work"
            >
              View work
              <ArrowDownRight size={16} strokeWidth={1.75} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 border border-[#e5e5ea] text-[#1d1d1f] px-6 py-3 rounded-full text-[14px] font-medium hover:bg-black/[0.03] press-scale"
              data-testid="hero-cta-contact"
            >
              Email me to talk AI Architecture
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-label"
        aria-hidden
      >
        Scroll
      </motion.div>
    </section>
  );
}

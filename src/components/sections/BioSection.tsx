import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function BioSection() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      data-testid="bio-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="text-label mb-10"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="w-full max-w-[280px] lg:max-w-none lg:w-[320px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f5f5f7]">
              <img
                src={personalInfo.portrait}
                alt={`${personalInfo.name} portrait`}
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-body-lg mb-8">
              {personalInfo.bioLead}
            </motion.p>
            <motion.p variants={fadeUp} className="text-body max-w-2xl">
              {personalInfo.bio}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="surface-card p-6 hover-lift"
                  data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[#1d1d1f] leading-none">
                    {s.value}
                  </div>
                  <div className="mt-4 text-[13px] text-[#555559]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AchievementsSection() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      data-testid="achievements-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-label mb-4">Recognition</p>
          <h2 className="text-h2 max-w-2xl">A few things worth mentioning.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.id}
              variants={fadeUp}
              className="surface-card p-8 hover-lift"
              data-testid={`achievement-${a.id}`}
            >
              <div className="font-display font-bold text-6xl tracking-tighter text-[#1d1d1f] leading-none">
                {a.metric}
              </div>
              <p className="text-label mt-8">{a.label}</p>
              <p className="text-body mt-4 text-[14px]">{a.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

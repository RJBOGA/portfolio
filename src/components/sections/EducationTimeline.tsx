import { motion } from "framer-motion";
import { education } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#f5f5f7]/40"
      data-testid="education-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-label mb-4">Education</p>
          <h2 className="text-h2 max-w-2xl">Where it started.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {education.map((e) => (
            <motion.div
              key={e.id}
              variants={fadeUp}
              className="surface-card p-8 hover-lift"
              data-testid={`education-${e.id}`}
            >
              <p className="text-label mb-4">
                {e.degree} · {e.location}
              </p>
              <h3 className="text-h3">{e.institution}</h3>
              <p className="text-body mt-3">{e.field}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

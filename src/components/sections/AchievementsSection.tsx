import { motion } from "framer-motion";
import { achievements, media } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AchievementsSection() {
  const dsi = achievements.find((a) => a.id === "ach-dsi");
  const rest = achievements.filter((a) => a.id !== "ach-dsi");

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
          {dsi && (
            <motion.article
              variants={fadeUp}
              className="surface-card overflow-hidden hover-lift md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col"
              data-testid={`achievement-${dsi.id}`}
            >
              <div className="aspect-[16/10] lg:aspect-auto lg:flex-1 overflow-hidden bg-[#f5f5f7]">
                <img
                  src={media.dsiPresenting}
                  alt="Raju Boga presenting at the Decision Sciences Institute conference"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-display font-bold text-5xl md:text-6xl tracking-tighter text-[#1d1d1f] leading-none">
                    {dsi.metric}
                  </span>
                  <p className="text-label">Published & presented</p>
                </div>
                <h3 className="text-h3 mt-6">{dsi.label}</h3>
                <p className="text-body mt-4 text-[14px] max-w-xl">
                  Co-authored and presented “Project Management for the Future: Leveraging
                  Technology and Sustainability” at the Decision Sciences Institute
                  conference alongside Dr. Vatsal Paghadal and Dr. Benjamin George.
                </p>
              </div>
            </motion.article>
          )}

          {rest.map((a) => (
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

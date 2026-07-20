import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-white"
      data-testid="projects-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-label mb-4">Selected work</p>
          <h2 className="text-h2 max-w-2xl">Projects I'm quietly proud of.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              className="group surface-card overflow-hidden hover-lift"
              data-testid={`project-${p.id}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#f5f5f7]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-label mb-4">{p.tagline}</p>
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-h3">{p.name}</h3>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 w-10 h-10 rounded-full border border-[#e5e5ea] flex items-center justify-center press-scale hover:bg-black/[0.03]"
                      aria-label={`${p.name} link`}
                      data-testid={`project-link-${p.id}`}
                    >
                      <ArrowUpRight size={16} strokeWidth={1.75} />
                    </a>
                  )}
                </div>
                <p className="text-body mt-4 max-w-xl">{p.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.techStack.map((t) => (
                    <li
                      key={t}
                      className="text-[12px] text-[#555559] px-3 py-1.5 rounded-full bg-[#f5f5f7]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

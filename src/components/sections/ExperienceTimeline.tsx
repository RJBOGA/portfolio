import { motion } from "framer-motion";
import { experience } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { format } from "date-fns";

const fmt = (d: string | null) => {
  if (!d) return "Present";
  const [year, month] = d.split("-").map(Number);
  return format(new Date(year, month - 1, 1), "MMM yyyy");
};

export default function ExperienceTimeline() {
  return (
    <section
      id="work"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      data-testid="experience-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-16 md:mb-20"
        >
          <p className="text-label mb-4">Experience</p>
          <h2 className="text-h2 max-w-2xl">Where the code has run in production.</h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto"
        >
          <div
            aria-hidden
            className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-[#e5e5ea]"
          />

          {experience.map((job) => (
            <motion.li
              key={job.id}
              variants={fadeUp}
              className="relative pl-10 md:pl-16 pb-16 last:pb-0"
              data-testid={`experience-${job.id}`}
            >
              <span
                aria-hidden
                className="absolute left-0 top-2 w-4 h-4 rounded-full bg-white border border-[#e5e5ea] shadow-[0_0_0_4px_#fbfbfd] flex items-center justify-center"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${job.current ? "bg-[#1d1d1f]" : "bg-[#a1a1a6]"}`} />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                <p className="text-label">
                  {fmt(job.startDate)} — {fmt(job.endDate)}
                </p>
                <p className="text-label text-[#a1a1a6]">{job.location}</p>
              </div>

              <h3 className="text-h3 mb-1">
                {job.role} <span className="text-[#a1a1a6]">at</span> {job.company}
              </h3>

              <ul className="mt-6 space-y-3 max-w-2xl">
                {job.impact.map((line, i) => (
                  <li key={i} className="text-body flex gap-3">
                    <span aria-hidden className="text-[#a1a1a6] mt-2 shrink-0">—</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

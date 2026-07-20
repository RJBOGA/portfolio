import { motion } from "framer-motion";
import { Layout, Server, Cloud, Sparkles, Users } from "lucide-react";
import { skillGroups } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

const ICON_MAP = { Layout, Server, Cloud, Sparkles, Users } as const;

const SPAN_CLASS: Record<string, string> = {
  sm: "md:col-span-1",
  md: "md:col-span-2",
  lg: "md:col-span-2 lg:col-span-2",
};

export default function SkillsBento() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#f5f5f7]/40" data-testid="skills-section">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-label mb-4">Skills</p>
          <h2 className="text-h2 max-w-2xl">The stack behind the systems.</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillGroups.map((g) => {
            const Icon = ICON_MAP[g.icon as keyof typeof ICON_MAP] ?? Layout;
            return (
              <motion.div
                key={g.id}
                variants={fadeUp}
                className={`surface-card p-8 hover-lift ${SPAN_CLASS[g.span ?? "sm"]}`}
                data-testid={`skill-card-${g.id}`}
              >
                <div className="w-11 h-11 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center mb-8">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-h3 mb-6">{g.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="text-[13px] text-[#1d1d1f] px-3 py-1.5 rounded-full border border-[#e5e5ea] bg-white"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

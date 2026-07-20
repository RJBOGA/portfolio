import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-32 md:py-40"
      data-testid="contact-section"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-label mb-8">
            Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-display text-[#1d1d1f] mb-12 md:mb-16"
          >
            Let's talk.
          </motion.h2>

          <motion.a
            variants={fadeUp}
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-baseline gap-4 text-h2 press-scale"
            data-testid="contact-email"
          >
            {personalInfo.email}
            <ArrowUpRight
              size={28}
              strokeWidth={1.5}
              className="translate-y-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0"
            />
          </motion.a>

          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-wrap gap-3"
          >
            {socialLinks.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-[#e5e5ea] text-[14px] font-medium text-[#1d1d1f] hover:bg-black/[0.03] press-scale"
                data-testid={`social-${s.platform.toLowerCase()}`}
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

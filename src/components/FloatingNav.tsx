import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio-data";
import { spring } from "@/lib/motion";

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={spring}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
        aria-label="Primary"
        data-testid="floating-nav"
      >
        <div
          className={`surface-glass rounded-full flex items-center justify-between pl-5 pr-2 py-2 transition-[padding,box-shadow] duration-500 ${
            scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.08)]" : ""
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 press-scale"
            data-testid="nav-monogram"
            aria-label="Raju — home"
          >
            <span className="font-display font-bold text-[15px] tracking-tight text-[#1d1d1f]">
              {personalInfo.monogram}
            </span>
            <span className="hidden sm:inline text-[13px] text-[#555559] font-medium">
              · {personalInfo.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className="px-4 py-2 text-[13px] font-medium text-[#1d1d1f] rounded-full hover:bg-black/[0.04] transition-colors press-scale"
                data-testid={`nav-link-${l.id}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 text-[13px] font-medium bg-[#1d1d1f] text-white rounded-full hover:bg-[#333336] transition-colors press-scale"
              data-testid="nav-cta"
            >
              Let's talk
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-full hover:bg-black/[0.04] press-scale"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-4 right-4 z-40 surface-glass rounded-3xl p-3 md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 text-[15px] font-medium text-[#1d1d1f] rounded-2xl hover:bg-black/[0.04]"
                  data-testid={`mobile-link-${l.id}`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 mx-2 mb-1 px-5 py-3 text-[15px] font-medium bg-[#1d1d1f] text-white rounded-2xl text-center"
                data-testid="mobile-cta"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

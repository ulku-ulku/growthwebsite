import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";

export function CTABand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-12 sm:py-16" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl border border-[var(--color-neon)]/25 bg-gradient-to-br from-[var(--color-neon)]/15 via-white/[0.04] to-transparent p-8 backdrop-blur-xl sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-neon)]/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Markanızı Büyütmeye Hazır mısınız?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-zinc-300">
              E-ticaret sitenizi satış odaklı hale getirmek, growth sistemleri kurmak ve
              otomasyonlarla zaman kazanmak için bizimle iletişime geçin.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-8">
              <a
                href="#iletisim"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100"
              >
                Ücretsiz Görüşme Al
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

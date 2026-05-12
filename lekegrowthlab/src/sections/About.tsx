import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hakkimizda" className="scroll-mt-24 py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-12 lg:p-14">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Yazılım Gücüyle Growth Stratejisini Birleştiriyoruz
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              LekeGrowthLab, markaların sadece web sitesi kurmasına değil, satış üreten dijital
              sistemler geliştirmesine odaklanır. Yazılım geliştirme, e-ticaret altyapısı, dönüşüm
              optimizasyonu ve growth danışmanlığını tek çatı altında sunarak işletmelerin
              sürdürülebilir büyümesine yardımcı olur.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-sm text-zinc-500">
              AI otomasyon çözümleri ve dijital büyüme danışmanlığı ile operasyonel yükü azaltır,
              büyümeyi ölçeklenebilir hale getiririz.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

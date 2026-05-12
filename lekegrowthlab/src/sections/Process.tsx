import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";

const steps = [
  {
    title: "Analiz",
    body: "Mevcut web sitenizi, reklam kanallarınızı, funnel yapınızı ve teknik altyapınızı inceleriz.",
  },
  {
    title: "Strateji",
    body: "Markanız için growth roadmap, teknik geliştirme planı ve önceliklendirme oluştururuz.",
  },
  {
    title: "Kurulum",
    body: "E-ticaret altyapısı, otomasyonlar, analytics ve satış odaklı sayfaları hayata geçiririz.",
  },
  {
    title: "Optimizasyon",
    body: "A/B test, kullanıcı davranışı analizi ve dönüşüm iyileştirmeleri yaparız.",
  },
  {
    title: "Ölçekleme",
    body: "Başarılı sistemleri büyütür, reklam ve operasyon süreçlerini daha verimli hale getiririz.",
  },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="surec" className="scroll-mt-24 py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Nasıl Çalışıyoruz?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 max-w-2xl text-zinc-400">
            Şeffaf süreç; analizden ölçeklemeye net adımlar.
          </motion.p>
        </motion.div>

        <ol className="mt-12 space-y-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:gap-6 sm:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-neon)]/40 bg-[var(--color-neon)]/10 text-sm font-bold text-[var(--color-neon)]">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{s.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

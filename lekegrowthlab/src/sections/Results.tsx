import { motion, useInView } from "framer-motion";
import { BarChart3, Gauge, Target, Zap } from "lucide-react";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";

const kpis = [
  { label: "+%230 dönüşüm artışı potansiyeli", icon: Target },
  { label: "+%180 gelir büyümesi hedefi", icon: BarChart3 },
  { label: "%40 daha düşük müşteri edinme maliyeti", icon: Gauge },
  { label: "3x daha hızlı operasyon süreçleri", icon: Zap },
];

export function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sonuclar" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Büyümeye Odaklanan Sistemler
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 max-w-2xl text-zinc-400">
            Funnel optimizasyonu ve dönüşüm optimizasyonu ile ölçülebilir hedefler koyuyoruz.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          {kpis.map((k, i) => (
            <motion.li
              key={k.label}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 backdrop-blur-md"
            >
              <k.icon className="h-6 w-6 text-[var(--color-neon)]" aria-hidden />
              <p className="mt-4 text-lg font-semibold text-white">{k.label}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          className="mt-8 text-xs text-zinc-500"
        >
          Rakamlar örnek performans senaryolarıdır; sonuçlar işletme modeline göre değişebilir.
        </motion.p>
      </div>
    </section>
  );
}

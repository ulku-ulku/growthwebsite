import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";

const quotes = [
  {
    name: "Elif Karaman",
    role: "Kurucu, NordAtölye",
    text: "Shopify danışmanlığı ve checkout optimizasyonu sonrası sepet terkini ciddi oranda düşürdük. Süreç net ve veriye dayalıydı.",
  },
  {
    name: "Burak Yılmaz",
    role: "E-Ticaret Müdürü, Verde Home",
    text: "WooCommerce kurulumu ve entegrasyonlar tek elden yönetildi. Operasyon ekibimiz AI otomasyon çözümleri sayesinde günlük rutin işlere daha az zaman harcıyor.",
  },
  {
    name: "Selin Arda",
    role: "CMO, Pulse Active",
    text: "Growth danışmanlığı ve funnel optimizasyonu ile kampanya yapımız sadeleşti. Dönüşüm optimizasyonu çalışmaları doğrudan gelir tarafına yansıdı.",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-28" aria-labelledby="testimonials-heading" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            id="testimonials-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Müşteriler İçin Değer Yaratan Yaklaşım
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 max-w-2xl text-zinc-400">
            Kurgusal örnek yorumlar; tipik iş birliği senaryolarını yansıtır.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          {quotes.map((q, i) => (
            <motion.li
              key={q.name}
              variants={fadeUp}
              custom={i}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-md"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-[var(--color-neon)]/20" aria-hidden />
              <p className="text-sm leading-relaxed text-zinc-300">&ldquo;{q.text}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{q.name}</p>
                <p className="text-xs text-zinc-500">{q.role}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import {
  Bot,
  LineChart,
  ShoppingBag,
  ShoppingCart,
  Store,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";

const items = [
  {
    title: "E-Ticaret Sitesi Kurulumu",
    desc: "Markanız için hızlı, güvenilir ve satış odaklı e-ticaret altyapıları kuruyoruz.",
    icon: ShoppingCart,
  },
  {
    title: "Shopify Danışmanlığı",
    desc: "Shopify mağazanızı kuruyor, optimize ediyor ve satışa hazır hale getiriyoruz.",
    icon: Store,
  },
  {
    title: "WooCommerce Kurulumu",
    desc: "WordPress tabanlı güçlü ve esnek WooCommerce e-ticaret sistemleri geliştiriyoruz.",
    icon: ShoppingBag,
  },
  {
    title: "Growth Danışmanlığı",
    desc: "Müşteri kazanımı, retention, funnel ve gelir artırma stratejileri geliştiriyoruz.",
    icon: TrendingUp,
  },
  {
    title: "Dönüşüm Optimizasyonu",
    desc: "Ürün sayfası, sepet ve checkout akışlarını analiz ederek dönüşüm oranınızı artırıyoruz.",
    icon: LineChart,
  },
  {
    title: "AI Otomasyon Çözümleri",
    desc: "Tekrarlayan işleri otomasyonla azaltıyor, operasyonel verimliliği artırıyoruz.",
    icon: Bot,
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hizmetler" className="scroll-mt-24 py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            E-Ticaret ve Growth Danışmanlığı Hizmetleri
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 text-zinc-400">
            Shopify danışmanlığı, WooCommerce kurulumu ve e-ticaret yazılım danışmanlığı ile
            uçtan uca destek sunuyoruz.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:border-[var(--color-neon)]/35 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--color-neon)] transition group-hover:border-[var(--color-neon)]/30">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

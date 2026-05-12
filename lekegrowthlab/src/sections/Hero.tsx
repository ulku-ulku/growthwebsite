import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

export function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(57,255,141,0.18),transparent)]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[var(--color-neon)]/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-xl">
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-neon)]" aria-hidden />
            Dijital büyüme danışmanlığı & e-ticaret yazılımı
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            E-Ticaret Markaları İçin Yazılım ve Growth Sistemleri Kuruyoruz
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            LekeGrowthLab; e-ticaret siteleri, Shopify/WooCommerce altyapıları, dönüşüm
            optimizasyonu, AI otomasyonları ve growth stratejileriyle markaların daha hızlı
            büyümesine yardımcı olur. Satış artırma stratejileri ve e-ticaret sitesi kurulumu
            süreçlerinde uçtan uca eşlik ederiz.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => go("#iletisim")}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-neon)] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Ücretsiz Görüşme Al
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go("#hizmetler")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white/10"
            >
              Hizmetleri İncele
            </button>
          </motion.div>
          <motion.ul
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-500"
          >
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon)]" /> E-Ticaret Odaklı
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon)]" /> Growth Stratejisi
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neon)]" /> Yazılım + Otomasyon
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-[var(--color-neon)]/5 backdrop-blur-xl sm:p-6">
            <img
              src="/hero-growth.svg"
              width={560}
              height={420}
              alt="LekeGrowthLab e-ticaret ve growth danışmanlığı için soyut görsel; neon yeşil vurgulu modern illüstrasyon"
              className="h-auto w-full rounded-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

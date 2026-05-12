import { motion, useInView } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { fadeUp, stagger } from "../lib/motion";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const body = [
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      `Telefon: ${phone}`,
      `Şirket / Marka: ${company}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:ulkuulku124@gmail.com?subject=${encodeURIComponent("LekeGrowthLab İletişim")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="iletisim" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            İletişime Geçin
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 max-w-2xl text-zinc-400">
            E-ticaret sitesi kurulumu ve growth danışmanlığı için formu doldurun; e-posta
            istemciniz açılacaktır.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Mail className="h-5 w-5 shrink-0 text-[var(--color-neon)]" aria-hidden />
                <a href="mailto:ulkuulku124@gmail.com" className="break-all hover:text-white">
                  ulkuulku124@gmail.com
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Phone className="h-5 w-5 shrink-0 text-[var(--color-neon)]" aria-hidden />
                <a href="tel:+905448466280" className="hover:text-white">
                  0544 846 62 80
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={3}
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-zinc-400">
                Ad Soyad
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none ring-[var(--color-neon)]/0 transition focus:border-[var(--color-neon)]/50 focus:ring-2 focus:ring-[var(--color-neon)]/20"
                  autoComplete="name"
                />
              </label>
              <label className="block text-xs font-medium text-zinc-400">
                E-posta
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--color-neon)]/50 focus:ring-2 focus:ring-[var(--color-neon)]/20"
                  autoComplete="email"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-zinc-400">
                Telefon
                <input
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--color-neon)]/50 focus:ring-2 focus:ring-[var(--color-neon)]/20"
                  autoComplete="tel"
                />
              </label>
              <label className="block text-xs font-medium text-zinc-400">
                Şirket / Marka Adı
                <input
                  name="company"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--color-neon)]/50 focus:ring-2 focus:ring-[var(--color-neon)]/20"
                  autoComplete="organization"
                />
              </label>
            </div>
            <label className="block text-xs font-medium text-zinc-400">
              Mesaj
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none transition focus:border-[var(--color-neon)]/50 focus:ring-2 focus:ring-[var(--color-neon)]/20"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--color-neon)] py-3 text-sm font-semibold text-black transition hover:brightness-110 sm:w-auto sm:px-10"
            >
              Mesaj Gönder
            </button>
            {sent && (
              <p className="text-xs text-[var(--color-neon)]" role="status">
                E-posta uygulamanız açıldıysa mesajınızı gönderebilirsiniz.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

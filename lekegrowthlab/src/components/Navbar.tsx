import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Süreç" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#sonuclar", label: "Sonuçlar" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-[#050505]/75 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-2 px-4 pt-[env(safe-area-inset-top,0px)] sm:px-6 lg:px-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="min-w-0 shrink text-base font-semibold tracking-tight text-white sm:text-lg"
        >
          Leke<span className="text-[var(--color-neon)]">Growth</span>Lab
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#iletisim"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#iletisim");
            }}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-neon)] px-5 py-2 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Ücretsiz Görüşme Al
          </a>
        </div>

        <button
          type="button"
          className="-me-1 min-h-11 min-w-11 rounded-lg p-2 text-zinc-300 touch-manipulation md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[#050505]/95 px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="touch-manipulation rounded-lg px-1 py-3 text-sm text-zinc-300 active:bg-white/5"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="mt-2 inline-flex min-h-11 touch-manipulation items-center justify-center rounded-full bg-[var(--color-neon)] px-4 py-3 text-sm font-semibold text-black"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#iletisim");
              }}
            >
              Ücretsiz Görüşme Al
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}

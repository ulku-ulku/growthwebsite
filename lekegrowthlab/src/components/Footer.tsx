const scrollTo = (sel: string) => {
  document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Leke<span className="text-[var(--color-neon)]">Growth</span>Lab
            </p>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              E-ticaret yazılımı, growth danışmanlığı ve dijital büyüme sistemleri.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm" aria-label="Alt bağlantılar">
            <button
              type="button"
              onClick={() => scrollTo("#hizmetler")}
              className="text-zinc-400 hover:text-white"
            >
              Hizmetler
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#hakkimizda")}
              className="text-zinc-400 hover:text-white"
            >
              Hakkımızda
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#iletisim")}
              className="text-zinc-400 hover:text-white"
            >
              İletişim
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#gizlilik")}
              className="text-zinc-400 hover:text-white"
            >
              Gizlilik Politikası
            </button>
          </nav>
        </div>

        <div id="gizlilik" className="mt-12 scroll-mt-24 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <h3 className="text-sm font-semibold text-white">Gizlilik Politikası (Özet)</h3>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            İletişim formu aracılığıyla paylaştığınız ad, e-posta, telefon ve mesaj içeriği yalnızca
            talebinize yanıt vermek amacıyla kullanılır; üçüncü taraflarla paylaşılmaz. Bu sayfa
            bilgilendirme amaçlıdır; hukuki danışmanlık yerine geçmez.
          </p>
        </div>

        <p className="mt-10 text-center text-xs text-zinc-600 md:text-left">
          © 2026 LekeGrowthLab. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

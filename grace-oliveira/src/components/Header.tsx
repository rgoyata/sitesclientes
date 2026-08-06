import { useEffect, useState } from "react";
import { waGeneral } from "../lib/whatsapp";

const links = [
  { label: "Produtos", href: "#produtos" },
  { label: "Identidade Olfativa", href: "#identidade-olfativa" },
  { label: "Presentes", href: "#presentes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur border-b border-coffee/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
            GO
          </span>
          <span className="font-serif italic text-2xl text-coffee">
            Grace Oliveira
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-coffee transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={waGeneral}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center border border-gold text-coffee text-sm px-5 py-2 tracking-wide hover:bg-gold hover:text-cream transition-colors"
        >
          WhatsApp
        </a>

        <button
          aria-label="Abrir menu"
          className="md:hidden text-coffee"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-cream border-t border-coffee/10 px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waGeneral}
            target="_blank"
            rel="noreferrer"
            className="text-coffee font-medium"
          >
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

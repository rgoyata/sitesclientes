const columns = [
  {
    title: "Produtos",
    links: [
      { label: "Velas aromáticas", href: "#velas" },
      { label: "Aromatização de ambientes", href: "#aromatizacao" },
      { label: "Bem-estar", href: "#bem-estar" },
    ],
  },
  {
    title: "Presentes",
    links: [
      { label: "Kits e presentes", href: "#presentes" },
      { label: "Lembrancinhas", href: "#lembrancinhas" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Identidade olfativa", href: "#identidade-olfativa" },
      { label: "Sobre", href: "#sobre" },
      { label: "Contato", href: "#contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-cream border-t border-coffee/10 px-6 py-16">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-4 gap-10">
        <div>
          <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
            GO
          </span>
          <p className="font-serif italic text-2xl text-coffee">
            Grace Oliveira
          </p>
          <p className="text-xs tracking-[0.3em] text-ink/40 uppercase mt-1">
            Atelier Olfativo
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-[0.2em] uppercase text-ink/50 mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2 text-sm text-ink/70">
              {col.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-coffee transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-coffee/10 text-xs text-ink/40">
        © {new Date().getFullYear()} Grace Oliveira Atelier Olfativo
      </div>
    </footer>
  );
}

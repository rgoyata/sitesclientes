import { lembrancinhasImage } from "../data/products";
import { waLink } from "../lib/whatsapp";

const waLembrancinhas = waLink(
  "Olá! Vim pelo site da Grace Oliveira e gostaria de saber mais sobre lembrancinhas e brindes personalizados.",
);

export function Lembrancinhas() {
  return (
    <section id="lembrancinhas" className="scroll-mt-24 py-24 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={lembrancinhasImage}
            alt="Lembrancinhas personalizadas Grace Oliveira com fita e cartão"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Datas especiais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-coffee mt-3">
            Lembrancinhas e brindes
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
            Criamos lembrancinhas e brindes personalizados para casamentos,
            aniversários, chás e eventos corporativos — com a mesma
            fragrância e cuidado dos nossos produtos autorais. Modelos,
            quantidades e valores sob consulta.
          </p>
          <a
            href={waLembrancinhas}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border border-coffee text-coffee px-8 py-3 text-sm tracking-widest uppercase hover:bg-coffee hover:text-cream transition-colors"
          >
            Consultar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

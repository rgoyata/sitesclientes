import type { Product } from "../data/products";
import { waProduct } from "../lib/whatsapp";

export function ProductCard({ name, description, priceCash, priceCredit, image }: Product) {
  return (
    <div className="group flex flex-col">
      <div className="aspect-[4/5] w-full overflow-hidden bg-beige">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-beige to-beige/60">
            <span className="font-serif italic text-coffee/50 text-2xl sm:text-3xl">
              GO
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-coffee/40">
              Foto em breve
            </span>
          </div>
        )}
      </div>

      <div className="pt-5 text-center">
        <h3 className="font-serif text-xl text-coffee">{name}</h3>
        <p className="mt-1 text-sm text-ink/60">{description}</p>
        <p className="mt-3 text-sm text-ink/80">
          {priceCash}{" "}
          <span className="text-ink/40">à vista</span>
          <span className="mx-1.5 text-ink/30">·</span>
          {priceCredit}{" "}
          <span className="text-ink/40">no crédito</span>
        </p>
        <a
          href={waProduct(name)}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-xs tracking-[0.2em] uppercase text-gold border-b border-gold/50 pb-1 hover:text-coffee hover:border-coffee transition-colors"
        >
          Solicitar no WhatsApp
        </a>
      </div>
    </div>
  );
}

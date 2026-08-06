import { useState } from "react";
import { categories } from "../data/products";
import { ProductCard } from "./ProductCard";

export function Products() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="produtos" className="scroll-mt-24 py-24 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Coleção
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-coffee mt-3">
            Produtos
          </h2>
          <p className="mt-4 text-ink/60">{current.intro}</p>
        </div>

        <div
          id="velas"
          className="flex flex-wrap justify-center gap-3 mb-16 scroll-mt-24"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase border transition-colors ${
                active === c.id
                  ? "border-coffee bg-coffee text-cream"
                  : "border-coffee/25 text-ink/70 hover:border-coffee"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">
          {current.items.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* anchors for direct nav links */}
      <span id="aromatizacao" className="sr-only" />
      <span id="bem-estar" className="sr-only" />
    </section>
  );
}

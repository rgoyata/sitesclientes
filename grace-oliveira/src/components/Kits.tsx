import { kits } from "../data/products";
import { ProductCard } from "./ProductCard";

export function Kits() {
  return (
    <section id="presentes" className="scroll-mt-24 py-24 sm:py-28 px-6 bg-beige/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Presentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-coffee mt-3">
            Kits e presentes
          </h2>
          <p className="mt-4 text-ink/60">
            Composições prontas para presentear com sofisticação.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-10 gap-y-14 max-w-2xl mx-auto">
          {kits.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

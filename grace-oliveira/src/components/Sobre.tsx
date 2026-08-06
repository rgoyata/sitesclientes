import velaVidroBambu from "../assets/products/vela-vidro-bambu.jpg";

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 py-24 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Sobre
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-coffee mt-3">
            Grace Oliveira Atelier Olfativo
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
            Um atelier dedicado a transformar ambientes e momentos através do
            aroma. Cada peça é criada de forma artesanal, unindo bem-estar,
            presentes e identidade olfativa em produtos que carregam
            personalidade e sofisticação.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
            Porque sua marca — e sua casa — merecem ser lembradas também pelo
            aroma.
          </p>
        </div>

        <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden">
          <img
            src={velaVidroBambu}
            alt="Vela aromática Grace Oliveira em vidro com tampa de bambu"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

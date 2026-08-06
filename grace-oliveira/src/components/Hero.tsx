import heroImage from "../assets/products/lembrancinhas.jpg";
import { waGeneral } from "../lib/whatsapp";

export function Hero() {
  return (
    <section className="relative h-[92svh] min-h-[560px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Difusor de aroma, vela e spray Grace Oliveira compondo um ambiente acolhedor"
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[fadeZoom_1.6s_ease-out]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-coffee/20 to-coffee/10" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <span className="text-cream/80 text-xs tracking-[0.4em] uppercase mb-6">
          Atelier Olfativo
        </span>
        <h1 className="font-serif text-cream text-4xl sm:text-6xl max-w-3xl leading-[1.1]">
          Transformamos ambientes em experiências inesquecíveis.
        </h1>
        <p className="mt-6 text-cream/85 max-w-lg text-base sm:text-lg">
          Produtos artesanais, presentes especiais e identidade olfativa para
          tornar cada ambiente único.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#produtos"
            className="bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-coffee transition-colors"
          >
            Conheça a coleção
          </a>
          <a
            href={waGeneral}
            target="_blank"
            rel="noreferrer"
            className="border border-cream/70 text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-cream hover:text-coffee transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

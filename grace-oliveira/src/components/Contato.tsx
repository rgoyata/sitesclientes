import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  waGeneral,
} from "../lib/whatsapp";

export function Contato() {
  return (
    <section id="contato" className="scroll-mt-24 py-24 sm:py-28 px-6 bg-coffee text-cream">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs tracking-[0.35em] uppercase text-gold">
          Contato
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl mt-3">
          Vamos criar seu próximo aroma
        </h2>
        <p className="mt-5 text-cream/75 leading-relaxed">
          Atendemos por WhatsApp para confirmar fragrância, disponibilidade e
          entrega antes de fechar seu pedido — com todo cuidado, do jeito
          Grace Oliveira.
        </p>

        <a
          href={waGeneral}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block bg-gold text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-cream hover:text-coffee transition-colors"
        >
          Falar no WhatsApp
        </a>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-x-10 gap-y-3 text-sm text-cream/70">
          <span>{WHATSAPP_DISPLAY}</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}

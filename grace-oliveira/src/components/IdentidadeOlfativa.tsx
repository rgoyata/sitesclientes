import bannerImage from "../assets/products/identidade-olfativa.jpg";
import { waLink } from "../lib/whatsapp";

const beneficios = [
  {
    title: "Perfuma",
    text: "Aromatiza o ambiente de forma contínua e equilibrada.",
  },
  {
    title: "Conecta",
    text: "Cria experiências memoráveis e fortalece a identidade.",
  },
  {
    title: "Transforma",
    text: "Ambientes mais acolhedores, elegantes e sofisticados.",
  },
  {
    title: "Profissional",
    text: "Tecnologia segura, silenciosa e com alta performance.",
  },
];

const waCorporate = waLink(
  "Olá! Vim pelo site da Grace Oliveira e tenho interesse na Identidade Olfativa para minha empresa.",
);

export function IdentidadeOlfativa() {
  return (
    <section id="identidade-olfativa" className="scroll-mt-24 bg-coffee text-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2">
        <div className="aspect-[4/5] md:aspect-auto md:h-full">
          <img
            src={bannerImage}
            alt="Máquina difusora profissional Grace Oliveira para identidade olfativa de empresas"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-6 sm:px-12 py-16 flex flex-col justify-center">
          <span className="text-xs tracking-[0.35em] uppercase text-gold">
            Para empresas e marcas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-3 leading-tight">
            Sua marca.{" "}
            <span className="italic text-gold">Sua essência.</span>
          </h2>
          <p className="mt-4 text-cream/80 max-w-md">
            Porque sua marca merece ser lembrada também pelo aroma.
            Transforme ambientes, conecte pessoas com máquina difusora e
            refis exclusivos Grace Oliveira.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-8">
            {beneficios.map((b) => (
              <div key={b.title}>
                <dt className="text-sm tracking-[0.15em] uppercase text-gold">
                  {b.title}
                </dt>
                <dd className="mt-2 text-sm text-cream/70 leading-relaxed">
                  {b.text}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={waCorporate}
            target="_blank"
            rel="noreferrer"
            className="mt-10 self-start bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase hover:bg-cream hover:text-coffee transition-colors"
          >
            Solicitar consultoria
          </a>
        </div>
      </div>
    </section>
  );
}

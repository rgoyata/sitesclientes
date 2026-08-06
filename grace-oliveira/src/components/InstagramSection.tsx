import velaMassagem from "../assets/products/vela-massagem.jpg";
import homeSpray from "../assets/products/home-spray.jpg";
import velaPoteWhite from "../assets/products/vela-pote-white.jpg";
import perfumeAutomotivo from "../assets/products/perfume-automotivo.jpg";
import velasReligiosas from "../assets/products/velas-religiosas.jpg";
import kitBandeja from "../assets/products/kit-bandeja.jpg";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/whatsapp";

const tiles = [
  velaMassagem,
  homeSpray,
  velaPoteWhite,
  perfumeAutomotivo,
  velasReligiosas,
  kitBandeja,
];

export function InstagramSection() {
  return (
    <section className="py-24 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="text-xs tracking-[0.35em] uppercase text-gold">
          Instagram
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-coffee mt-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
            {INSTAGRAM_HANDLE}
          </a>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-1.5">
        {tiles.map((src, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="aspect-square overflow-hidden block group"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

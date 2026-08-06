interface BrandMarkProps {
  size?: "sm" | "lg";
  light?: boolean;
}

export function BrandMark({ size = "sm", light = false }: BrandMarkProps) {
  const nameSize = size === "lg" ? "text-4xl sm:text-5xl" : "text-xl";
  const monoSize = size === "lg" ? "text-lg" : "text-xs";
  const tint = light ? "text-cream" : "text-coffee";
  const tintMuted = light ? "text-cream/70" : "text-gold";

  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span
        className={`font-serif tracking-[0.15em] ${monoSize} ${tintMuted} mb-0.5`}
      >
        GO
      </span>
      <span className={`font-serif italic ${nameSize} ${tint}`}>
        Grace Oliveira
      </span>
      {size === "lg" && (
        <span
          className={`mt-2 text-xs tracking-[0.35em] ${tintMuted} uppercase`}
        >
          Atelier Olfativo
        </span>
      )}
    </span>
  );
}

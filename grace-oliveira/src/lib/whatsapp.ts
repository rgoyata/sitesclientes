export const WHATSAPP_NUMBER = "5535997242370";
export const WHATSAPP_DISPLAY = "(35) 99724-2370";
export const INSTAGRAM_HANDLE = "@graceoliveira.atelier";
export const INSTAGRAM_URL = "https://instagram.com/graceoliveira.atelier";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waGeneral = waLink(
  "Olá! Vim pelo site da Grace Oliveira Atelier Olfativo e gostaria de saber mais.",
);

export function waProduct(name: string): string {
  return waLink(
    `Olá! Vim pelo site da Grace Oliveira Atelier Olfativo e tenho interesse em: ${name}.`,
  );
}

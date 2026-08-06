import { waGeneral } from "../lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waGeneral}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-coffee text-cream shadow-lg shadow-coffee/30 hover:bg-gold transition-colors"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M4 20l1.2-3.6A8 8 0 1 1 8.6 19L4 20Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

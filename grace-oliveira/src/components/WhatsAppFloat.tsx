import { waGeneral } from "../lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waGeneral}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-coffee text-cream shadow-lg shadow-coffee/30 hover:bg-gold transition-colors"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M4 20l1.2-3.6A8 8 0 1 1 8.6 19L4 20Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

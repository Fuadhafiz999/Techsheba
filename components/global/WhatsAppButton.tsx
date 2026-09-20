import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/data/mockData";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-6 bottom-6 z-40 hidden md:block"
    >
      <span className="sr-only">Chat with Techsheba on WhatsApp</span>
      <span className="relative grid size-13 place-items-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp"
        />
        <span className="relative grid size-13 place-items-center rounded-full bg-whatsapp shadow-[0_8px_30px] shadow-whatsapp/45 transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="size-6 text-white" fill="white" />
        </span>
      </span>
      <span className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium whitespace-nowrap text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}

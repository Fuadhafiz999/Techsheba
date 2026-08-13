import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";

import { siteConfig } from "@/data/mockData";

export function StickyMobileBar() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 divide-x divide-border pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex h-14 flex-col items-center justify-center gap-0.5 text-[0.65rem] font-medium text-muted-foreground"
        >
          <Phone className="size-4 text-brand-accent" />
          Call now
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-col items-center justify-center gap-0.5 text-[0.65rem] font-medium text-muted-foreground"
        >
          <MessageCircle className="size-4 text-[#25D366]" fill="#25D366" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex h-14 flex-col items-center justify-center gap-0.5 bg-brand-500 text-[0.65rem] font-semibold text-white"
        >
          <Send className="size-4" />
          Get a quote
        </Link>
      </div>
    </div>
  );
}

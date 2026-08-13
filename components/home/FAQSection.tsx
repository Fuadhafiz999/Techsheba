import { MessageCircle } from "lucide-react";

import { faqs, siteConfig } from "@/data/mockData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border bg-card/40 py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Questions,{" "}
                <span className="text-gradient">answered honestly</span>
              </>
            }
            description="Everything clients usually ask before starting. If yours isn't here, we answer within 24 hours."
          />
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <CTAButton href="/contact" size="md">
                Ask us anything
              </CTAButton>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Techsheba! I have a quick question."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4 text-[#25D366]" />
                Or chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

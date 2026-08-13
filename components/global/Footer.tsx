import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { navLinks, services, siteConfig } from "@/data/mockData";
import { Logo } from "@/components/global/Logo";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

const socials = [
  { label: "Facebook", href: siteConfig.socials.facebook, icon: FaFacebookF },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: FaLinkedinIn },
  { label: "Dribbble", href: siteConfig.socials.dribbble, icon: FaDribbble },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card pb-24 md:pb-0">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} from Dhaka, Bangladesh — building
              high-performance digital products and campaigns for brands
              worldwide.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-border bg-white/5 text-muted-foreground transition-all hover:border-brand-500/40 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-widest text-foreground uppercase">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-widest text-foreground uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold tracking-widest text-foreground uppercase">
              Stay in the loop
            </h3>
            <p className="text-sm text-muted-foreground">
              One useful email a month on growth, design and tech. No spam,
              ever.
            </p>
            <NewsletterForm />
            <ul className="mt-2 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.legalName} All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with <span className="text-brand-accent">♥</span> in Dhaka,
            Bangladesh 🇧🇩 · Developed by{" "}
            <a
              href="https://ahshanhafizfuad.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:text-brand-accent hover:underline"
            >
              Ahshan Hafiz Fuad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

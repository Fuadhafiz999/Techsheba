import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost" | "white";
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  rel?: string;
};

const sizeStyles = {
  sm: "h-9 rounded-full px-5 text-xs",
  md: "h-11 rounded-full px-6 text-sm",
  lg: "h-12 rounded-full px-8 text-[0.95rem]",
};

const variantStyles = {
  default:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_8px_32px_rgba(124,92,255,0.35)] hover:shadow-[0_12px_48px_rgba(124,92,255,0.5)]",
  outline:
    "border border-border bg-white/5 text-foreground hover:border-brand-500/50 hover:bg-white/10",
  ghost: "bg-transparent text-muted-foreground hover:text-foreground",
  white: "bg-white text-slate-900 hover:bg-brand-100",
};

export function CTAButton({
  href,
  children,
  className,
  size = "md",
  variant = "default",
  type = "button",
  onClick,
  target,
  rel,
}: CTAButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Button asChild className={classes} data-slot="cta-button">
        <Link href={href} target={target} rel={rel}>
          {children}
        </Link>
      </Button>
    );
  }

  return (
    <Button type={type} onClick={onClick} className={classes}>
      {children}
    </Button>
  );
}

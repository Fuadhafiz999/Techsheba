import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
};

export function Marquee({
  children,
  className,
  speed = 36,
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={cn("relative flex w-full overflow-hidden", className)}>
      <div
        className="flex w-max shrink-0 animate-marquee items-center"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

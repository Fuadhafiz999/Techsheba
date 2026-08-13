import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import type { BlogPost } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card outline-none transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_24px_80px_rgba(124,92,255,0.14)] focus-visible:ring-2 focus-visible:ring-brand-500/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <Badge
          variant="outline"
          className="absolute top-3 left-3 border-white/20 bg-black/40 text-[0.65rem] font-semibold tracking-wider text-white uppercase backdrop-blur-sm"
        >
          {post.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readingTime} min read
          </span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3 className="line-clamp-2 font-display text-lg leading-snug font-bold transition-colors group-hover:text-brand-accent">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-cyan text-[0.6rem] font-bold text-white">
              {initials}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.author.name}
            </span>
          </span>
          <span className="grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-brand-500/50 group-hover:text-brand-accent">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

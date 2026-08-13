import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";

import { blogPosts, getBlogPost, siteConfig } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { BlogCard, formatDate } from "@/components/blog/BlogCard";
import { CTASection } from "@/components/home/CTASection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover, width: 1200, height: 900 }],
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aScore = a.category === post.category ? 1 : 0;
      const bScore = b.category === post.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, 3);

  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `https://${siteConfig.domain}/icon.svg`,
      },
    },
    keywords: post.tags.join(", "),
    mainEntityOfPage: `https://${siteConfig.domain}/blog/${post.slug}`,
  };

  return (
    <>
      <article>
        {/* Header */}
        <header className="relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-36">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-brand-accent/15 blur-[130px]" />
          </div>
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                All articles
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="rounded-full border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-brand-accent uppercase"
                >
                  {post.category}
                </Badge>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" />
                  {post.readingTime} min read
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.9rem]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-cyan text-xs font-bold text-white">
                  {initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.author.role} · Techsheba
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </header>

        {/* Cover */}
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
              <Image
                src={post.cover}
                alt={post.title}
                width={1600}
                height={1000}
                priority
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Body */}
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
          <Reveal>
            <ArticleBody blocks={post.content} />
          </Reveal>

          {/* Tags */}
          <Reveal className="mt-10">
            <div className="flex flex-wrap items-center gap-2 border-t border-border pt-6">
              <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Author box */}
          <Reveal className="mt-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-5 sm:p-7">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-cyan font-display text-lg font-bold text-white">
                {initials}
              </span>
              <div>
                <p className="font-display text-base font-bold">
                  Written by {post.author.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {post.author.role} at Techsheba. We build high-performance
                  websites, apps and campaigns for ambitious brands worldwide.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related posts */}
      <section className="border-t border-border bg-card/40 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Keep reading
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((post, i) => (
              <Reveal key={post.slug} delay={0.06 * i}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-accent/30 bg-gradient-to-br from-brand-700/25 to-accent-cyan/10 px-6 py-12 text-center sm:px-12">
              <div
                aria-hidden="true"
                className="absolute -top-20 left-1/2 h-56 w-[480px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[110px]"
              />
              <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-4">
                <h2 className="font-display text-2xl font-bold text-balance sm:text-3xl">
                  Get the next article in your inbox
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  One useful email a month. Join 2,000+ founders and marketers.
                </p>
                <NewsletterForm className="mt-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

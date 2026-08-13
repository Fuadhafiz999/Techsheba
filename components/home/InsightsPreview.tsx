import { ArrowRight } from "lucide-react";

import { blogPosts } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { BlogCard } from "@/components/blog/BlogCard";

export function InsightsPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="border-y border-border bg-card/40 py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights & resources"
            title={
              <>
                Growth advice we&apos;d give{" "}
                <span className="text-gradient">our own clients</span>
              </>
            }
            description="Practical guides on web performance, conversion, pricing and more — no fluff, no jargon."
          />
          <Reveal delay={0.15} className="shrink-0">
            <CTAButton href="/blog" variant="outline">
              View all articles
              <ArrowRight className="size-4" />
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={0.06 * i}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

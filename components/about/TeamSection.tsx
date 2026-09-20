import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { activeTeamMembers } from "@/data/mockData";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";

export function TeamSection() {
  const preview = activeTeamMembers.slice(0, 4);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Meet our team"
          title={
            <>
              The people behind{" "}
              <span className="text-brand-accent">Techsheba</span>
            </>
          }
          description="A glimpse of the designers, engineers, editors and strategists who sweat the details and stay for the results."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((member, i) => (
            <Reveal key={member.name} delay={0.06 * i}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Techsheba`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-5">
                  <h3 className="font-display text-lg font-bold">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-accent">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <CTAButton href="/team" variant="outline">
            Meet the full team
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
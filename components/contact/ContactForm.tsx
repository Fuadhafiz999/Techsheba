"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CircleCheckBig, LoaderCircle, Send } from "lucide-react";

import { services, siteConfig } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Select the service you need"),
  budget: z.string().min(1, "Select a budget range"),
  message: z
    .string()
    .min(10, "Tell us a little more (at least 10 characters)"),
});

type ContactValues = z.infer<typeof contactSchema>;

const inputClasses =
  "h-11 rounded-xl border-input bg-white/[0.03] px-4 text-sm focus-visible:ring-brand-500/40";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    const lines = [
      `Hi Techsheba! I'm ${values.name}.`,
      values.phone ? `Phone: ${values.phone}` : "",
      `Service: ${values.service}`,
      `Budget: ${values.budget}`,
      "",
      values.message,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
          <CircleCheckBig className="size-7" />
        </span>
        <h3 className="font-display text-xl font-bold">Message ready! 🎉</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We&apos;ve opened WhatsApp with your brief pre-filled — hit send and
          our team will reply within a few hours (max 24h).
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm font-medium text-brand-accent hover:text-brand-accent"
        >
          Prefer email? {siteConfig.email}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Full name <span className="text-brand-accent">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            className={cn(inputClasses, errors.name && "border-destructive")}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Work email <span className="text-brand-accent">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            className={cn(inputClasses, errors.email && "border-destructive")}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+880 1XXX-XXXXXX"
            className={inputClasses}
            {...register("phone")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="service" className="text-sm font-medium">
            Service needed <span className="text-brand-accent">*</span>
          </Label>
          <select
            id="service"
            aria-invalid={!!errors.service}
            className={cn(
              inputClasses,
              "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2398a2b3%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_0.9rem_center] bg-no-repeat pr-10",
              errors.service && "border-destructive"
            )}
            {...register("service")}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title} className="bg-card">
                {s.title}
              </option>
            ))}
            <option value="Something else" className="bg-card">
              Something else
            </option>
          </select>
          {errors.service && (
            <p className="text-xs text-destructive">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="budget" className="text-sm font-medium">
          Estimated budget <span className="text-brand-accent">*</span>
        </Label>
        <select
          id="budget"
          aria-invalid={!!errors.budget}
          className={cn(
            inputClasses,
            "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2398a2b3%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_0.9rem_center] bg-no-repeat pr-10",
            errors.budget && "border-destructive"
          )}
          {...register("budget")}
        >
          <option value="" disabled>
            Select a range…
          </option>
          {budgetOptions.map((b) => (
            <option key={b} value={b} className="bg-card">
              {b}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p className="text-xs text-destructive">{errors.budget.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Tell us about your project <span className="text-brand-accent">*</span>
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Goals, timeline, anything you've tried before…"
          aria-invalid={!!errors.message}
          className={cn(
            "min-h-32 rounded-xl border-input bg-white/[0.03] px-4 py-3 text-sm focus-visible:ring-brand-500/40",
            errors.message && "border-destructive"
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-8 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(124,92,255,0.35)] transition-all duration-300 hover:bg-brand-600 disabled:opacity-60"
      >
        {isSubmitting ? (
          <LoaderCircle className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        Send message — we reply within 24h
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Submitting opens WhatsApp with your brief pre-filled — no account
        needed. Prefer email?{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-brand-accent hover:text-brand-accent"
        >
          {siteConfig.email}
        </a>
      </p>
    </form>
  );
}

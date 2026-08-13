"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import { px, videos } from "@/data/mockData";

type ShowreelModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ShowreelModal({ open, onOpenChange }: ShowreelModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[calc(100%-1rem)] border-border bg-black p-0 sm:max-w-4xl"
        showCloseButton
      >
        <DialogTitle className="sr-only">Techsheba showreel</DialogTitle>
        <DialogDescription className="sr-only">
          A short reel of our recent work across web, app, brand and motion.
        </DialogDescription>
        <video
          src={videos.showreel}
          poster={px(3184292, 1600)}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full rounded-xl object-cover"
        />
      </DialogContent>
    </Dialog>
  );
}

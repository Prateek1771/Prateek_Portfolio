"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CollectionCard({
  images,
  title,
  description,
}: {
  images: string[];
  title: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group w-full space-y-2 text-left">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={title}
              width={240}
              height={160}
              className="w-full rounded-md border border-border object-cover transition-opacity group-hover:opacity-90"
            />
          ) : (
            <span className="block h-40 w-full rounded-md border border-border bg-card" />
          )}
          <div className="space-y-1">
            <p className="font-bold group-hover:underline">{title}</p>
            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </button>
      </DialogTrigger>

      <DialogContent showClose className="max-w-3xl">
        <DialogTitle>{title}</DialogTitle>
        <div className="mt-6 max-h-[60vh] overflow-y-auto">
          <div className="grid gap-4 sm:grid-cols-2">
            {images.map((image, idx) => (
              <Image
                key={idx}
                src={image}
                alt={`${title} image ${idx + 1}`}
                width={400}
                height={300}
                className="rounded-md border border-border object-cover"
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

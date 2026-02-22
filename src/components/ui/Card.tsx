import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={cn(
        "rounded-editorial border border-border/80 bg-surface/85 p-6 shadow-editorial backdrop-blur-sm transition duration-300 hover:border-accent/45 hover:bg-elevated",
        className,
      )}
      {...props}
    />
  );
}

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface text-text-secondary",
        accent: "border-accent/40 bg-accent-soft/15 text-accent-strong",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

type BadgeProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

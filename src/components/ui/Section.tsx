import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function Section({
  className,
  title,
  eyebrow,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("space-y-8", className)} {...props}>
      {(eyebrow || title || description) && (
        <header className="max-w-3xl space-y-3">
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-strong/90">{eyebrow}</p>
          ) : null}
          {title ? <h2 className="text-balance text-3xl font-semibold text-text-primary md:text-4xl">{title}</h2> : null}
          {description ? <p className="text-pretty text-base text-text-secondary md:text-lg">{description}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}

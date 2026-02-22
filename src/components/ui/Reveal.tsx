import type { PropsWithChildren } from "react";
import { m, useReducedMotion } from "framer-motion";

interface RevealProps extends PropsWithChildren {
  delay?: number;
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </m.div>
  );
}

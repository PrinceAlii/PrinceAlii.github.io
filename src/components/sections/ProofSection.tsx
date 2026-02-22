import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { credibilityStats } from "@/data/profile";

export function ProofSection() {
  return (
    <Section
      id="proof"
      eyebrow="Proof"
      title="Signals that matter to hiring teams."
      description="A concise snapshot of practical experience, technical focus, and delivery context."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {credibilityStats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <Card className="h-full space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-tertiary">{item.label}</p>
              <p className="text-2xl font-semibold text-text-primary">{item.value}</p>
              <p className="text-sm text-text-secondary">{item.note}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

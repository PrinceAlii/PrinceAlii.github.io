import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Cross-domain experience with operational discipline."
      description="I bring technical delivery and frontline service rigor together, which improves reliability and communication."
    >
      <div className="grid gap-4">
        {experiences.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}`} delay={index * 0.06}>
            <Card className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{item.role}</h3>
                  <p className="text-sm text-text-secondary">{item.company}</p>
                </div>
                <Badge variant="accent">{item.dates}</Badge>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-accent-strong" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((record, index) => (
          <Reveal key={record.qualification} delay={index * 0.08}>
            <Card className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-tertiary">Education</p>
              <h3 className="text-lg font-semibold text-text-primary">{record.qualification}</h3>
              <p className="text-sm text-text-secondary">{record.institution}</p>
              <p className="text-sm text-text-secondary">{record.graduation}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

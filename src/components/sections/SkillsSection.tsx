import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types/site";

const categories: Array<SkillCategory | "All"> = [
  "All",
  "Cloud",
  "Automation",
  "Frontend",
  "Reliability",
  "Data",
  "Delivery",
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");

  const filtered = useMemo(
    () => skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory),
    [activeCategory],
  );

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Skills-first profile with real delivery context."
      description="Filter by domain to see where I currently deliver the most value."
    >
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "primary" : "secondary"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((skill, index) => (
          <Reveal key={skill.id} delay={index * 0.05}>
            <Card className="h-full space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-text-primary">{skill.name}</h3>
                <Badge variant="accent">{skill.level}</Badge>
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-text-tertiary">{skill.category}</p>
              <p className="text-sm text-text-secondary">{skill.proof}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

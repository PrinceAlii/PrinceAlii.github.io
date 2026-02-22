import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { agentRoles } from "@/data/agents";

const agentViews = [
  { id: "all", label: "All Agents" },
  { id: "strategy", label: "Strategy" },
  { id: "build", label: "Build" },
  { id: "quality", label: "Quality" },
] as const;

const strategyIds = new Set(["repo-auditor", "ux-strategist", "visual-director"]);
const buildIds = new Set(["design-systems", "frontend-engineer", "motion-designer"]);
const qualityIds = new Set(["performance-engineer", "accessibility-lead", "qa-reviewer"]);

export function AgentsSection() {
  const [activeView, setActiveView] = useState<(typeof agentViews)[number]["id"]>("all");

  const filteredAgents = useMemo(() => {
    if (activeView === "all") return agentRoles;
    if (activeView === "strategy") return agentRoles.filter((role) => strategyIds.has(role.id));
    if (activeView === "build") return agentRoles.filter((role) => buildIds.has(role.id));
    return agentRoles.filter((role) => qualityIds.has(role.id));
  }, [activeView]);

  return (
    <Section
      id="agents"
      eyebrow="Agents"
      title="How I structure execution from audit to release."
      description="This is the workflow model I use to maintain quality while moving fast."
    >
      <div className="flex flex-wrap gap-2">
        {agentViews.map((view) => (
          <Button
            key={view.id}
            variant={activeView === view.id ? "primary" : "secondary"}
            size="sm"
            onClick={() => setActiveView(view.id)}
            aria-pressed={activeView === view.id}
          >
            {view.label}
          </Button>
        ))}
      </div>

      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredAgents.map((role, index) => (
          <li key={role.id}>
            <Reveal delay={index * 0.05}>
              <Card className="flex h-full flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-tertiary">
                  Step {index + 1}
                </p>
                <h3 className="text-lg font-semibold text-text-primary">{role.name}</h3>
                <p className="text-sm text-text-secondary">{role.focus}</p>
                <p className="text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">Deliverable:</span> {role.deliverable}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {role.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

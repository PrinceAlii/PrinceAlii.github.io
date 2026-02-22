import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { agentRoles } from "@/data/agents";

const allSkillOptions = [{ id: "all", name: "All Skills" }, ...skills.map((skill) => ({ id: skill.id, name: skill.name }))];
const allAgentOptions = [{ id: "all", name: "All Agents" }, ...agentRoles.map((role) => ({ id: role.id, name: role.name }))];

function resolveSkill(skillId: string) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

function resolveAgent(agentId: string) {
  return agentRoles.find((role) => role.id === agentId)?.name ?? agentId;
}

export function ProjectsPage() {
  const [activeSkill, setActiveSkill] = useState("all");
  const [activeAgent, setActiveAgent] = useState("all");

  useEffect(() => {
    document.title = "Projects | Ali Bonagdaran";
  }, []);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const skillMatch = activeSkill === "all" || project.skills.includes(activeSkill);
        const agentMatch = activeAgent === "all" || project.agents.includes(activeAgent);
        return skillMatch && agentMatch;
      }),
    [activeSkill, activeAgent],
  );

  return (
    <main id="main" className="py-10 sm:py-14">
      <Container>
        <Section
          eyebrow="Projects"
          title="Work indexed by skills and agent roles."
          description="Use these filters to inspect exactly how each project maps to capabilities and delivery roles."
        >
          <div className="grid gap-4 rounded-editorial border border-border/80 bg-surface/75 p-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-text-secondary">
              Skill filter
              <select
                value={activeSkill}
                onChange={(event) => setActiveSkill(event.target.value)}
                className="w-full rounded-xl border border-border bg-canvas px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {allSkillOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2 text-sm text-text-secondary">
              Agent filter
              <select
                value={activeAgent}
                onChange={(event) => setActiveAgent(event.target.value)}
                className="w-full rounded-xl border border-border bg-canvas px-3 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {allAgentOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card key={project.slug} className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-text-primary">{project.title}</h2>
                  <Badge variant="accent">{project.status}</Badge>
                </div>
                <p className="text-sm text-text-secondary">{project.summary}</p>
                <p className="text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">Outcome:</span> {project.outcome}
                </p>
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-tertiary">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill}>{resolveSkill(skill)}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-tertiary">Agents</p>
                  <div className="flex flex-wrap gap-2">
                    {project.agents.map((agent) => (
                      <Badge key={agent}>{resolveAgent(agent)}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link to={`/projects/${project.slug}`} className={buttonVariants({ variant: "secondary", size: "sm" })}>
                    View Case Study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  {project.links?.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                      Live <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  {project.links?.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                      GitHub <Github className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <Card className="text-center">
              <p className="text-sm text-text-secondary">
                No projects match those filters. Reset to <strong>All Skills</strong> and <strong>All Agents</strong>.
              </p>
            </Card>
          ) : null}
        </Section>
      </Container>
    </main>
  );
}

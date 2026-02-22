import { useEffect } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { agentRoles } from "@/data/agents";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

function resolveSkill(skillId: string) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

function resolveAgent(agentId: string) {
  return agentRoles.find((role) => role.id === agentId)?.name ?? agentId;
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = project ? `${project.title} | Ali Bonagdaran` : "Project Not Found | Ali Bonagdaran";
  }, [project]);

  if (!project) {
    return (
      <main id="main" className="py-14">
        <Container>
          <Card className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-tertiary">404</p>
            <h1 className="text-2xl font-semibold text-text-primary">Project not found</h1>
            <p className="text-sm text-text-secondary">
              The case study you requested is not available. Use the projects index instead.
            </p>
            <Link
              to="/projects"
              className={`${buttonVariants({ variant: "secondary" })} mx-auto`}
            >
              Back to Projects
            </Link>
          </Card>
        </Container>
      </main>
    );
  }

  return (
    <main id="main" className="py-10 sm:py-14">
      <Container className="max-w-4xl space-y-8">
        <Link to="/projects" className="inline-flex">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Button>
        </Link>

        <Section
          eyebrow={project.period}
          title={project.title}
          description={project.description}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{project.status}</Badge>
            <Badge>{project.period}</Badge>
          </div>
          <Card className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-tertiary">Outcome</p>
            <p className="text-base text-text-secondary">{project.outcome}</p>
          </Card>
        </Section>

        <Section title="Highlights">
          <ul className="space-y-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-text-secondary">
                <span aria-hidden className="mt-[0.38rem] h-1.5 w-1.5 rounded-full bg-accent-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skill + Agent Mapping">
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="space-y-3">
              <h2 className="text-lg font-semibold text-text-primary">Skills Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill}>{resolveSkill(skill)}</Badge>
                ))}
              </div>
            </Card>
            <Card className="space-y-3">
              <h2 className="text-lg font-semibold text-text-primary">Agent Roles Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.agents.map((agent) => (
                  <Badge key={agent}>{resolveAgent(agent)}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {project.links ? (
          <Section title="Links">
            <div className="flex flex-wrap gap-2">
              {project.links.live ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Live Site <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  GitHub <Github className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </Section>
        ) : null}
      </Container>
    </main>
  );
}

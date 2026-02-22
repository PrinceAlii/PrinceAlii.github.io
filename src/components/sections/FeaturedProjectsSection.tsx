import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/Badge";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { featuredProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { cn } from "@/lib/cn";

function skillName(skillId: string) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function FeaturedProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Project stories tied to skill and impact."
      description="Each project card maps back to the skills and specialist agents used in delivery."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.1}>
            <Card className="group h-full space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                <Badge variant="accent">{project.status}</Badge>
              </div>
              <p className="text-sm text-text-secondary">{project.summary}</p>
              <p className="rounded-2xl border border-border/70 bg-canvas/40 px-4 py-3 text-sm text-text-secondary">
                <span className="font-medium text-text-primary">Outcome:</span> {project.outcome}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 4).map((skillId) => (
                  <Badge key={skillId}>{skillName(skillId)}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  to={`/projects/${project.slug}`}
                  className={buttonVariants({ variant: "secondary", size: "sm" })}
                >
                  Case Study <ArrowRight className="h-3.5 w-3.5" />
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
          </Reveal>
        ))}
      </div>
      <Link
        to="/projects"
        className={cn(buttonVariants({ variant: "secondary" }), "w-fit")}
      >
        Browse All Projects <ArrowRight className="h-4 w-4" />
      </Link>
    </Section>
  );
}

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build reliable systems with clear outcomes."
      description="I am open to conversations about graduate engineering opportunities, platform teams, and cloud-focused delivery work."
      className="pb-20"
    >
      <Card className="space-y-5">
        <p className="text-lg font-medium text-text-primary">{profile.email}</p>
        <div className="flex flex-wrap gap-2">
          <a href={`mailto:${profile.email}`} className={buttonVariants({ variant: "primary" })}>
            Email <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            GitHub <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            LinkedIn <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm text-text-tertiary">
          Prefer asynchronous contact. Include context and role details for the fastest response.
          <ArrowUpRight className="ml-2 inline h-4 w-4" />
        </p>
      </Card>
    </Section>
  );
}

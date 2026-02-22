import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
import { useRouteSectionScroll } from "@/hooks/useRouteSectionScroll";

const footerSectionLinks = [
  { id: "skills", label: "Skills" },
  { id: "agents", label: "Agents" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const { scrollToSection } = useRouteSectionScroll({ targetPath: "/" });

  return (
    <footer className="border-t border-border/70 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <p className="text-sm text-text-secondary">Built by {profile.name}</p>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-tertiary">
              {new Date().getFullYear()} Editorial Engineer Portfolio
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-1" aria-label="Footer section links">
            {footerSectionLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.id)}
                className="rounded-full"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-4 self-end lg:self-auto">
            <a
              className="text-text-secondary transition hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href={`mailto:${profile.email}`}
              aria-label="Email Ali Bonagdaran"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              className="text-text-secondary transition hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Ali Bonagdaran on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              className="text-text-secondary transition hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Ali Bonagdaran on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

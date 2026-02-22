import { m } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { useRouteSectionScroll } from "@/hooks/useRouteSectionScroll";
import { cn } from "@/lib/cn";

interface NavProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const topLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
];

const homeSectionLinks = [
  { id: "skills", label: "Skills" },
  { id: "agents", label: "Agents" },
  { id: "contact", label: "Contact" },
];

export function Nav({ isDark, onToggleTheme }: NavProps) {
  const { scrollToSection, isOnTargetPath } = useRouteSectionScroll({ targetPath: "/" });

  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 rounded-full border border-border/80 bg-surface/80 px-2 py-2 shadow-editorial backdrop-blur-md">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {topLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <m.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-accent/30 bg-accent-soft/10"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    ) : null}
                    {link.label}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {isOnTargetPath ? (
            <nav className="hidden items-center gap-1 sm:flex" aria-label="Section">
              {homeSectionLinks.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className="rounded-full"
                >
                  {section.label}
                </Button>
              ))}
            </nav>
          ) : null}

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="w-10 rounded-full px-0"
            >
              {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

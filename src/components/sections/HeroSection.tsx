import { m } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

import resumeFile from "@/assets/resume-website.pdf";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

export function HeroSection() {
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-12 sm:pt-16">
      <Container className="relative">
        <div className="absolute -left-20 top-8 -z-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute right-0 top-24 -z-10 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl sm:h-72 sm:w-72" />

        <div className="grid items-end gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-7">
            <m.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-accent-strong"
            >
              Editorial Engineer
            </m.p>
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              {profile.name}. {profile.headline}.
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="max-w-2xl text-pretty text-lg text-text-secondary sm:text-xl"
            >
              {profile.quickPitch}
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-wrap gap-3"
            >
              <Button onClick={() => navigate("/projects")}>
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" onClick={() => handleScroll("contact")}>
                Contact
              </Button>
              <a
                href={resumeFile}
                download
                className={cn(buttonVariants({ variant: "ghost" }), "h-11")}
              >
                Resume <Download className="h-4 w-4" />
              </a>
            </m.div>
          </div>

          <m.aside
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[1.5rem] border border-border/70 bg-surface/85 p-6 shadow-editorial backdrop-blur-sm"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-2xl border border-border bg-[linear-gradient(145deg,_hsl(var(--accent)/0.24),_hsl(var(--canvas)))] font-mono text-xl font-semibold text-text-primary">
                AB
              </div>
              <div>
                <h2 className="text-lg font-semibold text-text-primary">{profile.shortName}</h2>
                <p className="text-sm text-text-secondary">{profile.location}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">{profile.summary}</p>
          </m.aside>
        </div>
      </Container>
    </section>
  );
}

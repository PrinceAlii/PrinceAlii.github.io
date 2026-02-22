import { useEffect } from "react";

import { AgentsSection } from "@/components/sections/AgentsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Container } from "@/components/layout/Container";

export function HomePage() {
  useEffect(() => {
    document.title = "Ali Bonagdaran | Editorial Engineer";
  }, []);

  return (
    <main id="main" className="pb-12">
      <div id="main-content">
        <HeroSection />
        <Container className="space-y-20">
          <ProofSection />
          <FeaturedProjectsSection />
          <SkillsSection />
          <AgentsSection />
          <ExperienceSection />
          <ContactSection />
        </Container>
      </div>
    </main>
  );
}

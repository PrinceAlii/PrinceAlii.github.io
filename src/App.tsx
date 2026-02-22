import { LazyMotion, domAnimation } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { useTheme } from "@/hooks/useTheme";
import { HomePage } from "@/pages/HomePage";

const ProjectsPage = lazy(async () => {
  const module = await import("@/pages/ProjectsPage");
  return { default: module.ProjectsPage };
});

const ProjectDetailPage = lazy(async () => {
  const module = await import("@/pages/ProjectDetailPage");
  return { default: module.ProjectDetailPage };
});

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen bg-canvas text-text-primary">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(ellipse_at_top,_hsl(var(--accent)/0.15),_transparent_58%)]" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-slate-950"
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <Nav isDark={isDark} onToggleTheme={toggleTheme} />
        <Suspense fallback={<main id="main" className="px-6 py-20 text-text-secondary">Loading...</main>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </LazyMotion>
  );
}

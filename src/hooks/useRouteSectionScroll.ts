import { useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface UseRouteSectionScrollOptions {
  targetPath?: string;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
}

function scrollWhenAvailable(
  id: string,
  behavior: ScrollBehavior,
  block: ScrollLogicalPosition,
  remainingFrames = 12,
): void {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior, block });
    return;
  }
  if (remainingFrames <= 0) {
    return;
  }
  window.requestAnimationFrame(() => {
    scrollWhenAvailable(id, behavior, block, remainingFrames - 1);
  });
}

export function useRouteSectionScroll({
  targetPath = "/",
  behavior = "smooth",
  block = "start",
}: UseRouteSectionScrollOptions = {}) {
  const location = useLocation();
  const navigate = useNavigate();
  const pendingSectionIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (location.pathname !== targetPath || !pendingSectionIdRef.current) {
      return;
    }
    const pendingId = pendingSectionIdRef.current;
    pendingSectionIdRef.current = null;
    scrollWhenAvailable(pendingId, behavior, block);
  }, [behavior, block, location.pathname, targetPath]);

  const scrollToSection = useCallback(
    (id: string) => {
      if (location.pathname !== targetPath) {
        pendingSectionIdRef.current = id;
        navigate(targetPath);
        return;
      }
      scrollWhenAvailable(id, behavior, block);
    },
    [behavior, block, location.pathname, navigate, targetPath],
  );

  return {
    scrollToSection,
    isOnTargetPath: location.pathname === targetPath,
  };
}

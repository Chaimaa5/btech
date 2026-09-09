import { useEffect } from "react";

/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view.
 * Pass values that change the rendered tree (e.g. the route) so the observer
 * picks up newly mounted nodes.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Only now hide the elements: without JS they must stay readable.
    document.documentElement.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
    // Re-scans when the rendered route changes.
  }, deps);
}

import { useEffect } from "react";

// A single passive scroll listener, throttled by requestAnimationFrame.
// No animation library, no video downloads, and reduced-motion aware.
export default function useCinematicScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const vh = Math.max(1, window.innerHeight);
      root.style.setProperty("--hero-scroll", String(Math.min(y / vh, 1)));
      root.style.setProperty("--hero-shift", Math.min(y * 0.18, 145) + "px");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      root.style.removeProperty("--hero-scroll");
      root.style.removeProperty("--hero-shift");
    };
  }, []);
}

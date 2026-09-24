"use client";

import { useLayoutEffect } from "react";

const THRESHOLDS = [0, 0.1, 0.2, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.65, 0.8, 1];

export function setNight(on: boolean) {
  document.documentElement.classList.toggle("night", on);
  document.body.classList.toggle("after-hero", on);
}

export function clearNight() {
  document.documentElement.classList.remove("night");
  document.body.classList.remove("after-hero");
}

/** Morph the homepage into dark mode once #hero is mostly out of view. */
export function useNightFromHero() {
  useLayoutEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      clearNight();
      return;
    }

    let night = document.documentElement.classList.contains("night");

    const apply = (ratio: number, snap = false) => {
      const next = snap
        ? ratio < 0.45
        : night
          ? ratio < 0.52
          : ratio < 0.38;
      if (next === night) return;
      night = next;
      setNight(next);
    };

    const observer = new IntersectionObserver(
      ([entry]) => apply(entry.intersectionRatio),
      { threshold: THRESHOLDS },
    );

    observer.observe(hero);
    const box = hero.getBoundingClientRect();
    const visible = Math.min(box.bottom, innerHeight) - Math.max(box.top, 0);
    apply(Math.max(0, visible) / Math.max(box.height, 1), true);

    return () => {
      observer.disconnect();
      clearNight();
    };
  }, []);
}

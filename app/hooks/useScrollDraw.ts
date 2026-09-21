"use client";

import { useLayoutEffect, useState, type RefObject } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

type Mode = "pin" | "enter" | "trigger";

/** 1 = original speed. 0.7 = 70% speed (longer durations, longer pin). */
export const MOTION_SPEED = 0.7;

function readProgress(el: HTMLElement, mode: Mode) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;

  if (mode === "pin") {
    const range = Math.max(1, rect.height - vh);
    return -rect.top / range;
  }

  if (mode === "trigger") {
    const onScreen = rect.bottom > vh * 0.04 && rect.top < vh * 0.98;
    return onScreen ? 1 : 0;
  }

  const start = vh * 0.92;
  const end = vh * 0.42;
  return (start - rect.top) / Math.max(1, start - end);
}

export function useScrollDraw(
  ref: RefObject<HTMLElement | null>,
  mode: Mode = "enter",
  duration = 1600,
) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(reduced ? 1 : 0);

  useLayoutEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let lastTs = 0;
    let current = 0;
    let running = false;

    const apply = (value: number) => {
      const next = Math.min(1, Math.max(0, value));
      if (Math.abs(next - current) < 0.002) {
        current = next;
        return false;
      }
      current = next;
      setProgress(next);
      return true;
    };

    const measure = () => readProgress(el, mode);

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;
      const target = measure();

      if (mode === "trigger") {
        const scaled = duration / MOTION_SPEED;
        const step = Math.min(
          0.05 * MOTION_SPEED,
          dt / Math.max(240 / MOTION_SPEED, scaled),
        );
        const next =
          current < target
            ? Math.min(target, current + step)
            : Math.max(target, current - step);
        apply(next);
        if (Math.abs(next - target) > 0.002) {
          frame = requestAnimationFrame(tick);
        } else {
          running = false;
          lastTs = 0;
        }
        return;
      }

      apply(target);
      running = false;
      lastTs = 0;
    };

    const kick = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (mode === "trigger") {
        kick();
        return;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        apply(measure());
        running = false;
      });
    };

    if (mode === "trigger") {
      apply(0);
      kick();
    } else {
      apply(measure());
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, mode, reduced, duration]);

  return reduced ? 1 : progress;
}

export function spanProgress(global: number, from: number, to: number) {
  if (to <= from) return global >= to ? 1 : 0;
  return Math.min(1, Math.max(0, (global - from) / (to - from)));
}

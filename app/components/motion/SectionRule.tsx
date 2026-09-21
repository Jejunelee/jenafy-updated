"use client";

import { useRef } from "react";
import { useScrollDraw } from "@/app/hooks/useScrollDraw";

export default function SectionRule({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollDraw(ref, "enter");

  return (
    <div
      ref={ref}
      className={`section-rule section-rule-${tone}`}
      aria-hidden
    >
      <svg viewBox="0 0 100 1" preserveAspectRatio="none">
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - progress}
        />
      </svg>
    </div>
  );
}

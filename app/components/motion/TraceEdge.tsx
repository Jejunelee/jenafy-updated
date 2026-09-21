"use client";

import { useRef } from "react";
import { useScrollDraw } from "@/app/hooks/useScrollDraw";

export default function TraceEdge({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const progress = useScrollDraw(ref, "enter");

  return (
    <span ref={ref} className={`trace-edge trace-edge-${tone}`} aria-hidden>
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
    </span>
  );
}

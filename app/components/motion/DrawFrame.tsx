"use client";

import { useRef, type ReactNode } from "react";
import { spanProgress, useScrollDraw } from "@/app/hooks/useScrollDraw";

export default function DrawFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollDraw(ref, "enter");
  const border = spanProgress(progress, 0, 0.7);
  const body = spanProgress(progress, 0.28, 1);

  return (
    <div ref={ref} className="draw-frame">
      <div
        className="draw-frame-body"
        style={{ ["--frame-body" as string]: String(body) }}
      >
        {children}
      </div>
      <svg className="draw-frame-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <rect
          x="0.4"
          y="0.4"
          width="99.2"
          height="99.2"
          rx="1.2"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - border}
        />
      </svg>
    </div>
  );
}

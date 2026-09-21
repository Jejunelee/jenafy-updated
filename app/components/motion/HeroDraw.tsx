"use client";

import { useRef } from "react";
import { spanProgress, useScrollDraw } from "@/app/hooks/useScrollDraw";
import LineReveal from "@/app/components/motion/LineReveal";
import TraceButton from "@/app/components/motion/TraceButton";
import TraceLink from "@/app/components/motion/TraceLink";
import TraceType from "@/app/components/motion/TraceType";

export default function HeroDraw() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollDraw(ref, "trigger", 2600);

  return (
    <div ref={ref} className="hero-content">
      <TraceType
        as="p"
        className="eyebrow"
        progress={spanProgress(progress, 0, 0.2)}
      >
        Digital platforms · for businesses that are done guessing
      </TraceType>
      <TraceType as="h1" progress={spanProgress(progress, 0.1, 0.58)}>
        We build platforms
        <br />
        that work.
      </TraceType>
      <LineReveal
        className="hero-copy"
        progress={spanProgress(progress, 0.48, 0.7)}
      >
        Not a prettier website. A digital product your team can run, your
        customers can understand, and your business can{" "}
        <strong>grow on.</strong>
      </LineReveal>
      <div className="hero-actions">
        <TraceButton
          className="hero-cta"
          href="#contact"
          progress={spanProgress(progress, 0.5, 0.95)}
        >
          Let&apos;s build it
        </TraceButton>
        <TraceLink
          className="hero-secondary"
          href="#work"
          progress={spanProgress(progress, 0.78, 1)}
        >
          See the work
        </TraceLink>
      </div>
    </div>
  );
}

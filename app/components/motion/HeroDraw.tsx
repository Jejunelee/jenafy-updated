"use client";

import { useEffect, useRef, useState } from "react";
import { MOTION_SPEED, spanProgress, useScrollDraw } from "@/app/hooks/useScrollDraw";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import LineReveal from "@/app/components/motion/LineReveal";
import TraceButton from "@/app/components/motion/TraceButton";
import TraceLink from "@/app/components/motion/TraceLink";
import TraceType from "@/app/components/motion/TraceType";

const HEADLINES = [
  { mid: "websites", tail: "that work." },
  { mid: "apps", tail: "that work." },
  { mid: "automation", tail: "that do the work." },
] as const;

function CertMark() {
  return (
    <svg className="hero-cert-mark" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4.8 8.2 L7 10.3 L11.3 5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroDraw() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollDraw(ref, "trigger", 2600);
  const reduced = useReducedMotion();
  const drawn = progress >= 0.98;
  const [cycle, setCycle] = useState(0);
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (!drawn || reduced) return;

    const hold = 2800 / MOTION_SPEED;
    const fade = 280 / MOTION_SPEED;
    let fadeTimer = 0;
    const id = window.setInterval(() => {
      setOn(false);
      fadeTimer = window.setTimeout(() => {
        setCycle((i) => (i + 1) % HEADLINES.length);
        setOn(true);
      }, fade);
    }, hold);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(fadeTimer);
    };
  }, [drawn, reduced]);

  const line = HEADLINES[cycle];

  return (
    <div ref={ref} className="hero-content">
      <TraceType
        as="p"
        className="eyebrow"
        progress={spanProgress(progress, 0, 0.2)}
      >
        Digital platforms · for businesses that are done guessing
      </TraceType>
      {drawn ? (
        <h1 className={`hero-cycle${on ? " is-on" : ""}`} aria-live="polite">
          We build {line.mid}
          <br />
          {line.tail}
        </h1>
      ) : (
        <TraceType as="h1" progress={spanProgress(progress, 0.1, 0.58)}>
          We build platforms
          <br />
          that work.
        </TraceType>
      )}
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
      <LineReveal
        as="ul"
        className="hero-certs"
        progress={spanProgress(progress, 0.82, 1)}
      >
        <li>
          <CertMark />
          Certified Shopify Partner
        </li>
        <li>
          <CertMark />
          Certified 10+ years in Photoshop
        </li>
        <li>10+ years in WordPress</li>
        <li>5+ years in Next.js and the JavaScript stack</li>
      </LineReveal>
    </div>
  );
}

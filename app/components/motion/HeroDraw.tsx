"use client";

import { useEffect, useRef, useState } from "react";
import { MOTION_SPEED, spanProgress, useScrollDraw } from "@/app/hooks/useScrollDraw";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import LineReveal from "@/app/components/motion/LineReveal";
import TraceButton from "@/app/components/motion/TraceButton";
import TraceLink from "@/app/components/motion/TraceLink";
import TraceType from "@/app/components/motion/TraceType";

const KEYWORDS = ["websites", "apps", "automation"] as const;

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
  const [looping, setLooping] = useState(false);

  const startedRef = useRef(false);

  useEffect(() => {
    if (!drawn || reduced) {
      startedRef.current = false;
      setLooping(false);
      setCycle(0);
      setOn(true);
      return;
    }

    const hold = 2400 / MOTION_SPEED;
    const fade = 520 / MOTION_SPEED;
    let fadeTimer = 0;

    const id = window.setInterval(() => {
      if (!startedRef.current) {
        startedRef.current = true;
        setLooping(true);
        setOn(true);
        return;
      }

      setOn(false);
      fadeTimer = window.setTimeout(() => {
        setCycle((i) => (i + 1) % KEYWORDS.length);
        fadeTimer = window.setTimeout(() => setOn(true), 32);
      }, fade);
    }, hold);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(fadeTimer);
    };
  }, [drawn, reduced]);

  const word = KEYWORDS[cycle];

  return (
    <div ref={ref} className="hero-content">
      <TraceType
        as="p"
        className="eyebrow"
        progress={spanProgress(progress, 0, 0.2)}
      >
        Digital platforms · for businesses that are done guessing
      </TraceType>
      <h1 className={`hero-headline${looping ? " is-looping" : ""}`}>
        <TraceType as="span" progress={spanProgress(progress, 0.1, 0.4)}>
          We build{" "}
        </TraceType>
        <span className="hero-keyword" aria-live="polite">
          <span className="hero-kw-sizer" aria-hidden>
            automation
          </span>
          <span className="hero-kw hero-kw-from">platforms</span>
          <span className={`hero-kw hero-kw-to${on ? " is-on" : ""}`}>
            {word}
          </span>
        </span>
        <br />
        <TraceType as="span" progress={spanProgress(progress, 0.38, 0.58)}>
          that work.
        </TraceType>
      </h1>
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

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
  const [slots, setSlots] = useState<[string, string]>([
    "platforms",
    "websites",
  ]);
  const [front, setFront] = useState(0);
  const frontRef = useRef(0);
  const nextIndex = useRef(0);

  useEffect(() => {
    frontRef.current = front;
  }, [front]);

  useEffect(() => {
    if (!drawn || reduced) {
      nextIndex.current = 0;
      frontRef.current = 0;
      setSlots(["platforms", "websites"]);
      setFront(0);
      return;
    }

    const hold = 2400 / MOTION_SPEED;
    let timer = 0;
    let cancelled = false;
    let incomingRaf = 0;

    const swap = () => {
      const next = KEYWORDS[nextIndex.current % KEYWORDS.length];
      nextIndex.current += 1;
      const incoming = 1 - frontRef.current;
      setSlots((current) => {
        const nextSlots: [string, string] = [current[0], current[1]];
        nextSlots[incoming] = next;
        return nextSlots;
      });
      incomingRaf = window.requestAnimationFrame(() => {
        incomingRaf = window.requestAnimationFrame(() => {
          if (cancelled) return;
          frontRef.current = incoming;
          setFront(incoming);
        });
      });
    };

    const tick = () => {
      swap();
      timer = window.setTimeout(tick, hold);
    };

    timer = window.setTimeout(tick, hold);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.cancelAnimationFrame(incomingRaf);
    };
  }, [drawn, reduced]);

  const keywordIn = spanProgress(progress, 0.22, 0.45);

  return (
    <div ref={ref} className="hero-content">
      <TraceType
        as="p"
        className="eyebrow"
        progress={spanProgress(progress, 0, 0.2)}
      >
        Digital platforms · for businesses that are done guessing
      </TraceType>
      <h1 className="hero-headline">
        <span className="hero-lead">
          <TraceType as="span" progress={spanProgress(progress, 0.1, 0.4)}>
            We build{" "}
          </TraceType>
          <span
            className="hero-keyword"
            aria-live="polite"
            style={{ ["--kw-in" as string]: String(keywordIn) }}
          >
            <span className="hero-kw-sizer" aria-hidden>
              automation
            </span>
            {slots.map((word, i) => (
              <span
                key={i}
                className={`hero-kw${front === i ? " is-on" : ""}`}
                aria-hidden={front !== i}
              >
                {word}
              </span>
            ))}
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

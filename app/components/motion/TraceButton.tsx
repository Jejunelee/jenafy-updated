"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { spanProgress, useScrollDraw } from "@/app/hooks/useScrollDraw";

function roundedRectPath(width: number, height: number, radius: number) {
  const x = 1.2;
  const y = 1.2;
  const w = Math.max(4, width - 2.4);
  const h = Math.max(4, height - 2.4);
  const r = Math.max(1, Math.min(radius, w / 2, h / 2));

  return [
    `M${x + r} ${y}`,
    `H${x + w - r}`,
    `A${r} ${r} 0 0 1 ${x + w} ${y + r}`,
    `V${y + h - r}`,
    `A${r} ${r} 0 0 1 ${x + w - r} ${y + h}`,
    `H${x + r}`,
    `A${r} ${r} 0 0 1 ${x} ${y + h - r}`,
    `V${y + r}`,
    `A${r} ${r} 0 0 1 ${x + r} ${y}`,
  ].join(" ");
}

export default function TraceButton({
  children,
  href,
  className,
  progress: controlled,
  type,
  decorative = false,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  progress?: number;
  type?: "button" | "submit";
  decorative?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const self = useScrollDraw(ref, "trigger", 1400);
  const progress = controlled ?? self;
  const [box, setBox] = useState({ w: 180, h: 48, r: 8 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const read = () => {
      const rect = el.getBoundingClientRect();
      const radius = Number.parseFloat(getComputedStyle(el).borderRadius) || 8;
      setBox({
        w: Math.max(1, Math.round(rect.width * 10) / 10),
        h: Math.max(1, Math.round(rect.height * 10) / 10),
        r: radius,
      });
    };

    read();
    const observer = new ResizeObserver(read);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const border = spanProgress(progress, 0, 0.58);
  const fill = spanProgress(progress, 0.4, 0.78);
  const label = spanProgress(progress, 0.58, 1);
  const path = roundedRectPath(box.w, box.h, box.r);
  const traveling = border > 0.02 && border < 0.98;
  const cls = `trace-btn ${decorative ? "is-decorative" : ""} ${className ?? ""}`;

  const inner = (
    <>
      <span className="trace-btn-fill" style={{ ["--btn-fill" as string]: String(fill) }} />
      <svg
        className="trace-btn-svg"
        viewBox={`0 0 ${box.w} ${box.h}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={path}
          fill="none"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - border}
        />
        {traveling ? (
          <path
            className="trace-btn-head"
            d={path}
            fill="none"
            pathLength={1}
            strokeDasharray="0.06 1"
            strokeDashoffset={1 - border}
          />
        ) : null}
      </svg>
      <span className="trace-btn-label" style={{ ["--btn-label" as string]: String(label) }}>
        {children}
      </span>
    </>
  );

  if (decorative) {
    return (
      <span ref={ref as never} className={cls} aria-hidden>
        {inner}
      </span>
    );
  }

  if (href?.startsWith("/")) {
    return (
      <Link ref={ref as never} className={cls} href={href}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref as never} className={cls} href={href}>
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref as never} className={cls} type={type ?? "button"}>
      {inner}
    </button>
  );
}

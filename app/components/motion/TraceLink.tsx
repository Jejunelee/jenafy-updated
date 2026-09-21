"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useScrollDraw } from "@/app/hooks/useScrollDraw";

export default function TraceLink({
  children,
  href,
  className,
  progress: controlled,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  progress?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const self = useScrollDraw(ref, "trigger", 900);
  const progress = controlled ?? self;

  return (
    <a
      ref={ref}
      href={href}
      className={`trace-link ${className ?? ""}`}
      style={{ ["--underline" as string]: String(progress) } as CSSProperties}
    >
      {children}
    </a>
  );
}

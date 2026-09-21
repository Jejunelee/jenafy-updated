"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useScrollDraw } from "@/app/hooks/useScrollDraw";

export default function LineReveal({
  children,
  className,
  progress: controlled,
  as: Tag = "p",
}: {
  children: ReactNode;
  className?: string;
  progress?: number;
  as?: "p" | "div" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const self = useScrollDraw(ref, "trigger", 1200);
  const progress = controlled ?? self;

  return (
    <Tag
      ref={ref as never}
      className={`line-reveal ${className ?? ""}`}
      style={{ ["--reveal" as string]: String(progress) } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

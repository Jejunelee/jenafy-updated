"use client";

import {
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { spanProgress, useScrollDraw } from "@/app/hooks/useScrollDraw";

function countGlyphs(node: ReactNode): number {
  if (node == null || typeof node === "boolean") return 0;
  if (typeof node === "string" || typeof node === "number") {
    return Array.from(String(node)).filter((ch) => ch.trim() !== "").length;
  }
  if (Array.isArray(node)) {
    return node.reduce<number>((sum, child) => sum + countGlyphs(child), 0);
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    if (node.type === "br") return 0;
    return countGlyphs(node.props.children);
  }
  return 0;
}

function Glyph({
  ch,
  index,
  total,
  progress,
}: {
  ch: string;
  index: number;
  total: number;
  progress: number;
}) {
  const start = total <= 1 ? 0 : (index / total) * 0.78;
  const local = spanProgress(progress, start, Math.min(1, start + 0.28));
  const stroke = spanProgress(local, 0, 0.72);
  const fill = spanProgress(local, 0.55, 1);

  return (
    <span className="trace-glyph">
      <span
        className="trace-glyph-fill"
        style={{ ["--glyph-fill" as string]: String(fill) }}
      >
        {ch}
      </span>
      <svg className="trace-glyph-svg" aria-hidden>
        <text
          x="50%"
          y="0.78em"
          textAnchor="middle"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - stroke}
          opacity={1 - fill * 0.92}
        >
          {ch}
        </text>
      </svg>
    </span>
  );
}

function renderString(
  value: string,
  progress: number,
  total: number,
  cursor: { i: number },
) {
  return value.split(/(\s+)/).map((chunk, key) => {
    if (!chunk) return null;
    if (/^\s+$/.test(chunk)) {
      return (
        <span key={`s-${cursor.i}-${key}`} className="trace-space">
          {chunk}
        </span>
      );
    }
    return (
      <span key={`w-${cursor.i}-${key}`} className="trace-word">
        {Array.from(chunk).map((ch, i) => {
          const glyph = (
            <Glyph
              key={`${cursor.i}-${i}-${ch}`}
              ch={ch}
              index={cursor.i}
              total={total}
              progress={progress}
            />
          );
          cursor.i += 1;
          return glyph;
        })}
      </span>
    );
  });
}

function renderNodes(
  node: ReactNode,
  progress: number,
  total: number,
  cursor: { i: number },
): ReactNode {
  if (node == null || typeof node === "boolean") return node;

  if (typeof node === "string" || typeof node === "number") {
    return renderString(String(node), progress, total, cursor);
  }

  if (Array.isArray(node)) {
    return node.map((child, key) => {
      if (isValidElement(child) && child.type === "br") {
        return <br key={key} />;
      }
      return (
        <span key={key} className="trace-chunk">
          {renderNodes(child, progress, total, cursor)}
        </span>
      );
    });
  }

  if (isValidElement<{ children?: ReactNode; className?: string }>(node)) {
    if (node.type === "br") return <br />;
    return (
      <span className={node.props.className}>
        {renderNodes(node.props.children, progress, total, cursor)}
      </span>
    );
  }

  return node;
}

export default function TraceType({
  children,
  as: Tag = "h2",
  className,
  progress: controlled,
  duration = 1700,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  progress?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const self = useScrollDraw(ref, "trigger", duration);
  const progress = controlled ?? self;
  const total = useMemo(() => Math.max(1, countGlyphs(children)), [children]);
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(true);
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`trace-type ${live ? "is-live" : ""} ${className ?? ""}`}
      style={{ ["--trace" as string]: String(progress) } as CSSProperties}
    >
      <span className="trace-source">{children}</span>
      {live ? (
        <span className="trace-draw" aria-hidden="true">
          {renderNodes(children, progress, total, { i: 0 })}
        </span>
      ) : null}
    </Tag>
  );
}

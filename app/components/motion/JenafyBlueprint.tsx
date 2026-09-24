"use client";

import { useEffect, useRef, useState } from "react";
import { spanProgress, useScrollDraw } from "@/app/hooks/useScrollDraw";
import {
  blueprintDesktop,
  blueprintMobile,
  blueprintTablet,
  stageCopy,
} from "@/app/components/motion/blueprintPaths";
import { StrokeNode, StrokePath } from "@/app/components/motion/StrokePath";

export default function JenafyBlueprint() {
  const trackRef = useRef<HTMLElement>(null);
  const progress = useScrollDraw(trackRef, "trigger", 4800);
  const [layout, setLayout] = useState<"desktop" | "tablet" | "mobile">(
    "desktop",
  );

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px)");
    const tablet = window.matchMedia("(max-width: 980px)");
    const update = () => {
      if (mobile.matches) setLayout("mobile");
      else if (tablet.matches) setLayout("tablet");
      else setLayout("desktop");
    };
    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  const drawing =
    layout === "mobile"
      ? blueprintMobile
      : layout === "tablet"
        ? blueprintTablet
        : blueprintDesktop;
  const stage = stageCopy(progress);

  return (
    <section
      ref={trackRef}
      className="blueprint"
      id="system"
      aria-label="How a platform is constructed"
    >
      <div className="blueprint-sticky">
        <div className="blueprint-copy">
          <p className="section-label">The build</p>
          <p className="blueprint-stage">{stage.title}</p>
          <p className="blueprint-caption">{stage.caption}</p>
        </div>

        <svg
          className="blueprint-svg"
          viewBox={drawing.viewBox}
          fill="none"
          aria-hidden
        >
          {drawing.paths.map((path) => (
            <StrokePath
              key={path.d}
              d={path.d}
              width={path.width}
              progress={spanProgress(progress, path.from, path.to)}
            />
          ))}
          {drawing.nodes.map((node) => (
            <StrokeNode
              key={`${node.x}-${node.y}`}
              x={node.x}
              y={node.y}
              progress={spanProgress(
                progress,
                node.at,
                Math.min(1, node.at + 0.08),
              )}
            />
          ))}
          {drawing.labels.map((label) => {
            const local = spanProgress(progress, label.from, Math.min(1, label.from + 0.12));
            if (local <= 0.02) return null;
            return (
              <text
                key={`${label.text}-${label.x}`}
                className="blueprint-ink"
                x={label.x}
                y={label.y}
                textAnchor={label.anchor ?? "start"}
                opacity={0.35 + 0.65 * local}
              >
                {label.text}
              </text>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

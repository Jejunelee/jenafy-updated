export function StrokePath({
  d,
  progress,
  width = 1.15,
  color = "rgba(220, 159, 235, 0.82)",
}: {
  d: string;
  progress: number;
  width?: number;
  color?: string;
}) {
  const p = Math.min(1, Math.max(0, progress));
  const traveling = p > 0.01 && p < 0.995;

  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={width}
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - p}
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
      {traveling ? (
        <path
          d={d}
          fill="none"
          stroke="rgba(245, 245, 242, 0.92)"
          strokeWidth={width + 0.35}
          pathLength={1}
          strokeDasharray="0.028 1"
          strokeDashoffset={1 - p}
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        />
      ) : null}
    </g>
  );
}

export function StrokeNode({
  x,
  y,
  progress,
}: {
  x: number;
  y: number;
  progress: number;
}) {
  const p = Math.min(1, Math.max(0, progress));
  if (p <= 0.01) return null;

  const r = 1.1 + 1.1 * p;

  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill="none"
      stroke="rgba(220, 159, 235, 0.95)"
      strokeWidth="1.1"
      opacity={0.35 + 0.65 * p}
    />
  );
}

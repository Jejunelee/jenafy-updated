export type DrawPath = {
  d: string;
  from: number;
  to: number;
  width?: number;
};

export type DrawNode = {
  x: number;
  y: number;
  at: number;
};

export type DrawLabel = {
  x: number;
  y: number;
  text: string;
  from: number;
  anchor?: "start" | "middle" | "end";
};

export const blueprintDesktop: {
  viewBox: string;
  paths: DrawPath[];
  nodes: DrawNode[];
  labels: DrawLabel[];
} = {
  viewBox: "0 0 1200 640",
  paths: [
    { d: "M64 304 V336", from: 0, to: 0.06, width: 1.4 },
    { d: "M64 320 H248", from: 0.04, to: 0.16, width: 1.4 },
    { d: "M248 320 V176", from: 0.14, to: 0.24, width: 1.4 },
    { d: "M248 176 H520 V464 H248 V176", from: 0.22, to: 0.4, width: 1.2 },
    { d: "M272 212 H496 V268 H272 V212", from: 0.32, to: 0.42, width: 1.05 },
    { d: "M272 288 H496 V344 H272 V288", from: 0.36, to: 0.46, width: 1.05 },
    { d: "M272 364 H496 V420 H272 V364", from: 0.4, to: 0.5, width: 1.05 },
    { d: "M520 320 H680", from: 0.46, to: 0.56, width: 1.4 },
    { d: "M680 88 H1144 V552 H680 V88", from: 0.54, to: 0.7, width: 1.25 },
    { d: "M680 88 H1144 V140 H680 V88", from: 0.66, to: 0.74, width: 1.05 },
    { d: "M704 104 H716 V116 H704 V104", from: 0.7, to: 0.76, width: 1.2 },
    { d: "M732 104 H744 V116 H732 V104", from: 0.72, to: 0.78, width: 1.2 },
    { d: "M760 104 H772 V116 H760 V104", from: 0.74, to: 0.8, width: 1.2 },
    { d: "M812 140 V552", from: 0.72, to: 0.82, width: 1.05 },
    { d: "M700 176 H792", from: 0.78, to: 0.84, width: 1 },
    { d: "M700 212 H776", from: 0.8, to: 0.86, width: 1 },
    { d: "M700 248 H784", from: 0.82, to: 0.88, width: 1 },
    { d: "M836 168 H1120 V292 H836 V168", from: 0.78, to: 0.88, width: 1.05 },
    { d: "M856 236 H948 V264 H856 V236", from: 0.84, to: 0.9, width: 1.05 },
    { d: "M836 324 H1088", from: 0.86, to: 0.91, width: 1 },
    { d: "M836 356 H1032", from: 0.88, to: 0.93, width: 1 },
    { d: "M836 408 H1120 V524 H836 V408", from: 0.9, to: 0.98, width: 1.05 },
    { d: "M856 448 H1072", from: 0.94, to: 1, width: 1 },
  ],
  nodes: [
    { x: 64, y: 320, at: 0.03 },
    { x: 248, y: 320, at: 0.16 },
    { x: 248, y: 176, at: 0.24 },
    { x: 520, y: 320, at: 0.46 },
    { x: 680, y: 320, at: 0.56 },
    { x: 812, y: 140, at: 0.78 },
    { x: 948, y: 250, at: 0.9 },
    { x: 1120, y: 466, at: 0.98 },
  ],
  labels: [
    { x: 48, y: 268, text: "01  idea", from: 0.02 },
    { x: 148, y: 268, text: "02  direction", from: 0.1 },
    { x: 264, y: 152, text: "03  structure", from: 0.24 },
    { x: 540, y: 268, text: "04  connection", from: 0.48 },
    { x: 796, y: 118, text: "product", from: 0.68 },
    { x: 700, y: 162, text: "nav", from: 0.76 },
    { x: 848, y: 196, text: "view", from: 0.82 },
  ],
};

export const blueprintTablet: {
  viewBox: string;
  paths: DrawPath[];
  nodes: DrawNode[];
  labels: DrawLabel[];
} = {
  viewBox: "0 0 900 620",
  paths: [
    { d: "M48 284 V316", from: 0, to: 0.08, width: 1.3 },
    { d: "M48 300 H188", from: 0.06, to: 0.18, width: 1.3 },
    { d: "M188 300 V164", from: 0.16, to: 0.26, width: 1.3 },
    { d: "M188 164 H400 V436 H188 V164", from: 0.24, to: 0.44, width: 1.15 },
    { d: "M208 196 H380 V244 H208 V196", from: 0.34, to: 0.46, width: 1 },
    { d: "M208 264 H380 V312 H208 V264", from: 0.38, to: 0.5, width: 1 },
    { d: "M208 332 H380 V380 H208 V332", from: 0.42, to: 0.54, width: 1 },
    { d: "M400 300 H508", from: 0.5, to: 0.6, width: 1.3 },
    { d: "M508 80 H860 V540 H508 V80", from: 0.58, to: 0.74, width: 1.2 },
    { d: "M508 80 H860 V128 H508 V80", from: 0.7, to: 0.78, width: 1 },
    { d: "M528 98 H544", from: 0.74, to: 0.78, width: 1.5 },
    { d: "M556 98 H572", from: 0.76, to: 0.8, width: 1.5 },
    { d: "M608 128 V540", from: 0.76, to: 0.86, width: 1 },
    { d: "M528 164 H588", from: 0.82, to: 0.88, width: 1 },
    { d: "M528 196 H576", from: 0.84, to: 0.9, width: 1 },
    { d: "M628 152 H840 V268 H628 V152", from: 0.84, to: 0.94, width: 1 },
    { d: "M644 216 H716 V240 H644 V216", from: 0.9, to: 0.96, width: 1 },
    { d: "M628 300 H808", from: 0.92, to: 0.97, width: 1 },
    { d: "M628 348 H840 V508 H628 V348", from: 0.94, to: 1, width: 1 },
  ],
  nodes: [
    { x: 48, y: 300, at: 0.04 },
    { x: 188, y: 300, at: 0.18 },
    { x: 400, y: 300, at: 0.5 },
    { x: 508, y: 300, at: 0.6 },
    { x: 608, y: 128, at: 0.8 },
    { x: 840, y: 428, at: 0.98 },
  ],
  labels: [
    { x: 48, y: 268, text: "01  idea", from: 0.02 },
    { x: 96, y: 280, text: "02  direction", from: 0.1 },
    { x: 200, y: 148, text: "03  structure", from: 0.26 },
    { x: 412, y: 280, text: "04  connect", from: 0.52 },
    { x: 592, y: 110, text: "product", from: 0.72 },
  ],
};

export const blueprintMobile: {
  viewBox: string;
  paths: DrawPath[];
  nodes: DrawNode[];
  labels: DrawLabel[];
} = {
  viewBox: "0 0 360 720",
  paths: [
    { d: "M40 56 H168", from: 0, to: 0.12, width: 1.25 },
    { d: "M168 56 V128", from: 0.1, to: 0.2, width: 1.25 },
    { d: "M40 128 H320 V292 H40 V128", from: 0.18, to: 0.4, width: 1.15 },
    { d: "M60 156 H300 V192 H60 V156", from: 0.3, to: 0.4, width: 1 },
    { d: "M60 204 H300 V240 H60 V204", from: 0.36, to: 0.46, width: 1 },
    { d: "M60 252 H300 V288 H60 V252", from: 0.4, to: 0.5, width: 1 },
    { d: "M180 292 V348", from: 0.44, to: 0.54, width: 1.25 },
    { d: "M40 348 H320 V688 H40 V348", from: 0.52, to: 0.72, width: 1.15 },
    { d: "M40 348 H320 V396 H40 V348", from: 0.68, to: 0.78, width: 1 },
    { d: "M56 370 H72", from: 0.74, to: 0.8, width: 1.5 },
    { d: "M84 370 H100", from: 0.76, to: 0.82, width: 1.5 },
    { d: "M60 420 H300 V520 H60 V420", from: 0.78, to: 0.9, width: 1 },
    { d: "M76 476 H148 V500 H76 V476", from: 0.86, to: 0.94, width: 1 },
    { d: "M60 548 H268", from: 0.9, to: 0.96, width: 1 },
    { d: "M60 580 H300 V656 H60 V580", from: 0.92, to: 1, width: 1 },
  ],
  nodes: [
    { x: 40, y: 56, at: 0.04 },
    { x: 168, y: 128, at: 0.2 },
    { x: 180, y: 292, at: 0.46 },
    { x: 180, y: 348, at: 0.56 },
    { x: 300, y: 470, at: 0.88 },
    { x: 300, y: 618, at: 0.96 },
  ],
  labels: [
    { x: 40, y: 44, text: "01  idea", from: 0.02 },
    { x: 52, y: 116, text: "03  structure", from: 0.22 },
    { x: 220, y: 328, text: "04  connect", from: 0.46 },
    { x: 116, y: 378, text: "product", from: 0.7 },
  ],
};

export function stageCopy(progress: number) {
  if (progress < 0.14) {
    return {
      title: "Idea",
      caption: "A mark on the page. The work has a starting point.",
    };
  }
  if (progress < 0.26) {
    return {
      title: "Direction",
      caption: "The line commits. It is going somewhere, not everywhere.",
    };
  }
  if (progress < 0.48) {
    return {
      title: "Structure",
      caption: "Three rooms appear. Content has a place to live.",
    };
  }
  if (progress < 0.58) {
    return {
      title: "Connection",
      caption: "The rooms are not the product. They have to meet a surface.",
    };
  }
  if (progress < 0.78) {
    return {
      title: "System",
      caption: "A window: title bar, controls, a frame that can hold work.",
    };
  }
  if (progress < 0.9) {
    return {
      title: "Platform",
      caption: "Nav on the left. A view on the right. People can find their way.",
    };
  }
  return {
    title: "Working product",
    caption: "A call to action. The drawing is now something you can use.",
  };
}

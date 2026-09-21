export const brandColors = [
  {
    name: "Paper",
    hex: "#f5f5f2",
    token: "--paper",
    use: "Default canvas. Light sections, cards sit on this.",
  },
  {
    name: "Cream",
    hex: "#f7f7f2",
    token: "--cream",
    use: "Type and UI on dark fields. Slightly warmer than paper.",
  },
  {
    name: "Ink",
    hex: "#111111",
    token: "--ink",
    use: "Primary text, dark sections, wordmark on light.",
  },
  {
    name: "Purple",
    hex: "#824591",
    token: "--purple",
    use: "Brand accent. Labels on light. Contact field. Never as body text on paper.",
  },
  {
    name: "Pink",
    hex: "#dc9feb",
    token: "--pink",
    use: "Signal on dark. Eyebrows, ticks, motion stroke, emphasis.",
  },
  {
    name: "Deep purple",
    hex: "#28132c",
    token: "--deep-purple",
    use: "Rare. Error/empty states. Not a section fill.",
  },
  {
    name: "Muted",
    hex: "#5e5e59",
    token: "--muted",
    use: "Secondary copy on paper.",
  },
  {
    name: "Dark muted",
    hex: "#9a9a96",
    token: "--dark-muted",
    use: "Secondary copy on ink.",
  },
] as const;

export const brandType = {
  display: "Space Grotesk",
  sans: "DM Sans",
  displayUse: "Headlines, wordmark, stage titles. Tracking −0.03 to −0.04em. Line-height 1.0–1.08 for display, 1.12–1.18 for paragraph headings.",
  sansUse: "UI, body, labels, buttons. Body 16–18px / 1.55–1.6. Labels 11–14px, uppercase, +0.08em tracking.",
} as const;

export const brandVoice = {
  positioning:
    "Jenafy designs and ships digital platforms that work — clear for the people using them, solid enough to grow on. Not a prettier website. A product the team can run on Monday.",
  tone: [
    "Direct. Short sentences. No pitch-deck fog.",
    "Warm with clients (bestie is allowed). Never cute with the product itself.",
    "Operator language: Monday, enrollments, dashboards, handoff — not synergy.",
    "Confident, not loud. No exclamation points in product UI.",
  ],
  say: [
    "platform",
    "product",
    "works on Monday",
    "makes sense",
    "ship",
    "dashboard",
    "existing client",
    "potential client",
  ],
  avoid: [
    "synergy",
    "leverage",
    "cutting-edge",
    "AI-powered (unless it is, and even then be specific)",
    "seamless",
    "delight",
    "we're passionate about",
    "one-stop shop",
  ],
} as const;

export const brandMotion = {
  language:
    "The UI itself is the drawing. Letterforms, button perimeters, cards, underlines, and dividers trace on. Never a decorative circuit, HUD, or illustration beside the real interface.",
  sequence:
    "DRAW → TRACE → CONNECT → BUILD → REVEAL → RETRACT. Scroll can reverse it.",
  story:
    "Idea → Direction → Structure → Connection → System → Platform → Working product.",
  speed: "70% of the original draw speed. Respect prefers-reduced-motion (show the finished state).",
  dont: "No PowerPoint fades. No parallax gimmicks. Motion never overpowers the headline.",
} as const;

export const brandLayout = {
  max: "1200px",
  grid: "8px spacing scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96).",
  radii: "8 / 12 / 16 / pill.",
  nav: "Fixed 72px (56px on small screens), floating pill, paper at 92% with blur.",
  gate: "True 50/50. Each half is the hit target. No nested links.",
} as const;

export const brandLogo = {
  wordmark: "JENAFY",
  case: "All caps in the mark. Sentence case in prose (Jenafy).",
  lockup: "Space Grotesk 700, tracking tight (−0.04em) in nav; +0.16em when used as a small stamp.",
  clearspace: "Do not put the mark in a gradient pill except the gate stamp and sign-in stamp.",
} as const;

export function buildBrandPrompt() {
  return `You are designing or writing for JENAFY, a studio that builds digital platforms that work.

POSITIONING
${brandVoice.positioning}
Tagline: Digital platforms that work.
Audience split: potential clients see the studio; existing clients log in to an analytics dashboard made for their digital product. Tone with clients can be warm ("Welcome back bestie :)") — the product UI stays calm and useful.

VOICE
${brandVoice.tone.map((line) => `- ${line}`).join("\n")}
Use: ${brandVoice.say.join(", ")}.
Never: ${brandVoice.avoid.join(", ")}.

COLOR (exact)
- Paper #f5f5f2 — default canvas
- Cream #f7f7f2 — type on dark
- Ink #111111 — text, dark fields
- Purple #824591 — brand accent on light
- Pink #dc9feb — signal on dark, motion stroke
- Deep purple #28132c — rare empty/error
- Muted #5e5e59 / dark muted #9a9a96 — secondary copy
Do not introduce new brand colors. Do not use purple as long body text on paper.

TYPE
- Display: Space Grotesk, 700 for headlines, tracking −0.03em to −0.04em. Display line-height ~1.0–1.08. Headings must wrap inside the viewport — never overflow the screen.
- UI/body: DM Sans, 16–18px, line-height 1.55–1.6.
- Labels: 11–14px, uppercase, letter-spacing ~0.08em, pink or purple.

LAYOUT
- Max width 1200px. 8px spacing grid. Radii 8/12/16.
- Gate is a 50/50 split, each pane is the link.
- Nav is a 72px floating pill (56px mobile).
- Plenty of air, large type, not tiny SaaS chrome.

MOTION
${brandMotion.language}
Sequence: ${brandMotion.sequence}
Story: ${brandMotion.story}
${brandMotion.speed}
${brandMotion.dont}

LOGO
Wordmark JENAFY in Space Grotesk. In sentences, write Jenafy.

OUTPUT RULES
- Prefer real UI over decoration.
- If you draw, draw the interface (type, frames, buttons), not a separate illustration.
- Keep copy short. If a line wraps, it must stay inside the container.
- Mobile is a layout, not a scaled-down desktop.`;
}

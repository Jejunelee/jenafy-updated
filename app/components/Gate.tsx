"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { LineReveal, TraceButton, TraceType } from "@/app/components/motion";
import { SITE } from "@/lib/site";

function Pane({
  href,
  variant,
  title,
  copy,
  cta,
}: {
  href: string;
  variant: "new" | "client";
  title: ReactNode;
  copy: string;
  cta: string;
}) {
  return (
    <Link className={`pane pane-${variant}`} href={href}>
      <TraceType as="h1" className="pane-title">
        {title}
      </TraceType>
      <LineReveal className="pane-copy">{copy}</LineReveal>
      <TraceButton decorative className="pane-go">
        {cta}
      </TraceButton>
    </Link>
  );
}

export default function Gate() {
  return (
    <main className="gate" id="top">
      <Pane
        href="/home"
        variant="new"
        title={
          <>
            Are you a
            <br />
            potential client?
          </>
        }
        copy="See what problems we can solve for you."
        cta="See how"
      />
      <Pane
        href={SITE.app}
        variant="client"
        title={
          <>
            Are you an
            <br />
            existing client?
          </>
        }
        copy="Welcome back bestie :) Log in to your analytics dashboard made for your digital product."
        cta="Log in"
      />

      <svg className="gate-split" aria-hidden>
        <line className="gate-split-v" x1="50%" y1="8%" x2="50%" y2="92%" pathLength={1} />
        <line className="gate-split-h" x1="8%" y1="50%" x2="92%" y2="50%" pathLength={1} />
      </svg>

      <p className="gate-brand">JENAFY</p>
    </main>
  );
}

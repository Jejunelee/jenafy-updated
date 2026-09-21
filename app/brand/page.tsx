import type { Metadata } from "next";
import Link from "next/link";
import CopyBrandPrompt from "@/app/components/CopyBrandPrompt";
import {
  brandColors,
  brandLayout,
  brandLogo,
  brandMotion,
  brandType,
  brandVoice,
} from "@/lib/brand";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand",
  description: "Jenafy brand system — color, type, voice, motion, and a copy-ready prompt.",
  robots: { index: false, follow: false },
};

export default function BrandPage() {
  return (
    <main className="brand-page" id="top">
      <header className="brand-bar">
        <Link className="brand-bar-mark" href="/">
          JENAFY
        </Link>
        <nav className="brand-bar-nav">
          <Link href="/home">Studio</Link>
          <CopyBrandPrompt />
        </nav>
      </header>

      <section className="brand-hero">
        <p className="section-label">Brand system</p>
        <h1>Everything that makes it Jenafy.</h1>
        <p className="brand-lede">
          {SITE.tagline}. Use this page as the source of truth. One click copies
          a prompt you can paste into any model or design tool.
        </p>
      </section>

      <section className="brand-section">
        <h2>Mark</h2>
        <div className="brand-mark-row">
          <p className="brand-wordmark">JENAFY</p>
          <p className="brand-wordmark brand-wordmark-on-ink">JENAFY</p>
        </div>
        <ul className="brand-list">
          <li>
            <strong>Wordmark.</strong> {brandLogo.wordmark} — {brandLogo.case}
          </li>
          <li>
            <strong>Lockup.</strong> {brandLogo.lockup}
          </li>
          <li>
            <strong>Clear space.</strong> {brandLogo.clearspace}
          </li>
        </ul>
      </section>

      <section className="brand-section">
        <h2>Positioning</h2>
        <p>{brandVoice.positioning}</p>
      </section>

      <section className="brand-section">
        <h2>Voice</h2>
        <ul className="brand-list">
          {brandVoice.tone.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="brand-split">
          <div>
            <h3>Say</h3>
            <p>{brandVoice.say.join(" · ")}</p>
          </div>
          <div>
            <h3>Never</h3>
            <p>{brandVoice.avoid.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <h2>Color</h2>
        <div className="brand-swatches">
          {brandColors.map((color) => (
            <article className="brand-swatch" key={color.token}>
              <span
                className="brand-swatch-chip"
                style={{ background: color.hex }}
              />
              <strong>{color.name}</strong>
              <code>{color.hex}</code>
              <code>{color.token}</code>
              <p>{color.use}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-section">
        <h2>Type</h2>
        <p className="brand-type-display">Space Grotesk — platforms that work</p>
        <p className="brand-type-sans">
          DM Sans — body, labels, and the words people actually read.
        </p>
        <ul className="brand-list">
          <li>
            <strong>{brandType.display}.</strong> {brandType.displayUse}
          </li>
          <li>
            <strong>{brandType.sans}.</strong> {brandType.sansUse}
          </li>
          <li>
            Headings must wrap inside the viewport. Never let a line run off
            screen.
          </li>
        </ul>
      </section>

      <section className="brand-section">
        <h2>Layout</h2>
        <ul className="brand-list">
          <li>
            <strong>Measure.</strong> {brandLayout.max}
          </li>
          <li>
            <strong>Grid.</strong> {brandLayout.grid}
          </li>
          <li>
            <strong>Radius.</strong> {brandLayout.radii}
          </li>
          <li>
            <strong>Nav.</strong> {brandLayout.nav}
          </li>
          <li>
            <strong>Gate.</strong> {brandLayout.gate}
          </li>
        </ul>
      </section>

      <section className="brand-section">
        <h2>Motion</h2>
        <p>{brandMotion.language}</p>
        <ul className="brand-list">
          <li>
            <strong>Sequence.</strong> {brandMotion.sequence}
          </li>
          <li>
            <strong>Story.</strong> {brandMotion.story}
          </li>
          <li>
            <strong>Speed.</strong> {brandMotion.speed}
          </li>
          <li>
            <strong>Don&apos;t.</strong> {brandMotion.dont}
          </li>
        </ul>
      </section>

      <section className="brand-section">
        <h2>Product language</h2>
        <div className="brand-split">
          <div>
            <h3>Potential client</h3>
            <p>Are you a potential client?</p>
            <p>See what problems we can solve for you.</p>
          </div>
          <div>
            <h3>Existing client</h3>
            <p>Are you an existing client?</p>
            <p>
              Welcome back bestie :) Log in to your analytics dashboard made for
              your digital product.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-section brand-section-end">
        <h2>Do / don&apos;t</h2>
        <div className="brand-split">
          <ul className="brand-list">
            <li>Draw the real UI: type, frames, buttons, rules.</li>
            <li>Keep type large. Tight display lines, open body lines.</li>
            <li>Purple on paper for labels. Pink on ink for signals.</li>
            <li>Ship something someone can use on Monday.</li>
          </ul>
          <ul className="brand-list">
            <li>No circuit boards, HUDs, or generic AI chrome.</li>
            <li>No tiny SaaS headers. No overflow headlines.</li>
            <li>No extra brand colors. No purple walls of body copy.</li>
            <li>No motion that fights the headline.</li>
          </ul>
        </div>
        <CopyBrandPrompt />
      </section>
    </main>
  );
}

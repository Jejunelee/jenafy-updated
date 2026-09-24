"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, navLinks } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.classList.add("nav-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-locked");
    };
  }, [open]);

  return (
    <>
      {open ? (
        <button
          className="nav-scrim"
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
      <header className={`nav${open ? " is-open" : ""}`}>
        <Link className="brand" href="/home#top" onClick={() => setOpen(false)}>
          JENAFY
        </Link>

        <nav className="nav-links" id="navLinks">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`/home${link.href}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-links-client"
            href={SITE.app}
            onClick={() => setOpen(false)}
          >
            Client login
          </a>
          <Link
            className="nav-links-cta"
            href="/home#contact"
            onClick={() => setOpen(false)}
          >
            Start a build
          </Link>
        </nav>

        <div className="nav-end">
          <a className="nav-client" href={SITE.app}>
            Client login
          </a>
          <Link className="nav-cta" href="/home#contact">
            Start a build
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
            <span className="menu-toggle-icon" aria-hidden>
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
    </>
  );
}

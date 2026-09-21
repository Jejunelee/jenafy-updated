"use client";

import { useState } from "react";
import { buildBrandPrompt } from "@/lib/brand";

function writeClipboard(text: string) {
  return navigator.clipboard.writeText(text);
}

function writeClipboardFallback(text: string) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.appendChild(field);
  field.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(field);
  if (!ok) throw new Error("copy");
}

export default function CopyBrandPrompt() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    const prompt = buildBrandPrompt();
    try {
      if (navigator.clipboard?.writeText) {
        await writeClipboard(prompt);
      } else {
        writeClipboardFallback(prompt);
      }
      setState("copied");
    } catch {
      try {
        writeClipboardFallback(prompt);
        setState("copied");
      } catch {
        setState("failed");
      }
    }
    window.setTimeout(() => setState("idle"), 2200);
  }

  return (
    <button className="brand-prompt-btn" type="button" onClick={copy}>
      {state === "copied"
        ? "Copied"
        : state === "failed"
          ? "Retry"
          : "Copy brand prompt"}
    </button>
  );
}


import type { Metadata } from "next";
import Gate from "@/app/components/Gate";

export const metadata: Metadata = {
  title: "Jenafy — Choose how you enter",
  description:
    "Potential client or existing client. See what Jenafy can solve — or log in to your dashboard.",
};

export default function GatePage() {
  return <Gate />;
}

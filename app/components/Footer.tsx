import Link from "next/link";
import SectionRule from "@/app/components/motion/SectionRule";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <SectionRule tone="light" />
      <div className="footer-inner">
        <div className="footer-brand">JENAFY</div>
        <div className="footer-center">{SITE.tagline}</div>
        <div className="footer-right">
          <Link href="/brand">Brand</Link>
          <span> · </span>
          <a href={SITE.app}>Client login</a>
          <span> · </span>
          <span>© 2026 Jenafy</span>
        </div>
      </div>
    </footer>
  );
}

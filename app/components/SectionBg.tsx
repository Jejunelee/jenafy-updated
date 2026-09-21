import Image from "next/image";

export default function SectionBg({
  src,
  mode,
}: {
  src: string;
  mode: "hero" | "contact";
}) {
  return (
    <div className={mode === "hero" ? "hero-bg" : "contact-bg"}>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        priority={mode === "hero"}
        aria-hidden
        style={{ pointerEvents: "none", objectFit: "cover" }}
      />
    </div>
  );
}

import Image from "next/image";
import SectionBg from "@/app/components/SectionBg";
import {
  DrawFrame,
  HeroDraw,
  JenafyBlueprint,
  LineReveal,
  SectionRule,
  TraceButton,
  TraceEdge,
  TraceType,
} from "@/app/components/motion";
import {
  marqueeItems,
  principles,
  process,
  projects,
  services,
  SITE,
  tech,
} from "@/lib/site";

function Marquee() {
  const sequence = Array.from({ length: 4 }, () => [...marqueeItems]).flat();

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {sequence.flatMap((item, i) => [
          <span key={`${item}-${i}`}>{item}</span>,
          <span className="star" key={`star-${i}`}>
            ✦
          </span>,
        ])}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero" id="hero">
        <SectionBg src="/Assets/hero.png" mode="hero" />
        <HeroDraw />
        <p className="scroll-note">The work, not the pitch ↓</p>
      </section>

      <Marquee />
      <JenafyBlueprint />

      <section className="about" id="about">
        <div className="container">
          <p className="section-label">01 — Why Jenafy</p>
          <TraceType>
            Pretty is easy.{" "}
            <span className="accent">Useful is the work.</span> We design and
            ship platforms that make sense on the first try — and still make
            sense six months later.
          </TraceType>
        </div>
      </section>

      <SectionRule tone="dark" />

      <section className="punch" id="promise">
        <div className="container">
          <p className="punch-kicker">No more settling</p>
          <TraceType>
            Jenafy gives your business no reason to live with a site nobody can
            use.
          </TraceType>
          <LineReveal>
            If the current platform is confusing, the ops are in spreadsheets, or
            the next version has been &ldquo;almost ready&rdquo; for a year — that is the
            job.
          </LineReveal>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <p className="section-label">02 — What we actually do</p>
          <TraceType className="services-lead">
            We are not here to decorate.
            <br />
            <span className="accent">We think like operators.</span>
          </TraceType>
          <div className="service-list">
            {services.map((service) => (
              <article className="service" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <TraceEdge tone="dark" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="container">
          <p className="section-label work-label">03 — Selected work</p>
          <TraceType className="work-intro">
            From a messy process to a product{" "}
            <span className="accent">people can open without help.</span>
          </TraceType>
          <div className="work-grid">
            {projects.map((project) => {
              const Tag = project.href ? "a" : "article";
              const extra = project.href
                ? {
                    href: project.href,
                    target: "_blank",
                    rel: "noreferrer",
                  }
                : {};

              return (
                <DrawFrame key={project.title}>
                  <Tag className="project" {...extra}>
                    <div className="project-preview">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 760px) 92vw, 42vw"
                        className="project-shot"
                      />
                    </div>
                    <div className="project-meta">
                      <div className="project-title">{project.title}</div>
                      <div className="project-type">{project.type}</div>
                    </div>
                    <p className="project-description">{project.copy}</p>
                  </Tag>
                </DrawFrame>
              );
            })}
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="container">
          <div className="approach-layout">
            <div>
              <p className="section-label">04 — How we think</p>
              <TraceType>
                Design that
                <br />
                earns its keep.
              </TraceType>
            </div>
            <div className="principles">
              {principles.map((principle) => (
                <article className="principle" key={principle.number}>
                  <span className="principle-number">{principle.number}</span>
                  <strong>{principle.title}</strong>
                  <p>{principle.copy}</p>
                  <TraceEdge tone="dark" />
                </article>
              ))}
            </div>
          </div>

          <div className="tech" aria-label="Technology stack">
            {tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="process">
            {process.map((step) => (
              <div className="process-item" key={step.number}>
                <span className="process-number">{step.number}</span>
                <span className="process-name">{step.name}</span>
                <TraceEdge tone="dark" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionRule tone="light" />

      <section className="contact" id="contact">
        <SectionBg src="/Assets/contact.png" mode="contact" />
        <div className="contact-inner">
          <p className="section-label">05 — Start</p>
          <TraceType>
            Let&apos;s build the one
            <br />
            that works.
          </TraceType>
          <LineReveal className="contact-copy">
            New idea, broken site, or a platform that never quite landed. Tell
            us what has to work on Monday. We&apos;ll tell you if we&apos;re the
            right team — and if we are, we&apos;ll build it.
          </LineReveal>
          <TraceButton className="contact-button" href={`mailto:${SITE.email}`}>
            Write to us
          </TraceButton>
        </div>
      </section>
    </main>
  );
}

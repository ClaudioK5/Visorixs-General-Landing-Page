import { useEffect, useRef } from "react";
import { site } from "./config/site";
import {
  benefits,
  differentiator,
  finalCta,
  howItWorks,
  useCases,
  whatIs,
} from "./content/copy";
import analysisExample from "./assets/envision-analysis-example.png";
import envisionAppUi from "./assets/envision-app-ui.png";
import "./App.css";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = (node: Element) => {
      node.setAttribute("data-revealed", "true");
    };

    const items = Array.from(el.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
    );

    items.forEach((item) => observer.observe(item));

    const failsafe = window.setTimeout(() => {
      items.forEach((item) => {
        if (!item.hasAttribute("data-revealed")) reveal(item);
      });
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return ref;
}

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function BenefitIcon({ name }: { name: string }) {
  switch (name) {
    case "moments":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
      );
    case "ask":
      return (
        <svg {...iconProps}>
          <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
          <path d="M8.5 9.5h7M8.5 13h4.5" />
        </svg>
      );
    case "matters":
      return (
        <svg {...iconProps}>
          <path d="M8 4h7l4 4v12a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1z" />
          <path d="M15 4v4h4" />
          <path d="M9 13h6M9 17h4" />
        </svg>
      );
    default:
      return null;
  }
}

function UseCaseIcon({ name }: { name: string }) {
  switch (name) {
    case "podcasters":
      return (
        <svg {...iconProps}>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 10a6 6 0 0012 0M12 16v4M8.5 20h7" />
        </svg>
      );
    case "creators":
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M10 9.5l5.5 2.5L10 14.5v-5z" />
        </svg>
      );
    case "teams":
      return (
        <svg {...iconProps}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="16.5" cy="9" r="2.2" />
          <path d="M3.8 19c.6-2.5 2.5-4 5.2-4s4.6 1.5 5.2 4" />
          <path d="M15 15.2c1.5.3 2.8 1.3 3.4 2.8" />
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  const pageRef = useReveal();

  return (
    <div className="page" ref={pageRef}>
      <header className="nav">
        <a href="#top" className="nav-brand">
          <span className="nav-mark" aria-hidden="true" />
          {site.productName}
        </a>
        <a href={site.appUrl} className="btn btn-primary btn-sm" rel="noopener noreferrer">
          {site.ctaLabel}
        </a>
      </header>

      <main id="top">
        <section className="hero band-mango">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-orb hero-orb-a" aria-hidden="true" />
          <div className="hero-orb hero-orb-b" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-eyebrow animate-in">{site.productName}</p>
              <h1 className="hero-brand animate-in delay-1">{site.tagline}</h1>
              <p className="hero-support animate-in delay-2">{site.description}</p>
              <div className="hero-ctas animate-in delay-3">
                <a href={site.appUrl} className="btn btn-primary btn-lg" rel="noopener noreferrer">
                  {site.ctaLabel}
                </a>
              </div>
              <p className="hero-note animate-in delay-4">{site.freeTrialNote}</p>
            </div>

            <div className="hero-product animate-in delay-2">
              <img
                src={envisionAppUi}
                alt="Visorix app — upload a video and ask questions"
                width={1200}
                height={900}
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="section band-cream section-what">
          <div className="section-inner narrow reveal">
            <p className="eyebrow">{whatIs.title}</p>
            <h2 className="what-headline">{whatIs.headline}</h2>
            <p className="what-body">{whatIs.body}</p>
          </div>
        </section>

        <section className="section band-mango-soft section-how" id="how">
          <div className="section-inner reveal">
            <header className="section-header">
              <p className="eyebrow">How it works</p>
              <h2>Upload. Ask. Get answers.</h2>
            </header>

            <ol className="flow">
              {howItWorks.map((item, i) => (
                <li key={item.step} className="flow-step">
                  <div className="flow-main">
                    <span className="flow-num">{item.step}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </div>
                  {i < howItWorks.length - 1 ? (
                    <span className="flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section band-cream section-usecases" aria-labelledby="usecases-heading">
          <div className="section-inner reveal">
            <header className="section-header">
              <p className="eyebrow">Use cases</p>
              <h2 id="usecases-heading">Built for the way you work with video</h2>
            </header>

            <div className="benefit-grid">
              {useCases.map((item) => (
                <article key={item.title} className="benefit-item usecase-item">
                  <div className="benefit-icon">
                    <UseCaseIcon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {"href" in item ? (
                    <a
                      href={item.href}
                      className="btn btn-primary btn-sm usecase-btn"
                      rel="noopener noreferrer"
                    >
                      {item.cta}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band-mango-soft section-benefits">
          <div className="section-inner">
            <header className="section-header">
              <p className="eyebrow">What you get</p>
              <h2>Clarity on every video</h2>
            </header>

            <div className="benefit-grid">
              {benefits.map((b) => (
                <article key={b.title} className="benefit-item">
                  <div className="benefit-icon">
                    <BenefitIcon name={b.icon} />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band-mango-strong section-diff">
          <div className="section-inner diff-grid">
            <div className="diff-copy">
              <p className="eyebrow">{differentiator.eyebrow}</p>
              <h2>{differentiator.title}</h2>
              <p>{differentiator.body}</p>
            </div>
            <figure className="diff-shot">
              <img
                src={analysisExample}
                alt={differentiator.imageAlt}
                width={1200}
                height={800}
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section-final" aria-labelledby="final-heading">
          <div className="final-glow" aria-hidden="true" />
          <div className="final-card">
            <p className="final-eyebrow">{finalCta.eyebrow}</p>
            <h2 id="final-heading">{finalCta.title}</h2>
            <p className="final-support">{finalCta.support}</p>
            <a
              href={site.appUrl}
              className="btn btn-primary btn-lg final-cta-btn"
              rel="noopener noreferrer"
            >
              {site.ctaLabel}
            </a>
            <p className="final-note">{site.freeTrialNote}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">{site.productName}</span>
          <a href={site.appUrl} rel="noopener noreferrer">
            Open the app
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

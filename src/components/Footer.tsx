"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Mail, ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const f = t.footer;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        background: "var(--color-ink)",
        borderTop: "1px solid rgba(200,169,110,0.08)",
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <div
              className="font-display text-3xl font-light tracking-widest text-gold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MA
            </div>
            <p className="text-sand text-sm font-medium"
              style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
              {f.name}
            </p>
            <p className="text-sand-muted text-xs mt-1 tracking-wide"
              style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
              {f.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className={`flex flex-col gap-3 ${isRTL ? "items-end" : "items-start"}`}>
            {[
              { label: t.nav.about, href: "#about" },
              { label: t.nav.skills, href: "#skills" },
              { label: t.nav.experience, href: "#experience" },
              { label: t.nav.projects, href: "#projects" },
              { label: t.nav.contact, href: "#contact" },
            ].map(({ label, href }) => (
              <button
                key={href}
                onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                className="text-sand-muted hover:text-gold transition-colors text-xs tracking-widest uppercase"
                style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className={`flex flex-col gap-3 ${isRTL ? "items-end" : "items-start"}`}>
            <p className="section-label mb-1">{isRTL ? "تواصل" : "Connect"}</p>
            <a href="https://www.linkedin.com/in/mohammed-abdullah-alhamed-3b89b2245/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sand-muted hover:text-gold transition-colors text-xs tracking-wider"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
              <LinkedInIcon size={13} />
              <span>{f.links.linkedin}</span>
            </a>
            <a href="https://github.com/Mohammed-Alhamed1"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sand-muted hover:text-gold transition-colors text-xs tracking-wider"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
              <GitHubIcon size={13} />
              <span>{f.links.github}</span>
            </a>
            <a href="mailto:alhamedmohammed33@gmail.com"
              className="flex items-center gap-2 text-sand-muted hover:text-gold transition-colors text-xs tracking-wider"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}>
              <Mail size={13} />
              <span>{f.links.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(200,169,110,0.06)" }}
      >
        <div className={`flex flex-wrap items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <p className="text-sand-dim text-xs tracking-wider"
            style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
            © {f.copyright}
          </p>
          <span className="text-gold/20">·</span>
          <p className="text-sand-dim text-xs tracking-wider">{f.builtWith}</p>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 text-sand-dim hover:text-gold transition-colors text-xs tracking-widest uppercase group"
        >
          <span>{isRTL ? "للأعلى" : "Back to top"}</span>
          <div className="w-6 h-6 flex items-center justify-center border border-current group-hover:border-gold transition-colors">
            <ArrowUp size={10} />
          </div>
        </button>
      </div>
    </footer>
  );
}

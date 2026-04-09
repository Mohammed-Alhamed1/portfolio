"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Navigation() {
  const { t, lang, toggleLang, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems = [
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "education", href: "#education" },
    { key: "contact", href: "#contact" },
  ] as const;

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(9,9,13,0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,169,110,0.1)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-lg font-light tracking-widest text-gold transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-display)" }}
            aria-label="Go to top"
          >
            M
            <span className="text-sand/60">.</span>
            A
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(({ key, href }) => (
              <li key={key}>
                <button
                  onClick={() => handleNav(href)}
                  className="nav-link"
                >
                  {t.nav[key as keyof typeof t.nav]}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Social icons — desktop only */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/Mohammed-Alhamed1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-muted hover:text-gold transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-abdullah-alhamed-3b89b2245/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-muted hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={15} />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-4 bg-white/10" />

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-colors px-3 py-1.5 border border-transparent hover:border-gold/20 hover:text-gold"
              style={{
                color: "var(--color-sand-muted)",
                fontFamily: lang === "ar" ? "var(--font-syne)" : "var(--font-ibm-arabic)",
              }}
              aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-sand-muted hover:text-gold transition-colors p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(9,9,13,0.98)", backdropFilter: "blur(20px)" }}
        aria-hidden={!mobileOpen}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-6 text-sand-muted hover:text-gold transition-colors"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div
          className="absolute top-5 left-6 font-display text-lg tracking-widest text-gold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          M<span className="text-sand/60">.</span>A
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col items-center gap-7">
          {navItems.map(({ key, href }, i) => (
            <li
              key={key}
              style={{ animationDelay: `${i * 60}ms` }}
              className={mobileOpen ? "animate-fade-up" : ""}
            >
              <button
                onClick={() => handleNav(href)}
                className="text-2xl font-light tracking-widest uppercase text-sand/80 hover:text-gold transition-colors"
                style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)" }}
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom row */}
        <div className="absolute bottom-10 flex items-center gap-6">
          <a href="https://github.com/Mohammed-Alhamed1" target="_blank" rel="noopener noreferrer" className="text-sand-muted hover:text-gold transition-colors">
            <GitHubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mohammed-abdullah-alhamed-3b89b2245/" target="_blank" rel="noopener noreferrer" className="text-sand-muted hover:text-gold transition-colors">
            <LinkedInIcon size={18} />
          </a>
          <button
            onClick={() => { toggleLang(); setMobileOpen(false); }}
            className="text-xs tracking-widest uppercase text-sand-muted hover:text-gold transition-colors"
            style={{ fontFamily: lang === "ar" ? "var(--font-syne)" : "var(--font-ibm-arabic)" }}
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
        </div>
      </div>
    </>
  );
}

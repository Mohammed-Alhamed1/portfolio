"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, MapPin, Circle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Hero() {
  const { t, isRTL } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Staggered entrance
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Subtle particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; opacity: number; size: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.05,
        size: Math.random() * 1.5 + 0.3,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 110, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Background gradient orbs */}
      <div className="orb w-[600px] h-[600px] top-[-100px] left-[10%] opacity-[0.04]"
        style={{ background: "#C8A96E" }} />
      <div className="orb w-[400px] h-[400px] bottom-[10%] right-[5%] opacity-[0.03]"
        style={{ background: "#C8A96E" }} />

      {/* Vertical line decoration */}
      <div className="absolute left-8 top-0 bottom-0 hidden lg:flex flex-col items-center gap-0 z-10"
        style={{ direction: "ltr" }}>
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/40 my-3" />
        <div className="w-px h-24 bg-gradient-to-b from-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left / Text content */}
          <div className={`flex flex-col gap-6 ${isRTL ? "items-end text-end" : "items-start text-start"}`}>
            {/* Location badge */}
            <div
              className={`flex items-center gap-2 text-sand-muted text-xs tracking-widest uppercase ${mounted ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              <MapPin size={12} className="text-gold" />
              <span>{t.hero.location}</span>
              <span className="mx-2 text-gold/30">·</span>
              <Circle size={6} className="text-emerald-400 fill-emerald-400 animate-pulse" />
              <span className="text-emerald-400/80">{t.hero.available}</span>
            </div>

            {/* Greeting + Name */}
            <div
              className={`${mounted ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <p className="text-sand-muted text-sm tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                {t.hero.greeting}
              </p>
              <h1
                className="font-display leading-none tracking-tight"
                style={{
                  fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)",
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  fontWeight: isRTL ? 700 : 300,
                  color: "#F2EEE5",
                  lineHeight: 1.05,
                  whiteSpace: "pre-line",
                }}
              >
                {t.hero.name.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? (
                      <span className="text-gold-gradient">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h1>
            </div>

            {/* Title */}
            <div
              className={`flex items-center gap-4 ${mounted ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "350ms" }}
            >
              <div className={`gold-line-start ${isRTL ? "order-last" : "order-first"}`}
                style={{ width: "40px", flexShrink: 0 }} />
              <p className="text-gold text-sm tracking-[0.18em] uppercase font-medium">
                {t.hero.title}
              </p>
              <span className="text-sand-dim">·</span>
              <p className="text-sand-muted text-sm tracking-wider">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Tagline */}
            <p
              className={`text-sand-muted leading-relaxed max-w-lg text-[0.96rem] ${mounted ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: "500ms",
                fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined,
              }}
            >
              {t.hero.tagline}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 pt-2 ${mounted ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "650ms" }}
            >
              <button onClick={scrollToProjects} className="btn-primary">
                {t.hero.cta}
                <ArrowDown size={14} />
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Social links */}
            <div
              className={`flex items-center gap-5 pt-2 ${mounted ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "800ms" }}
            >
              <a
                href="https://github.com/Mohammed-Alhamed1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand-muted hover:text-gold transition-colors text-xs tracking-widest uppercase"
              >
                <GitHubIcon size={14} />
                <span>GitHub</span>
              </a>
              <div className="w-px h-4 bg-white/10" />
              <a
                href="https://www.linkedin.com/in/mohammed-abdullah-alhamed-3b89b2245/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sand-muted hover:text-gold transition-colors text-xs tracking-widest uppercase"
              >
                <LinkedInIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right / Photo */}
          <div
            className={`flex justify-center lg:justify-end ${mounted ? "animate-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-6 border border-gold/6 z-0" />
              <div className="absolute -inset-3 border border-gold/12 z-0" />

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/60 z-10" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold/60 z-10" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold/60 z-10" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/60 z-10" />

              {/* Photo */}
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] overflow-hidden z-10">
                <img
                  src="/photo.jpg"
                  alt="Mohammed Abdullah Al-Hamed"
                  className="w-full h-full object-cover object-top grayscale-[15%] contrast-[1.02]"
                  style={{ filter: "grayscale(10%) brightness(0.95) contrast(1.05)" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div style="
                          width:100%; height:100%;
                          background: linear-gradient(135deg, #131320 0%, #1a1a2e 100%);
                          display:flex; flex-direction:column;
                          align-items:center; justify-content:center;
                          gap:12px; color: rgba(200,169,110,0.5);
                          font-size:3rem; letter-spacing:0.1em;
                        ">
                          <span style="font-size:4rem;">MA</span>
                          <span style="font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; opacity:0.5">Add photo.jpg</span>
                        </div>`;
                    }
                  }}
                />
                {/* Gold overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating info badge */}
              <div
                className="absolute -bottom-5 glass-card px-5 py-3 z-20"
                style={{ [isRTL ? "right" : "left"]: "-16px" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-xs text-sand font-medium tracking-wider">
                      {isRTL ? "محمد الحامد" : "Mohammed Al-Hamed"}
                    </div>
                    <div className="text-xs text-sand-muted tracking-wider">
                      {isRTL ? "مهندس برمجيات" : "Software Engineer"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sand-dim text-xs tracking-widest uppercase">
            {t.hero.scrollHint}
          </span>
          <button
            onClick={scrollToAbout}
            className="w-6 h-10 border border-gold/20 rounded-full flex items-start justify-center pt-2 hover:border-gold/50 transition-colors group"
          >
            <div className="w-1 h-2 rounded-full bg-gold/50 group-hover:bg-gold transition-colors animate-float" />
          </button>
        </div>
      </div>
    </section>
  );
}

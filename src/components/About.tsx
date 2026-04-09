"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="section-padding" dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "var(--color-ink-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-4 mb-16 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="gold-line-start" style={{ width: "48px" }} />
          <span className="section-label">{a.label}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Photo column */}
          <div className={`${isRTL ? "order-last lg:order-first" : ""}`}>
            <div className="relative inline-block">
              {/* Decorative border layers */}
              <div className="absolute -inset-5 border border-gold/6" />
              <div className="absolute -inset-3 border border-gold/10" />

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold/50" />

              <div className="relative w-full max-w-sm overflow-hidden"
                style={{ aspectRatio: "3/4" }}>
                <img
                  src="/photo.jpg"
                  alt="Mohammed Abdullah Al-Hamed"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(8%) contrast(1.05)" }}
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    if (t.parentElement) {
                      t.parentElement.style.background = "linear-gradient(135deg, #131320 0%, #1a1a2e 100%)";
                      t.parentElement.style.display = "flex";
                      t.parentElement.style.alignItems = "center";
                      t.parentElement.style.justifyContent = "center";
                      t.parentElement.innerHTML = `<span style="font-size:6rem;color:rgba(200,169,110,0.3)">MA</span>`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
              </div>

              {/* Experience tag */}
              <div className="absolute -bottom-6 glass-card px-6 py-4 z-10"
                style={{ [isRTL ? "left" : "right"]: "-16px" }}>
                <div className="text-3xl font-display font-light text-gold"
                  style={{ fontFamily: "var(--font-display)" }}>
                  3+
                </div>
                <div className="text-xs text-sand-muted tracking-wider uppercase mt-0.5">
                  {isRTL ? "سنوات خبرة" : "Years Exp."}
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className={`flex flex-col gap-8 ${isRTL ? "text-right" : "text-left"}`}>
            <h2
              className="leading-tight"
              style={{
                fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: isRTL ? 600 : 300,
                color: "#F2EEE5",
                whiteSpace: "pre-line",
              }}
            >
              {a.heading}
            </h2>

            {/* Gold accent line */}
            <div className="gold-line-start" style={{ width: "64px" }} />

            <div className="flex flex-col gap-5 text-sand-muted text-[0.95rem] leading-relaxed"
              style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
              <p>{a.bio1}</p>
              <p>{a.bio2}</p>
              <p>{a.bio3}</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-gold/10 mt-4">
              {a.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-6 px-4 text-center"
                  style={{ background: "rgba(19,19,32,0.6)" }}
                >
                  <div
                    className="text-2xl font-display font-light text-gold mb-1 leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-sand-muted tracking-wider uppercase leading-tight"
                    style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Links row */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/mohammed-abdullah-alhamed-3b89b2245/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Mohammed-Alhamed1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                GitHub
              </a>
              <a href="/cv.pdf" download className="btn-primary text-sm">
                {t.nav.downloadCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

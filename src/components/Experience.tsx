"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  const { t, isRTL } = useLanguage();
  const ex = t.experience;

  return (
    <section id="experience" className="section-padding" dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "var(--color-ink-secondary)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="gold-line-start" style={{ width: "48px" }} />
          <span className="section-label">{ex.label}</span>
        </div>

        <div className={`mb-16 ${isRTL ? "text-right" : "text-left"}`}>
          <h2
            style={{
              fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: isRTL ? 600 : 300,
              color: "#F2EEE5",
            }}
          >
            {ex.heading}
          </h2>
          <p className="text-sand-muted text-sm mt-3"
            style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
            {ex.subheading}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px hidden md:block"
            style={{
              [isRTL ? "right" : "left"]: "11px",
              background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.2) 10%, rgba(200,169,110,0.2) 90%, transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {ex.items.map((item, i) => (
              <div
                key={i}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute hidden md:flex items-center justify-center w-6 h-6 rounded-full z-10"
                  style={{
                    [isRTL ? "right" : "left"]: "0px",
                    top: "3px",
                    background: "var(--color-ink-card)",
                    border: "1px solid rgba(200,169,110,0.35)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                {/* Card */}
                <div
                  className="glass-card p-7 md:ml-12"
                  style={{ marginInlineStart: isRTL ? "0" : undefined, marginInlineEnd: isRTL ? "3rem" : undefined }}
                >
                  {/* Header */}
                  <div className={`flex flex-wrap items-start justify-between gap-4 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className="text-sand font-medium text-lg leading-tight"
                          style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}
                        >
                          {item.role}
                        </h3>
                        {item.isPlaceholder && (
                          <span className="placeholder-badge">{isRTL ? "مؤقت" : "placeholder"}</span>
                        )}
                      </div>
                      <p className="text-gold text-sm mt-0.5 tracking-wide"
                        style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                        {item.company}
                      </p>
                    </div>
                    <div className={`flex flex-col items-end gap-1 ${isRTL ? "items-start" : ""}`}>
                      <span className="text-xs tracking-widest text-sand-muted uppercase px-3 py-1"
                        style={{
                          background: "rgba(200,169,110,0.07)",
                          border: "1px solid rgba(200,169,110,0.12)",
                        }}>
                        {item.period}
                      </span>
                      <span className="text-xs text-sand-dim tracking-wider">{item.type}</span>
                    </div>
                  </div>

                  {/* Gold rule */}
                  <div className="gold-line-start mb-4" style={{ width: "32px" }} />

                  {/* Description */}
                  <p className="text-sand-muted text-sm leading-relaxed mb-5"
                    style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <ul className="flex flex-col gap-2">
                    {item.achievements.map((ach, ai) => (
                      <li
                        key={ai}
                        className={`flex items-start gap-2.5 text-sm text-sand-muted ${isRTL ? "flex-row-reverse text-right" : ""}`}
                        style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}
                      >
                        <ChevronRight size={13} className="text-gold mt-1 shrink-0"
                          style={{ transform: isRTL ? "scaleX(-1)" : undefined }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

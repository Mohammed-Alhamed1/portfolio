"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const { t, isRTL } = useLanguage();
  const ed = t.education;
  const certs = t.certifications;

  return (
    <section id="education" className="section-padding" dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "var(--color-ink-secondary)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-2 gap-16">

          {/* Education */}
          <div>
            <div className={`flex items-center gap-4 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="gold-line-start" style={{ width: "40px" }} />
              <span className="section-label">{ed.label}</span>
            </div>

            <h2
              className="mb-10"
              style={{
                fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: isRTL ? 600 : 300,
                color: "#F2EEE5",
              }}
            >
              {ed.heading}
            </h2>

            <div className="flex flex-col gap-6">
              {ed.items.map((item, i) => (
                <div key={i} className="glass-card p-6">
                  <div className={`flex items-start gap-4 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(200,169,110,0.08)",
                        border: "1px solid rgba(200,169,110,0.18)",
                      }}>
                      <GraduationCap size={16} className="text-gold" />
                    </div>
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sand font-medium text-base leading-tight"
                          style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                          {item.degree}
                        </h3>
                        {item.isPlaceholder && (
                          <span className="placeholder-badge">{isRTL ? "مؤقت" : "placeholder"}</span>
                        )}
                      </div>
                      <p className="text-gold text-sm mt-1"
                        style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                        {item.institution}
                      </p>
                      <p className="text-sand-dim text-xs tracking-wider mt-1">{item.period}</p>
                    </div>
                  </div>

                  <div className="gold-line-start mb-3" style={{ width: "24px" }} />

                  <p className="text-sand-muted text-sm leading-relaxed mb-3"
                    style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                    {item.description}
                  </p>

                  <ul className={`flex flex-col gap-1 ${isRTL ? "text-right" : "text-left"}`}>
                    {item.achievements.map((ach, ai) => (
                      <li key={ai} className="text-xs text-sand-muted"
                        style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                        <span className="text-gold/60 mr-2">◆</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className={`flex items-center gap-4 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="gold-line-start" style={{ width: "40px" }} />
              <span className="section-label">{certs.label}</span>
            </div>

            <h2
              className="mb-10"
              style={{
                fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: isRTL ? 600 : 300,
                color: "#F2EEE5",
              }}
            >
              {certs.heading}
            </h2>

            <div className="flex flex-col gap-4">
              {certs.items.map((cert, i) => (
                <div key={i} className="glass-card p-5">
                  <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(200,169,110,0.08)",
                        border: "1px solid rgba(200,169,110,0.15)",
                      }}>
                      <Award size={14} className="text-gold" />
                    </div>
                    <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-sand text-sm font-medium leading-snug"
                              style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                              {cert.name}
                            </h4>
                            {cert.isPlaceholder && (
                              <span className="placeholder-badge">{isRTL ? "مؤقت" : "placeholder"}</span>
                            )}
                          </div>
                          <p className="text-gold text-xs mt-1 tracking-wide">{cert.issuer}</p>
                        </div>
                        <span className="text-xs text-sand-dim tracking-wider shrink-0">{cert.year}</span>
                      </div>
                      {cert.credentialId && !cert.credentialId.startsWith("UMPSA") && (
                        <p className="text-sand-dim text-xs mt-1 font-mono tracking-wider">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

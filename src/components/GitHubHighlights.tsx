"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Code2, GitBranch, Star } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

export default function GitHubHighlights() {
  const { t, isRTL } = useLanguage();
  const gh = t.github;

  return (
    <section className="section-padding" dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "var(--color-ink)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className={`flex items-center gap-4 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="gold-line-start" style={{ width: "48px" }} />
          <span className="section-label">{gh.label}</span>
        </div>

        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none"
            style={{ fontSize: "12rem", lineHeight: 1, transform: "translate(20%, -20%)" }}>
            <GitHubIcon />
          </div>

          <div className="relative z-10">
            <div className={`grid md:grid-cols-2 gap-10 items-center`}>

              {/* Left */}
              <div className={isRTL ? "text-right" : "text-left"}>
                <div className="flex items-center gap-3 mb-5"
                  style={{ justifyContent: isRTL ? "flex-end" : "flex-start" }}>
                  <GitHubIcon size={24} className="text-gold" />
                  <h2
                    style={{
                      fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                      fontWeight: isRTL ? 600 : 300,
                      color: "#F2EEE5",
                    }}
                  >
                    {gh.heading}
                  </h2>
                </div>

                <div className="gold-line-start mb-5" style={{ width: "40px" }} />

                <p className="text-sand-muted text-sm leading-relaxed mb-6"
                  style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                  {gh.subheading}
                </p>

                <a
                  href={gh.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  <GitHubIcon size={14} />
                  {gh.viewProfile}
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Right — stats */}
              <div className="flex flex-col gap-4">
                {/* Stats */}
                {gh.stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4"
                    style={{ background: "rgba(200,169,110,0.04)", border: "1px solid rgba(200,169,110,0.1)" }}>
                    <span className="text-sand-muted text-xs tracking-widest uppercase"
                      style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                      {stat.label}
                    </span>
                    <span className="text-gold text-sm font-medium tracking-wide"
                      style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                      {stat.value}
                    </span>
                  </div>
                ))}

                {/* Features row */}
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { icon: Code2, label: isRTL ? "كود نظيف" : "Clean Code" },
                    { icon: GitBranch, label: isRTL ? "نشط" : "Active" },
                    { icon: Star, label: isRTL ? "مميز" : "Pro" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 py-4"
                      style={{
                        background: "rgba(200,169,110,0.04)",
                        border: "1px solid rgba(200,169,110,0.1)",
                      }}>
                      <Icon size={14} className="text-gold" />
                      <span className="text-[10px] text-sand-muted tracking-wider text-center">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <p className="text-xs text-sand-dim text-center mt-1 italic"
                  style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                  {gh.note}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-line mt-16 mx-auto" style={{ maxWidth: "200px" }} />
      </div>
    </section>
  );
}

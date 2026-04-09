"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Monitor, Server, Database, Wrench, Palette, Users } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor, Server, Database, Wrench, Palette, Users,
};

export default function Skills() {
  const { t, isRTL } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="section-padding" dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "var(--color-ink)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="gold-line-start" style={{ width: "48px" }} />
          <span className="section-label">{s.label}</span>
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
            {s.heading}
          </h2>
          <p className="text-sand-muted text-sm mt-3 max-w-xl leading-relaxed"
            style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
            {s.subheading}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.categories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] ?? Monitor;
            return (
              <div key={ci} className="glass-card p-7">
                {/* Category header */}
                <div className={`flex items-center gap-3 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 flex items-center justify-center"
                    style={{
                      background: "rgba(200,169,110,0.08)",
                      border: "1px solid rgba(200,169,110,0.18)",
                    }}>
                    <Icon size={16} className="text-gold" />
                  </div>
                  <span
                    className="text-sand font-medium text-sm tracking-wide"
                    style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}
                  >
                    {cat.name}
                  </span>
                </div>

                {/* Thin gold rule */}
                <div className="gold-line-start mb-5" style={{ width: "32px" }} />

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <span key={si} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom gold accent */}
        <div className="gold-line mt-16 mx-auto" style={{ maxWidth: "240px" }} />
      </div>
    </section>
  );
}

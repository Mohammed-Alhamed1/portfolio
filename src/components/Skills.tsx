"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Monitor, Server, Database, Wrench, Palette, Users } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn, staggerFast, viewport } from "@/lib/motionVariants";

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
        <motion.div
          className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeInUp}
        >
          <div className="gold-line-start" style={{ width: "48px" }} />
          <span className="section-label">{s.label}</span>
        </motion.div>

        <motion.div
          className={`mb-16 ${isRTL ? "text-right" : "text-left"}`}
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeInUp}
        >
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
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}
        >
          {s.categories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] ?? Monitor;
            return (
              <motion.div
                key={ci}
                className="glass-card p-7"
                variants={scaleIn}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(200,169,110,0.08)" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Category header */}
                <div className={`flex items-center gap-3 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <motion.div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{
                      background: "rgba(200,169,110,0.08)",
                      border: "1px solid rgba(200,169,110,0.18)",
                    }}
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={16} className="text-gold" />
                  </motion.div>
                  <span
                    className="text-sand font-medium text-sm tracking-wide"
                    style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}
                  >
                    {cat.name}
                  </span>
                </div>

                <div className="gold-line-start mb-5" style={{ width: "32px" }} />

                {/* Skill pills — staggered */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerFast}
                >
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      className="skill-pill"
                      variants={{
                        hidden: { opacity: 0, scale: 0.85 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
                      }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="gold-line mt-16 mx-auto" style={{ maxWidth: "240px" }} />
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motionVariants";

const cardHover = {
  rest: { y: 0, boxShadow: "0 0px 0px rgba(200,169,110,0)" },
  hover: { y: -5, boxShadow: "0 16px 48px rgba(200,169,110,0.1)" },
};

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const p = t.projects;

  const featured = p.items.filter((i) => i.featured);
  const rest = p.items.filter((i) => !i.featured);

  return (
    <section id="projects" className="section-padding" dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "var(--color-ink)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeInUp}
        >
          <div className="gold-line-start" style={{ width: "48px" }} />
          <span className="section-label">{p.label}</span>
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
            {p.heading}
          </h2>
          <p className="text-sand-muted text-sm mt-3"
            style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
            {p.subheading}
          </p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}
        >
          {featured.map((proj, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 flex flex-col justify-between min-h-[280px] relative overflow-hidden"
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Hover overlay accent */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.03) 0%, transparent 60%)" }}
              />

              {/* Featured badge */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 text-xs text-gold tracking-wider">
                <Star size={11} className="fill-gold" />
                <span className="uppercase tracking-widest text-[10px]">{isRTL ? "مميز" : "Featured"}</span>
              </div>

              <div>
                <div className={`flex items-start gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sand font-medium text-lg leading-tight"
                        style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                        {proj.title}
                      </h3>
                      {proj.isPlaceholder && (
                        <span className="placeholder-badge">{isRTL ? "مؤقت" : "placeholder"}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="gold-line-start mb-4" style={{ width: "28px" }} />

                <p className="text-sand-muted text-sm leading-relaxed"
                  style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                  {proj.description}
                </p>
              </div>

              <div className="mt-6">
                <div className={`flex flex-wrap gap-2 mb-5 ${isRTL ? "justify-end" : ""}`}>
                  {proj.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] tracking-widest text-gold/70 uppercase px-2.5 py-1"
                      style={{ background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.1)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-sand-muted hover:text-gold transition-colors uppercase tracking-wider">
                      <GitHubIcon size={13} />
                      <span>{p.viewCode}</span>
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-sand-muted hover:text-gold transition-colors uppercase tracking-wider">
                      <ExternalLink size={13} />
                      <span>{p.liveDemo}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other projects */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5"
          initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainer}
        >
          {rest.map((proj, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 flex flex-col justify-between"
              variants={fadeInUp}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(200,169,110,0.07)" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <h3 className="text-sand font-medium text-base"
                      style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                      {proj.title}
                    </h3>
                    {proj.isPlaceholder && (
                      <span className="placeholder-badge">{isRTL ? "مؤقت" : "placeholder"}</span>
                    )}
                  </div>
                  <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="text-sand-muted hover:text-gold transition-colors">
                        <GitHubIcon size={14} />
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="text-sand-muted hover:text-gold transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="gold-line-start mb-3" style={{ width: "24px" }} />

                <p className="text-sand-muted text-sm leading-relaxed"
                  style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                  {proj.description}
                </p>
              </div>

              <div className={`flex flex-wrap gap-2 mt-4 ${isRTL ? "justify-end" : ""}`}>
                {proj.tags.map((tag, ti) => (
                  <span key={ti} className="text-[10px] tracking-widest text-gold/60 uppercase px-2 py-0.5"
                    style={{ background: "rgba(200,169,110,0.05)", border: "1px solid rgba(200,169,110,0.08)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeInUp}
        >
          <motion.a
            href="https://github.com/Mohammed-Alhamed1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <GitHubIcon size={14} />
            {isRTL ? "استعرض المزيد على GitHub" : "View More on GitHub"}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

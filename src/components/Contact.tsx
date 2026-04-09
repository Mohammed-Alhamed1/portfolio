"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission — replace with real integration (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" dir={isRTL ? "rtl" : "ltr"}
      style={{ background: "var(--color-ink-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="gold-line-start" style={{ width: "48px" }} />
          <span className="section-label">{c.label}</span>
        </div>

        <div className={`mb-14 ${isRTL ? "text-right" : "text-left"}`}>
          <h2
            style={{
              fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: isRTL ? 600 : 300,
              color: "#F2EEE5",
            }}
          >
            {c.heading}
          </h2>
          <p className="text-sand-muted text-sm mt-3 max-w-xl leading-relaxed"
            style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
            {c.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center glass-card p-10">
                <CheckCircle size={40} className="text-gold" />
                <p className="text-sand text-lg"
                  style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : "var(--font-display)" }}>
                  {c.form.success}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-gold/70 hover:text-gold transition-colors uppercase tracking-widest mt-2"
                >
                  {isRTL ? "إرسال رسالة أخرى" : "Send another"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label block mb-2" htmlFor="name">
                      {c.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder={isRTL ? "الاسم الكامل" : "John Doe"}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2" htmlFor="email">
                      {c.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="you@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2" htmlFor="subject">
                    {c.form.subject}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder={isRTL ? "موضوع رسالتك" : "Project inquiry"}
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>

                <div>
                  <label className="section-label block mb-2" htmlFor="message">
                    {c.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder={isRTL ? "اكتب رسالتك هنا..." : "Tell me about your project or opportunity..."}
                    dir={isRTL ? "rtl" : "ltr"}
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary mt-2 self-start"
                  style={{ opacity: sending ? 0.7 : 1 }}
                >
                  <Send size={14} />
                  {sending ? c.form.sending : c.form.send}
                </button>
              </form>
            )}
          </div>

          {/* Right — Links */}
          <div className={`flex flex-col gap-8 ${isRTL ? "items-end text-right" : "items-start text-left"}`}>

            {/* Direct email */}
            <div>
              <p className="section-label mb-3">{c.form.emailLabel}</p>
              <a
                href={`mailto:${c.form.emailAddress}`}
                className="text-gold text-lg hover:text-gold-light transition-colors tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.form.emailAddress}
              </a>
              <p className="text-sand-dim text-xs mt-1 tracking-wider">
                {isRTL ? "عادةً يُرد خلال ٢٤-٤٨ ساعة" : "Usually responds within 24-48 hours"}
              </p>
            </div>

            {/* Divider */}
            <div className="gold-line-start" style={{ width: "60px" }} />

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/mohammed-abdullah-alhamed-3b89b2245/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
              >
                <div className="w-10 h-10 flex items-center justify-center transition-colors"
                  style={{
                    background: "rgba(200,169,110,0.07)",
                    border: "1px solid rgba(200,169,110,0.15)",
                  }}>
                  <LinkedInIcon size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-sand text-sm font-medium group-hover:text-gold transition-colors">
                    {c.links.linkedin}
                  </div>
                  <div className="text-sand-dim text-xs tracking-wider">
                    linkedin.com/in/mohammed-abdullah-alhamed
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Mohammed-Alhamed1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
              >
                <div className="w-10 h-10 flex items-center justify-center transition-colors"
                  style={{
                    background: "rgba(200,169,110,0.07)",
                    border: "1px solid rgba(200,169,110,0.15)",
                  }}>
                  <GitHubIcon size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-sand text-sm font-medium group-hover:text-gold transition-colors">
                    {c.links.github}
                  </div>
                  <div className="text-sand-dim text-xs tracking-wider">
                    github.com/Mohammed-Alhamed1
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${c.form.emailAddress}`}
                className="flex items-center gap-4 group"
                style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
              >
                <div className="w-10 h-10 flex items-center justify-center transition-colors"
                  style={{
                    background: "rgba(200,169,110,0.07)",
                    border: "1px solid rgba(200,169,110,0.15)",
                  }}>
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-sand text-sm font-medium group-hover:text-gold transition-colors">
                    {c.links.email}
                  </div>
                  <div className="text-sand-dim text-xs tracking-wider">{c.form.emailAddress}</div>
                </div>
              </a>
            </div>

            {/* Availability note */}
            <div className="glass-card p-5 w-full mt-auto">
              <div className={`flex items-center gap-2 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs tracking-widest uppercase">
                  {isRTL ? "متاح الآن" : "Available Now"}
                </span>
              </div>
              <p className="text-sand-muted text-xs leading-relaxed"
                style={{ fontFamily: isRTL ? "var(--font-ibm-arabic)" : undefined }}>
                {isRTL
                  ? "أنا متاح حالياً للفرص المثيرة — سواء كانت وظيفة بدوام كامل، عمل حر، أو تعاون في مشروع."
                  : "I'm currently open to exciting opportunities — whether full-time, freelance, or project collaboration."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { content, Lang } from "@/data/content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof content.en;
  isRTL: boolean;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ar" : "en");
  }, [lang, setLang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: content[lang] as typeof content.en,
    isRTL: lang === "ar",
    toggleLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

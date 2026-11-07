import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ru" | "zh";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => undefined,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("vibo-language");
    if (stored === "en" || stored === "ru" || stored === "zh") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        setLanguageState(next);
        window.localStorage.setItem("vibo-language", next);
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AppNavLink } from "@/components/navigation/AppNavLink";
import { IMAGES } from "@/assets/images";
import { useLanguage, type Language } from "./LanguageProvider";

type Localized = Record<Language, string>;

const labels: Record<string, Localized> = {
  product: { en: "Product", ru: "Продукт", zh: "产品" },
  benchmarks: { en: "Benchmarks", ru: "Метрики", zh: "基准" },
  security: { en: "Security", ru: "Безопасность", zh: "安全" },
  pricing: { en: "Pricing", ru: "Тарифы", zh: "价格" },
  cta: { en: "Get ViBo", ru: "Получить ViBo", zh: "获取 ViBo" },
  footer: {
    en: "A modular platform for AI agents and reusable skills — connect capabilities, orchestrate work, and keep context under control.",
    ru: "Модульная платформа для ИИ-агентов и переиспользуемых skills: подключайте возможности, оркестрируйте работу и контролируйте контекст.",
    zh: "面向 AI 智能体与可复用技能的模块化平台：连接能力、编排任务并控制上下文。",
  },
};

const nav = [
  { to: "/product", key: "product" },
  { to: "/benchmarks", key: "benchmarks" },
  { to: "/security", key: "security" },
  { to: "/pricing", key: "pricing" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  // Sections ease in once as they enter the viewport. The attribute is only added
  // from JS, so without scripting — or with reduced motion — nothing is hidden.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".site-shell section"));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );
    sections.forEach((section) => {
      section.setAttribute("data-reveal", "");
      io.observe(section);
    });
    return () => io.disconnect();
  }, []);
  const { language, setLanguage } = useLanguage();

  const languageSwitcher = (
    <div className="lang-switcher" aria-label="Language selection">
      {(["en", "ru", "zh"] as Language[]).map((item) => (
        <button
          key={item}
          className={`lang-button ${language === item ? "active" : ""}`}
          type="button"
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
        >
          {item === "zh" ? "中文" : item.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <AppNavLink to="/" className="brand" aria-label="ViBo home">
            <img src={IMAGES.BRAND_DOT_LOGO} alt="" width="38" height="38" />
            <span>Vi<span>Bo</span></span>
          </AppNavLink>
          <nav className="nav-links" aria-label="Primary navigation">
            {nav.map((item) => (
              <AppNavLink
                key={item.to}
                to={item.to}
                className="nav-link"
                activeClassName="active"
              >
                {labels[item.key][language]}
              </AppNavLink>
            ))}
          </nav>
          {languageSwitcher}
          <a className="nav-cta" href="https://t.me/ViBomemorybot" target="_blank" rel="noreferrer">
            {labels.cta[language]} <ArrowUpRight size={16} />
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`mobile-panel ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <AppNavLink
              key={item.to}
              to={item.to}
              className="nav-link"
              activeClassName="active"
              onClick={() => setOpen(false)}
            >
              {labels[item.key][language]}
            </AppNavLink>
          ))}
          {languageSwitcher}
          <a className="button-primary" href="https://t.me/ViBomemorybot" target="_blank" rel="noreferrer">
            {labels.cta[language]} <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <AppNavLink to="/" className="brand" aria-label="ViBo home">
              <img src={IMAGES.BRAND_DOT_LOGO} alt="" width="38" height="38" />
              <span>Vi<span>Bo</span></span>
            </AppNavLink>
            <p className="footer-copy">{labels.footer[language]}</p>
          </div>
          <div className="footer-links">
            {nav.map((item) => (
              <AppNavLink key={item.to} to={item.to}>
                {labels[item.key][language]}
              </AppNavLink>
            ))}
            <a href="https://github.com/vnbochkarev-netizen/ViBo-memory">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

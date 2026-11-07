import { ArrowUpRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { useLanguage, type Language } from "@/components/site/LanguageProvider";
import { usePageMeta } from "@/components/site/usePageMeta";

const content: Record<Language, { kicker: string; title: string; lead: string; plans: { name: string; price: string; body: string; features: string[]; cta: string }[]; faqTitle: string; faqs: [string, string][] }> = {
  en: {
    kicker: "Simple by design", title: "Pay for memory. Save on everything around it.",
    lead: "One license unlocks memory, archives, search savings, thread context, and the privacy layer.",
    plans: [
      { name: "Starter", price: "$5", body: "For one agent and personal automation.", features: ["1 active agent", "All five ViBo tools", "Two-day free trial", "Personal support"], cta: "Start with Starter" },
      { name: "Builder", price: "$30", body: "For developers running several agents.", features: ["Up to 10 agents", "Shared deployment patterns", "Priority support", "Commercial use"], cta: "Choose Builder" },
      { name: "Studio", price: "$60", body: "For teams shipping agent products.", features: ["Unlimited internal agents", "Team deployment", "Architecture support", "Priority roadmap input"], cta: "Choose Studio" },
    ],
    faqTitle: "Questions before you install",
    faqs: [["Does ViBo upload my memory?", "ViBo is designed as a local-first memory layer. Your files stay on your machine unless you explicitly move or share them."], ["Which agents are supported?", "Any Python-based agent can use the API or CLI. Ready patterns include Hermes, OpenClaw, LangChain, LangGraph, n8n, and Dify."], ["Can I try it without Telegram?", "Yes. The public trial download provides two days of access without requiring Telegram."]],
  },
  ru: {
    kicker: "Просто по замыслу", title: "Платите за память. Экономьте на всём вокруг.",
    lead: "Одна лицензия открывает память, архивы, экономию веб-поиска, контекст диалогов и слой приватности.",
    plans: [
      { name: "Starter", price: "$5", body: "Для одного агента и личной автоматизации.", features: ["1 активный агент", "Все пять инструментов ViBo", "Два дня бесплатно", "Персональная поддержка"], cta: "Начать со Starter" },
      { name: "Builder", price: "$30", body: "Для разработчиков с несколькими агентами.", features: ["До 10 агентов", "Шаблоны развёртывания", "Приоритетная поддержка", "Коммерческое использование"], cta: "Выбрать Builder" },
      { name: "Studio", price: "$60", body: "Для команд, создающих агентские продукты.", features: ["Неограниченно внутренних агентов", "Командное развёртывание", "Помощь с архитектурой", "Приоритет в roadmap"], cta: "Выбрать Studio" },
    ],
    faqTitle: "Вопросы перед установкой",
    faqs: [["ViBo загружает мою память в облако?", "ViBo спроектирован как локальный слой памяти. Файлы остаются на вашем устройстве, пока вы сами их не перенесёте."], ["Какие агенты поддерживаются?", "Любой Python-агент может использовать API или CLI. Есть готовые схемы для Hermes, OpenClaw, LangChain, LangGraph, n8n и Dify."], ["Можно попробовать без Telegram?", "Да. Публичная пробная версия даёт два дня доступа без Telegram."]],
  },
  zh: {
    kicker: "刻意保持简单", title: "为记忆付费，为周边成本省钱。",
    lead: "一个许可证即可启用记忆、归档、搜索节省、线程上下文与隐私层。",
    plans: [
      { name: "Starter", price: "$5", body: "适合单个智能体与个人自动化。", features: ["1 个活跃智能体", "全部五项 ViBo 工具", "两天免费试用", "人工支持"], cta: "选择 Starter" },
      { name: "Builder", price: "$30", body: "适合运行多个智能体的开发者。", features: ["最多 10 个智能体", "共享部署模式", "优先支持", "商业使用"], cta: "选择 Builder" },
      { name: "Studio", price: "$60", body: "适合交付智能体产品的团队。", features: ["内部智能体不限量", "团队部署", "架构支持", "优先路线图反馈"], cta: "选择 Studio" },
    ],
    faqTitle: "安装前的问题",
    faqs: [["ViBo 会上传我的记忆吗？", "ViBo 是本地优先的记忆层。除非你明确移动或分享，否则文件保留在本机。"], ["支持哪些智能体？", "任何基于 Python 的智能体都可使用 API 或 CLI，并提供 Hermes、OpenClaw、LangChain、LangGraph、n8n 与 Dify 的模式。"], ["可以不用 Telegram 试用吗？", "可以。公开试用下载提供两天访问权限，无需 Telegram。"]],
  },
};

export default function PricingPage() {
  const { language } = useLanguage();
  const text = content[language];
  usePageMeta(`ViBo — ${text.kicker}`, text.lead);
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">{text.kicker}</span><h1 className="page-title">{text.title}</h1><p className="page-lead">{text.lead}</p>
          <div className="pricing-grid">
            {text.plans.map((plan, index) => (
              <article className={`price-card ${index === 0 ? "featured" : ""}`} key={plan.name}>
                <span className="plan-tag">{plan.name}</span><div className="price">{plan.price}<small>/mo</small></div><p>{plan.body}</p>
                <ul>{plan.features.map((feature) => <li key={feature}><Check size={16} /> {feature}</li>)}</ul>
                <a className={index === 0 ? "button-primary" : "button-secondary"} href="https://t.me/ViBomemorybot" target="_blank" rel="noreferrer">{plan.cta} <ArrowUpRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="section-kicker">FAQ</span><h2 className="section-title">{text.faqTitle}</h2>
          <div className="faq-list">{text.faqs.map(([question, answer]) => <article className="faq-item" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
        </div>
      </section>
    </SiteShell>
  );
}

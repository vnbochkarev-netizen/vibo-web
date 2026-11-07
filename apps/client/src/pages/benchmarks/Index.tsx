import { Activity, Gauge, TimerReset, type LucideIcon } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { useLanguage, type Language } from "@/components/site/LanguageProvider";
import { usePageMeta } from "@/components/site/usePageMeta";

const content: Record<Language, { kicker: string; title: string; lead: string; labels: string[]; tableTitle: string; headers: string[] }> = {
  en: {
    kicker: "Measured 12 Aug 2026",
    title: "Benchmarks you can interrogate.",
    lead: "Transparent measurements across 100,000 facts. ViBo reports retrieval latency, context reduction, and estimated token cost — not just accuracy.",
    labels: ["memory context reduction", "semantic search", "web-search token savings"],
    tableTitle: "Active memory scaling",
    headers: ["Facts", "Context without ViBo", "ViBo result", "Search latency", "Reduction"],
  },
  ru: {
    kicker: "Измерено 12 августа 2026",
    title: "Метрики, которые можно проверить.",
    lead: "Прозрачные измерения на 100 000 фактах. ViBo показывает задержку поиска, сокращение контекста и оценку стоимости токенов, а не только точность.",
    labels: ["сокращение контекста памяти", "семантический поиск", "экономия веб-поиска"],
    tableTitle: "Масштабирование активной памяти",
    headers: ["Факты", "Контекст без ViBo", "Результат ViBo", "Задержка", "Сокращение"],
  },
  zh: {
    kicker: "测量于 2026 年 8 月 12 日",
    title: "可追问、可验证的基准。",
    lead: "在 100,000 条事实上的透明测量。ViBo 同时报告检索延迟、上下文减少与估算令牌成本，而不仅是准确率。",
    labels: ["记忆上下文减少", "语义搜索", "网页搜索令牌节省"],
    tableTitle: "活跃记忆扩展",
    headers: ["事实", "无 ViBo 上下文", "ViBo 结果", "搜索延迟", "减少"],
  },
};

const rows = [
  ["1,000", "≈ 58K tokens", "4–8 facts", "34 ms", "50×"],
  ["10,000", "≈ 580K tokens", "4–8 facts", "49 ms", "97×"],
  ["50,000", "≈ 2.9M tokens", "4–8 facts", "58 ms", "132×"],
  ["100,000", "≈ 5.8M tokens", "4–8 facts", "66 ms", "150×"],
];

const highlights: [string, LucideIcon][] = [
  ["50–150×", Gauge],
  ["66 ms", TimerReset],
  ["96.2%", Activity],
];

export default function BenchmarksPage() {
  const { language } = useLanguage();
  const text = content[language];
  usePageMeta(`ViBo — ${text.kicker}`, text.lead);
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">{text.kicker}</span><h1 className="page-title">{text.title}</h1><p className="page-lead">{text.lead}</p>
          <div className="benchmark-grid">
            {highlights.map(([value, Icon], index) => (
              <article className="benchmark-card" key={value}><Icon size={22} /><strong>{value}</strong><span>{text.labels[index]}</span></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-compact">
        <div className="container">
          <span className="section-kicker">{text.tableTitle}</span>
          <div className="data-table-wrap">
            <table className="data-table">
              <thead><tr>{text.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
              <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td className={index === 4 ? "positive" : undefined} key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

import {
  ArrowRight,
  ArrowUpRight,
  Archive,
  Check,
  CircleDollarSign,
  Database,
  FileKey,
  GitBranch,
  LockKeyhole,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site/SiteShell";
import { useLanguage, type Language } from "@/components/site/LanguageProvider";
import { usePageMeta } from "@/components/site/usePageMeta";
import { IMAGES } from "@/assets/images";

type Copy = {
  eyebrow: string;
  titleA: string;
  titleB: string;
  lead: string;
  primary: string;
  secondary: string;
  proof: string[];
  metrics: [string, string][];
  sectionKicker: string;
  sectionTitle: string;
  sectionLead: string;
  features: { title: string; body: string }[];
  quote: string;
  proofItems: [string, string][];
  ctaTitle: string;
  ctaBody: string;
  moreKicker: string;
  moreTitle: string;
  moreLead: string;
  more: { name: string; tag: string; body: string; meta: string; href: string; cta: string }[];
};

const copy: Record<Language, Copy> = {
  en: {
    eyebrow: "Modular skills for AI agents · Live v1.0.12",
    titleA: "Give every agent",
    titleB: "the right skills.",
    lead: "ViBo is a modular capability layer for AI agents. Connect reusable skills, memory, tools, and private context — then orchestrate useful work through one clear interface.",
    primary: "Get ViBo — $5/mo",
    secondary: "See how it works",
    proof: ["Reusable skills", "Any Python agent", "Private context"],
    metrics: [["50–150×", "less memory context"], ["96.2%", "web-search token savings"], ["99.7%", "archive token savings"], ["100K", "facts benchmarked"]],
    sectionKicker: "Agents · skills · orchestration",
    sectionTitle: "Build agents from capabilities, not monoliths.",
    sectionLead: "ViBo turns memory, search, archives, privacy, and external tools into reusable skills. An agent can discover the capability it needs, connect it, and execute a task without carrying an oversized permanent context.",
    features: [
      { title: "Reusable agent skills", body: "Package a capability once and connect it to different agents, frameworks, and workflows." },
      { title: "Context and memory skill", body: "Give agents compact semantic memory and searchable archives without loading everything into every prompt." },
      { title: "Private execution", body: "Keep credentials and protected values outside the model while skills continue to execute useful work." },
    ],
    quote: "The cheapest token is the one you never have to send.",
    proofItems: [["4–8 facts", "Typical answer context instead of megabytes of memory."], ["66 ms", "Measured semantic search at 100,000 facts."], ["$5/mo", "One license for memory, archive, search savings, and privacy."]],
    ctaTitle: "Start assembling a more capable agent.",
    ctaBody: "Connect ViBo as a skill, adapter, Python API, or CLI. Begin with memory and privacy today, then expand into a reusable agent-skill ecosystem.",

    moreKicker: "Open tools from the network",
    moreTitle: "Two more things you can use today.",
    moreLead: "Both are small on purpose: one keeps the toolset to 217 tokens, the other keeps memory to one file and one script.",
    more: [
      {
        name: "vibocode MCP",
        tag: "Open source · npm · v0.1.3",
        body: "Two MCP tools instead of an API catalog: search finds the right endpoints, run executes model-written Python in a sandbox with memory and allowlisted HTTP.",
        meta: "217 tokens for the whole toolset · 1,272 GitHub endpoints cost 79,525 as plain tools",
        href: "https://github.com/vnbochkarev-netizen/vibocode-mcp",
        cta: "View on GitHub",
      },
      {
        name: "Agent Memory Protocol",
        tag: "Free · MIT",
        body: "Durable agent memory without a vector database: layered facts, keyword recall, claim verification, and secrets stored only as environment-variable pointers.",
        meta: "One SKILL.md and one standard-library script · Python 3.9+",
        href: "https://github.com/vnbochkarev-netizen/vibo-memory-protocol",
        cta: "Get the skill",
      },
    ],
  },
  ru: {
    eyebrow: "Модульные skills для ИИ-агентов · Live v1.0.12",
    titleA: "Дайте каждому агенту",
    titleB: "нужные навыки.",
    lead: "ViBo — модульный слой возможностей для ИИ-агентов. Подключайте переиспользуемые skills, память, инструменты и приватный контекст — затем оркестрируйте работу через единый интерфейс.",
    primary: "Получить ViBo — $5/мес",
    secondary: "Как это работает",
    proof: ["Переиспользуемые skills", "Любой Python-агент", "Приватный контекст"],
    metrics: [["50–150×", "меньше контекста памяти"], ["96,2%", "экономии веб-поиска"], ["99,7%", "экономии архива"], ["100 тыс.", "фактов в тесте"]],
    sectionKicker: "Агенты · skills · оркестрация",
    sectionTitle: "Собирайте агентов из возможностей, а не монолитов.",
    sectionLead: "ViBo превращает память, поиск, архивы, приватность и внешние инструменты в переиспользуемые skills. Агент подключает нужную возможность и выполняет задачу без постоянного раздутого контекста.",
    features: [
      { title: "Переиспользуемые skills", body: "Упакуйте возможность один раз и подключайте её к разным агентам, фреймворкам и процессам." },
      { title: "Skill памяти и контекста", body: "Давайте агентам компактную семантическую память и архивы без загрузки всех данных в каждый промпт." },
      { title: "Приватное исполнение", body: "Учётные данные остаются вне модели, а skills продолжают выполнять полезную работу." },
    ],
    quote: "Самый дешёвый токен — тот, который не пришлось отправлять.",
    proofItems: [["4–8 фактов", "Типичный контекст ответа вместо мегабайт памяти."], ["66 мс", "Измеренный семантический поиск по 100 000 фактов."], ["$5/мес", "Память, архив, экономия поиска и приватность в одной лицензии."]],
    ctaTitle: "Начните собирать более способного агента.",
    ctaBody: "Подключите ViBo как skill, адаптер, Python API или CLI. Начните с памяти и приватности, затем расширяйте экосистему навыков агента.",

    moreKicker: "Открытые инструменты сети",
    moreTitle: "Ещё два продукта, которыми можно пользоваться сегодня.",
    moreLead: "Оба намеренно небольшие: первый держит набор инструментов в 217 токенах, второй — память в одном файле и одном скрипте.",
    more: [
      {
        name: "vibocode MCP",
        tag: "Открытый код · npm · v0.1.3",
        body: "Два инструмента MCP вместо каталога API: search находит нужные эндпоинты, run выполняет написанный моделью Python в песочнице с памятью и белым списком HTTP.",
        meta: "217 токенов на весь набор · 1 272 эндпоинта GitHub стоят 79 525 токенов как обычные инструменты",
        href: "https://github.com/vnbochkarev-netizen/vibocode-mcp",
        cta: "Открыть на GitHub",
      },
      {
        name: "Agent Memory Protocol",
        tag: "Бесплатно · MIT",
        body: "Устойчивая память агента без векторной базы: слои фактов, поиск по ключевым словам, проверка утверждений и секреты только как ссылки на переменные окружения.",
        meta: "Один SKILL.md и один скрипт на стандартной библиотеке · Python 3.9+",
        href: "https://github.com/vnbochkarev-netizen/vibo-memory-protocol",
        cta: "Получить навык",
      },
    ],
  },
  zh: {
    eyebrow: "AI 智能体模块化技能 · Live v1.0.12",
    titleA: "为每个智能体",
    titleB: "连接正确的技能。",
    lead: "ViBo 是 AI 智能体的模块化能力层。连接可复用技能、记忆、工具与私有上下文，并通过统一接口编排有用的工作。",
    primary: "获取 ViBo — $5/月",
    secondary: "了解工作方式",
    proof: ["可复用技能", "任意 Python 智能体", "私有上下文"],
    metrics: [["50–150×", "减少记忆上下文"], ["96.2%", "网页搜索令牌节省"], ["99.7%", "归档令牌节省"], ["100K", "基准事实数量"]],
    sectionKicker: "智能体 · 技能 · 编排",
    sectionTitle: "用能力模块组装智能体，而不是构建单体。",
    sectionLead: "ViBo 将记忆、搜索、归档、隐私与外部工具转化为可复用技能。智能体可连接所需能力并执行任务，无需携带臃肿的永久上下文。",
    features: [
      { title: "可复用智能体技能", body: "一次封装能力，即可连接到不同智能体、框架与工作流。" },
      { title: "记忆与上下文技能", body: "为智能体提供紧凑的语义记忆与可搜索归档，无需在每次提示中加载全部数据。" },
      { title: "私有执行", body: "凭据与受保护值不进入模型，同时技能仍可完成实际工作。" },
    ],
    quote: "最便宜的令牌，是根本无需发送的令牌。",
    proofItems: [["4–8 条事实", "典型回答上下文，而不是数兆字节的记忆。"], ["66 毫秒", "在 100,000 条事实上的语义检索实测。"], ["$5/月", "记忆、归档、搜索节省与隐私合为一体。"]],
    ctaTitle: "开始组装更强大的智能体。",
    ctaBody: "以技能、适配器、Python API 或 CLI 连接 ViBo。从记忆与隐私开始，逐步扩展智能体技能生态。",

    moreKicker: "网络中的开放工具",
    moreTitle: "今天就能使用的另外两个产品。",
    moreLead: "两者都刻意保持轻量：一个把工具集控制在 217 个令牌，另一个把记忆放进一个文件和一个脚本。",
    more: [
      {
        name: "vibocode MCP",
        tag: "开源 · npm · v0.1.3",
        body: "两个 MCP 工具取代 API 目录：search 定位接口，run 在带记忆与白名单 HTTP 的沙箱中执行模型编写的 Python。",
        meta: "整个工具集 217 个令牌 · 1,272 个 GitHub 接口作为普通工具需 79,525 个令牌",
        href: "https://github.com/vnbochkarev-netizen/vibocode-mcp",
        cta: "在 GitHub 查看",
      },
      {
        name: "Agent Memory Protocol",
        tag: "免费 · MIT",
        body: "无需向量数据库的持久智能体记忆：分层事实、关键词检索、断言校验，密文仅以环境变量指针形式保存。",
        meta: "一个 SKILL.md 加一个标准库脚本 · Python 3.9+",
        href: "https://github.com/vnbochkarev-netizen/vibo-memory-protocol",
        cta: "获取技能",
      },
    ],
  },
};

const steps = [
  { call: "vibo.add", arg: '"client anna", "pays on the 1st"', out: ["→ saved · tier L1", "→ 41 tokens written"] },
  { call: "vibo.search", arg: '"invoice terms"', out: ["→ 4 relevant facts · 66ms", "→ tokens: 148 / 7,840"] },
  { call: "vibo.archive", arg: '"payment terms"', out: ["→ 3 fragments · 12ms", "→ 9 MB → 808 KB"] },
  { call: "vibo.mask", arg: '"sk-live-…"', out: ["→ 2 secrets blocked", "→ value never left the host"] },
];

export default function HomePage() {
  const { language } = useLanguage();
  const text = copy[language];
  const [active, setActive] = useState(0);

  // One skill is called at a time: the link lights up and the terminal answers.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 2800);
    return () => window.clearInterval(id);
  }, []);
  usePageMeta(
    language === "ru" ? "ViBo — модульные skills для ИИ-агентов" : language === "zh" ? "ViBo — AI 智能体的模块化技能" : "ViBo — Modular skills for AI agents",
    text.lead,
  );

  return (
    <SiteShell>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow"><span className="status-dot" /> {text.eyebrow}</div>
              <h1 className="display">{text.titleA} <span className="accent">{text.titleB}</span></h1>
              <p className="hero-copy">{text.lead}</p>
              <div className="hero-actions">
                <a className="button-primary" href="https://t.me/ViBomemorybot" target="_blank" rel="noreferrer">
                  {text.primary} <ArrowRight size={18} />
                </a>
                <Link className="button-secondary" to="/product">{text.secondary}</Link>
              </div>
              <div className="micro-proof">
                {text.proof.map((item) => <span key={item}><Check size={14} /> {item}</span>)}
              </div>
            </div>
            <div className="memory-stage" aria-label="ViBo modular agent network">
              <div className="orbit">
                <span className="orbit-ring orbit-ring-outer" />
                <span className="orbit-ring orbit-ring-inner" />
                <svg className="orbit-links" viewBox="0 0 340 340" aria-hidden="true">
                  <line x1="170" y1="170" x2="170" y2="36" className={`link${active === 0 ? " on" : ""}`} />
                  <line x1="170" y1="170" x2="304" y2="170" className={`link${active === 1 ? " on" : ""}`} />
                  <line x1="170" y1="170" x2="170" y2="304" className={`link${active === 2 ? " on" : ""}`} />
                  <line x1="170" y1="170" x2="36" y2="170" className={`link${active === 3 ? " on" : ""}`} />
                </svg>
                <div className="orbit-core">
                  <span className="orbit-pulse" />
                  <img src={IMAGES.BRAND_DOT_LOGO} alt="" width="72" height="72" />
                </div>
                <div className={`orbit-node node-1${active === 0 ? " is-active" : ""}`}><Database size={15} /> memory</div>
                <div className={`orbit-node node-2${active === 1 ? " is-active" : ""}`}><Search size={15} /> search</div>
                <div className={`orbit-node node-3${active === 2 ? " is-active" : ""}`}><Archive size={15} /> archive</div>
                <div className={`orbit-node node-4${active === 3 ? " is-active" : ""}`}><LockKeyhole size={15} /> privacy</div>
              </div>
              <div className="terminal">
                <div className="terminal-top"><span /><span /><span /></div>
                <div className="terminal-body" key={active}>
                  <p className="terminal-line"><span className="blue">{steps[active].call}</span>({steps[active].arg})</p>
                  {steps[active].out.map((line) => (
                    <p className="terminal-line" key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="metrics-strip">
            {text.metrics.map(([value, label]) => (
              <div className="metric" key={label}><span className="metric-value">{value}</span><span className="metric-label">{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-kicker">{text.sectionKicker}</span>
          <h2 className="section-title">{text.sectionTitle}</h2>
          <p className="section-lead">{text.sectionLead}</p>
          <div className="feature-mosaic">
            <article className="feature-card large">
              <span className="feature-number">01</span>
              <div className="code-window">
                <div>$ vibo add <b>"Anna"</b> <b>"coffee without sugar"</b></div>
                <div>$ vibo find <b>"what does Anna like?"</b></div>
                <div>→ coffee without sugar · relevance 0.94</div>
              </div>
              <div className="feature-icon"><Search size={22} /></div>
              <h3>{text.features[0].title}</h3><p>{text.features[0].body}</p>
            </article>
            <div className="feature-column">
              <article className="feature-card">
                <span className="feature-number">02</span><div className="feature-icon"><Archive size={22} /></div>
                <h3>{text.features[1].title}</h3><p>{text.features[1].body}</p>
              </article>
              <article className="feature-card">
                <span className="feature-number">03</span><div className="feature-icon"><LockKeyhole size={22} /></div>
                <h3>{text.features[2].title}</h3><p>{text.features[2].body}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container">
          <span className="section-kicker">{text.moreKicker}</span>
          <h2 className="section-title">{text.moreTitle}</h2>
          <p className="section-lead">{text.moreLead}</p>
          <div className="more-grid">
            {text.more.map((item) => (
              <article className="more-card" key={item.name}>
                <span className="more-tag">{item.tag}</span>
                <h3 className="more-name">{item.name}</h3>
                <p className="more-body">{item.body}</p>
                <p className="more-meta">{item.meta}</p>
                <a className="more-link" href={item.href} target="_blank" rel="noreferrer">
                  {item.cta} <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-band">
        <div className="container proof-grid">
          <blockquote className="quote">{text.quote}</blockquote>
          <div className="proof-list">
            {text.proofItems.map(([value, label]) => <div className="proof-item" key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <span className="section-kicker"><Sparkles size={14} /> ViBo v1.0.12</span>
            <h2>{text.ctaTitle}</h2><p>{text.ctaBody}</p>
            <div className="hero-actions">
              <a className="button-primary" href="https://wwwvibo.com/download/trial"><Zap size={18} /> Free two-day trial</a>
              <Link className="button-secondary" to="/pricing"><CircleDollarSign size={18} /> Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

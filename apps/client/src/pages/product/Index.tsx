import { Archive, Braces, KeyRound, Network, Search, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { useLanguage, type Language } from "@/components/site/LanguageProvider";
import { usePageMeta } from "@/components/site/usePageMeta";

const content: Record<Language, { kicker: string; title: string; lead: string; layers: [string, string, string][]; stepsTitle: string; steps: [string, string][] }> = {
  en: {
    kicker: "Agent-skill architecture", title: "One agent. Modular capabilities.",
    lead: "ViBo connects reusable skills to agents through a clear capability layer. Memory, search, archives, privacy, and tools become modules that can be discovered, combined, and executed.",
    layers: [
      ["Agent interface", "Connect from Python, CLI, LangChain, LangGraph, Hermes, OpenClaw, n8n, or Dify.", "framework-neutral"],
      ["Skill registry", "Reusable capabilities expose a clear purpose, inputs, outputs, and execution contract.", "modular"],
      ["Orchestration layer", "The agent selects and combines the right skills for each task.", "task-aware"],
      ["Memory skill", "Semantic retrieval and encrypted archives provide compact context when needed.", "50–150×"],
      ["Private execution", "Secrets are masked before prompts and resolved only inside trusted tools.", "AES-256-GCM"],
    ],
    stepsTitle: "Four steps to durable memory",
    steps: [["Save", "Store a fact, document, web result, or secret through one consistent interface."], ["Connect", "Tags and relations build a compact semantic graph around each fact."], ["Retrieve", "Search by meaning and return only the highest-value context."], ["Archive", "Move dormant knowledge out of the active desk without deleting it."]],
  },
  ru: {
    kicker: "Архитектура agent-skills", title: "Один агент. Модульные возможности.",
    lead: "ViBo подключает к агентам переиспользуемые skills через понятный слой возможностей. Память, поиск, архивы, приватность и инструменты становятся модулями, которые можно находить, комбинировать и запускать.",
    layers: [
      ["Интерфейс агента", "Подключение через Python, CLI, LangChain, LangGraph, Hermes, OpenClaw, n8n или Dify.", "любой фреймворк"],
      ["Реестр skills", "Каждая возможность имеет понятное назначение, входы, выходы и контракт выполнения.", "модульно"],
      ["Слой оркестрации", "Агент выбирает и комбинирует нужные skills для конкретной задачи.", "по задаче"],
      ["Skill памяти", "Семантический поиск и зашифрованные архивы дают компактный контекст по запросу.", "50–150×"],
      ["Приватное исполнение", "Секреты маскируются до промпта и раскрываются только внутри доверенных инструментов.", "AES-256-GCM"],
    ],
    stepsTitle: "Четыре шага к долговечной памяти",
    steps: [["Сохранить", "Добавьте факт, документ, веб-результат или секрет через единый интерфейс."], ["Связать", "Теги и отношения создают компактный семантический граф."], ["Найти", "Поиск по смыслу возвращает только самый ценный контекст."], ["Архивировать", "Уберите неактивные знания со стола, не удаляя их."]],
  },
  zh: {
    kicker: "产品架构", title: "一个记忆层。清晰的边界。",
    lead: "ViBo 让活跃上下文保持快速、归档保持完整、机密保持隔离。智能体看到有用事实，而不是整个存储层。",
    layers: [
      ["智能体接口", "技能、Python API、CLI、LangChain、LangGraph、Hermes、OpenClaw、n8n 与 Dify。", "框架无关"],
      ["语义检索", "基于含义的搜索返回少量排序后的关联事实。", "4–8 条事实"],
      ["活跃记忆", "当前知识留在桌面层，提供快速且可预测的检索。", "始终快速"],
      ["动态归档", "沉睡事实与文档在加密 .vibo 文件中保持可检索。", "最高 99.7%"],
      ["隐私边界", "在提示词到达 LLM 前，机密已被加密并掩码。", "AES-256-GCM"],
    ],
    stepsTitle: "构建持久记忆的四个步骤",
    steps: [["保存", "通过一致的接口存储事实、文档、网页结果或机密。"], ["连接", "标签与关系围绕每条事实构建紧凑的语义图。"], ["检索", "按含义搜索，只返回最高价值的上下文。"], ["归档", "将沉睡知识移出活跃桌面，但不删除。"]],
  },
};

const icons = [Braces, Search, Network, Archive, KeyRound];

export default function ProductPage() {
  const { language } = useLanguage();
  const text = content[language];
  usePageMeta(`ViBo — ${text.kicker}`, text.lead);
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">{text.kicker}</span><h1 className="page-title">{text.title}</h1><p className="page-lead">{text.lead}</p>
          <div className="architecture">
            {text.layers.map(([title, body, tag], index) => {
              const Icon = icons[index];
              return <article className="architecture-layer" key={title}><span className="layer-label"><Icon size={18} /> L{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div><span className="layer-tag">{tag}</span></article>;
            })}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="section-kicker"><Sparkles size={14} /> Workflow</span><h2 className="section-title">{text.stepsTitle}</h2>
          <div className="steps">{text.steps.map(([title, body], index) => <article className="step" key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>
    </SiteShell>
  );
}

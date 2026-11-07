import { Check, FileKey2, HardDrive, KeyRound } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { useLanguage, type Language } from "@/components/site/LanguageProvider";
import { usePageMeta } from "@/components/site/usePageMeta";

const content: Record<Language, { kicker: string; title: string; lead: string; cards: { title: string; body: string; points: string[] }[] }> = {
  en: {
    kicker: "Private by architecture",
    title: "The model never needs your secrets.",
    lead: "ViBo keeps memory on your machine, encrypts sensitive values, and masks them before a prompt leaves the agent boundary.",
    cards: [
      { title: "Local-first storage", body: "Your memory files stay with the agent rather than being copied into a vendor-owned cloud database.", points: ["Portable .web and .vibo files", "No framework lock-in", "Explicit archive operations"] },
      { title: "Authenticated encryption", body: "Sensitive records use AES-256-GCM so confidentiality and tamper detection are handled together.", points: ["Per-agent key", "Encrypted at rest", "Integrity verification"] },
      { title: "Prompt masking", body: "Secrets become stable placeholders before the prompt reaches any LLM and are restored only in the trusted agent layer.", points: ["LLM sees 🔒[name]", "Keys stay out of logs", "User-only retrieval"] },
    ],
  },
  ru: {
    kicker: "Приватность в архитектуре",
    title: "Модели не нужны ваши секреты.",
    lead: "ViBo хранит память на вашем устройстве, шифрует чувствительные значения и маскирует их до выхода промпта за доверенный контур агента.",
    cards: [
      { title: "Локальное хранение", body: "Файлы памяти остаются рядом с агентом и не копируются в облачную базу поставщика.", points: ["Переносимые файлы .web и .vibo", "Нет привязки к фреймворку", "Явные операции архива"] },
      { title: "Аутентифицированное шифрование", body: "Чувствительные записи используют AES-256-GCM: конфиденциальность и контроль целостности работают вместе.", points: ["Ключ конкретного агента", "Шифрование при хранении", "Проверка целостности"] },
      { title: "Маскирование промптов", body: "Секреты заменяются стабильными плейсхолдерами до отправки в LLM и восстанавливаются только в доверенном слое агента.", points: ["LLM видит 🔒[name]", "Ключи не попадают в логи", "Доступ только пользователю"] },
    ],
  },
  zh: {
    kicker: "架构级隐私",
    title: "模型无需看到你的机密。",
    lead: "ViBo 将记忆保留在你的机器上，加密敏感值，并在提示词离开智能体边界前进行掩码。",
    cards: [
      { title: "本地优先存储", body: "记忆文件留在智能体侧，而不是复制到供应商拥有的云数据库。", points: ["可移植 .web 与 .vibo 文件", "无框架锁定", "明确的归档操作"] },
      { title: "认证加密", body: "敏感记录使用 AES-256-GCM，同时提供机密性与篡改检测。", points: ["每个智能体独立密钥", "静态加密", "完整性校验"] },
      { title: "提示词掩码", body: "机密在到达任何 LLM 前被替换为稳定占位符，只在可信智能体层恢复。", points: ["LLM 只看到 🔒[name]", "密钥不进入日志", "仅用户可检索"] },
    ],
  },
};

const icons = [HardDrive, FileKey2, KeyRound];

export default function SecurityPage() {
  const { language } = useLanguage();
  const text = content[language];
  usePageMeta(`ViBo — ${text.kicker}`, text.lead);
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">{text.kicker}</span><h1 className="page-title">{text.title}</h1><p className="page-lead">{text.lead}</p>
          <div className="security-grid">
            {text.cards.map((card, index) => {
              const Icon = icons[index];
              return <article className="security-card" key={card.title}><Icon size={26} /><h3>{card.title}</h3><p>{card.body}</p><ul>{card.points.map((point) => <li key={point}><Check size={16} /> {point}</li>)}</ul></article>;
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

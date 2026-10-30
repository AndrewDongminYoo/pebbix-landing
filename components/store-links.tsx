import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { sourceLicenseUrl, sourceUrl } from "@/lib/site";

const buttonClass =
  "interactive-link inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-base font-semibold active:translate-y-px";

export function StoreLinks({ locale, align }: { locale: Locale; align: "start" | "center" }) {
  const { source } = getDictionary(locale);

  return (
    <div className={`space-y-4 ${align === "center" ? "text-center" : ""}`}>
      <p className="text-pretty text-sm leading-6 text-ink-dim">{source.status}</p>
      <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <a
          className={`${buttonClass} bg-bubble-yellow text-surface hover:bg-bubble-yellow/90`}
          href={sourceUrl}
        >
          {source.browse}
        </a>
        <a
          className={`${buttonClass} border border-edge text-ink hover:border-bubble-yellow hover:text-bubble-yellow`}
          href={sourceLicenseUrl}
        >
          {source.license}
        </a>
      </div>
      <p className="text-pretty text-sm leading-6 text-ink-dim/85">{source.licensing}</p>
    </div>
  );
}

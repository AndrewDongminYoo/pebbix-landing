import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { appStoreUrl, playStoreUrl } from "@/lib/site";

const buttonClass =
  "interactive-link inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-base font-semibold active:translate-y-px";

/**
 * Renders the store buttons once `lib/site.ts` carries the URLs, and an honest
 * pre-launch line until then. Filling in the two constants is the whole change.
 */
export function StoreLinks({ locale, align }: { locale: Locale; align: "start" | "center" }) {
  const dict = getDictionary(locale);
  const links = [
    { href: appStoreUrl, label: dict.store.appStore },
    { href: playStoreUrl, label: dict.store.playStore },
  ].filter((link): link is { href: string; label: string } => link.href !== null);

  if (links.length === 0) {
    return (
      <p
        className={`rounded-xl border border-edge bg-surface-raised/50 px-4 py-3 text-sm text-ink-dim ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {dict.store.pending}
      </p>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
      {links.map((link, index) => (
        <a
          className={
            index === 0
              ? `${buttonClass} bg-bubble-yellow text-surface hover:bg-bubble-yellow/90`
              : `${buttonClass} border border-edge text-ink hover:border-bubble-yellow hover:text-bubble-yellow`
          }
          href={link.href}
          key={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

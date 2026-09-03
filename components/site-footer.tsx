import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

const footerNavLinkClass =
  "interactive-link inline-flex min-h-11 items-center rounded-lg px-3 text-ink-dim hover:bg-white/5 hover:text-ink";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <footer className="mt-16 border-t border-edge bg-surface-raised/25 sm:mt-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-ink-dim sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p>{dict.footer.developer}</p>
          <p>
            {dict.footer.contact}:{" "}
            <a
              className="interactive-link rounded-sm underline-offset-4 hover:text-ink hover:underline"
              href="mailto:ydm2790@gmail.com"
            >
              ydm2790@gmail.com
            </a>
          </p>
        </div>
        <nav className="-mx-3 flex flex-wrap gap-1">
          <Link className={footerNavLinkClass} href={`/${locale}/privacy`}>
            {dict.footer.privacy}
          </Link>
          <Link className={footerNavLinkClass} href={`/${locale}/terms`}>
            {dict.footer.terms}
          </Link>
          <a className={footerNavLinkClass} href="https://github.com/AndrewDongminYoo" rel="me">
            GitHub
          </a>
          <Link
            className={footerNavLinkClass}
            href={dict.footer.languageHref}
            hrefLang={locale === "ko" ? "en" : "ko"}
          >
            {dict.footer.language}
          </Link>
        </nav>
      </div>
      <p className="pb-8 text-center text-xs text-ink-dim/85">© 2026 donminzzi lab</p>
    </footer>
  );
}

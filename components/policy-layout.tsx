import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Locale } from "@/lib/i18n";

export async function PolicyLayout({ locale, doc }: { locale: Locale; doc: "privacy" | "terms" }) {
  const filePath = path.join(process.cwd(), "content", "legal", `${doc}.${locale}.md`);
  const markdown = await fs.readFile(filePath, "utf8");
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-16 pt-8 sm:px-6 sm:pt-16">
      <Link
        href={`/${locale}`}
        className="interactive-link -ml-3 inline-flex min-h-11 items-center rounded-lg px-3 font-mono text-sm text-ink-dim hover:bg-white/5 hover:text-ink"
      >
        ← Pebbix
      </Link>
      <article className="policy policy-surface mt-6 sm:mt-8">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}

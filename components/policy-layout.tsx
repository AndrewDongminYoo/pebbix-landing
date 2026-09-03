import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Locale } from "@/lib/i18n";

export async function PolicyLayout({ locale, doc }: { locale: Locale; doc: "privacy" | "terms" }) {
  const filePath = path.join(process.cwd(), "content", "legal", `${doc}.${locale}.md`);
  const markdown = await fs.readFile(filePath, "utf8");
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16 pt-20">
      <Link href={`/${locale}`} className="font-mono text-sm text-ink-dim hover:text-ink">
        ← Pebbix
      </Link>
      <article className="policy mt-10">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
}

import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

const bubbles = [
  "bg-bubble-red",
  "bg-bubble-yellow",
  "bg-bubble-green",
  "bg-bubble-blue",
  "bg-bubble-purple",
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="flex gap-3" aria-hidden>
        {bubbles.map((colour) => (
          <span key={colour} className={`size-8 rounded-full ${colour}`} />
        ))}
      </div>
      <h1 className="mt-10 text-4xl font-bold">Pebbix</h1>
      <p className="mt-4 text-lg text-ink-dim">{dict.home.tagline}</p>
      <p className="mt-2 max-w-md text-sm text-ink-dim">{dict.home.body}</p>
    </main>
  );
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import pebbixIcon from "../icon.png";

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
    <main className="hero-backdrop relative isolate flex w-full flex-1 items-center overflow-hidden px-6 py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:gap-16">
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <div className="flex gap-3" aria-hidden>
            {bubbles.map((colour) => (
              <span key={colour} className={`hero-bubble size-10 rounded-full ${colour}`} />
            ))}
          </div>
          <h1 className="mt-8 text-balance text-5xl font-bold tracking-tight sm:text-6xl">Pebbix</h1>
          <p className="mt-5 text-balance text-xl font-medium text-ink sm:text-2xl">
            {dict.home.tagline}
          </p>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-ink-dim">
            {dict.home.body}
          </p>
        </div>
        <div className="hero-icon-shell order-1 mx-auto w-full max-w-40 sm:max-w-56 lg:order-2 lg:max-w-sm">
          <Image
            alt=""
            className="hero-icon block h-auto w-full"
            preload
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 224px, 160px"
            src={pebbixIcon}
          />
        </div>
      </div>
    </main>
  );
}

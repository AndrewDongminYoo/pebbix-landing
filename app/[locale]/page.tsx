import Image from "next/image";
import { notFound } from "next/navigation";
import { StoreLinks } from "@/components/store-links";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import bubbleBlue from "@/assets/bubbles/blue.png";
import bubbleGreen from "@/assets/bubbles/green.png";
import bubbleOrange from "@/assets/bubbles/orange.png";
import bubblePurple from "@/assets/bubbles/purple.png";
import bubbleRed from "@/assets/bubbles/red.png";
import bubbleYellow from "@/assets/bubbles/yellow.png";
import nebula from "@/assets/nebula.png";
import pebbixIcon from "../icon.png";

// Ordered as the game declares them in `BubbleColor`.
const bubbleSprites = [
  { key: "red", src: bubbleRed },
  { key: "yellow", src: bubbleYellow },
  { key: "green", src: bubbleGreen },
  { key: "blue", src: bubbleBlue },
  { key: "purple", src: bubblePurple },
  { key: "orange", src: bubbleOrange },
];

// Bubbles adrift around the mascot. Green, purple, and orange are the three the
// app icon itself does not already show.
const driftingBubbles = [
  { src: bubbleGreen, position: "bottom-[13%] left-[8%] w-[17%]", delay: "0s" },
  {
    src: bubblePurple,
    position: "top-[11%] right-[9%] w-[14%]",
    delay: "1.4s",
  },
  {
    src: bubbleOrange,
    position: "bottom-[26%] right-[13%] w-[11%]",
    delay: "2.8s",
  },
];

// How much of the aim guide survives at each ceiling depth, as a share of the
// full guide. The last row keeps no bar because the guide is gone entirely.
const aimShare = [100, 66, 33, 0];

const sectionClass = "reveal mx-auto w-full max-w-5xl px-6 py-20 sm:py-28";
const headingClass = "text-balance text-3xl font-bold tracking-tight sm:text-4xl";
const leadClass = "mt-4 max-w-2xl text-pretty text-base leading-7 text-ink-dim";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { rules, pressure, symbols, closing } = dict.home;
  const [leadRule, ...restRules] = rules.items;

  return (
    <main className="flex w-full flex-1 flex-col">
      <section className="hero-backdrop relative isolate w-full overflow-hidden px-6 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pt-24">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,25rem)] lg:gap-16">
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Pebbix</h1>
            <p className="mt-5 text-balance text-xl font-medium text-ink sm:text-2xl">
              {dict.home.tagline}
            </p>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-ink-dim">
              {dict.home.body}
            </p>
            <div className="mt-8 w-full max-w-sm lg:max-w-none">
              <StoreLinks align="start" locale={locale} />
            </div>
          </div>
          <div className="key-art relative order-1 mx-auto aspect-[4/5] w-full max-w-60 overflow-hidden sm:max-w-72 lg:order-2 lg:max-w-none">
            <Image
              alt=""
              className="object-cover"
              fill
              preload
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 288px, 240px"
              src={nebula}
            />
            <Image
              alt={dict.home.keyArtAlt}
              className="key-art-tile absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2"
              sizes="(min-width: 1024px) 224px, 160px"
              src={pebbixIcon}
            />
            {driftingBubbles.map((bubble) => (
              <Image
                alt=""
                className={`drift absolute ${bubble.position}`}
                key={bubble.position}
                sizes="72px"
                src={bubble.src}
                style={{ animationDelay: bubble.delay }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>{rules.heading}</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          <div className="border-t border-edge pt-6 md:col-span-2">
            <h3 className="text-xl font-semibold sm:text-2xl">{leadRule.title}</h3>
            <p className="mt-3 max-w-2xl text-pretty leading-7 text-ink-dim">{leadRule.body}</p>
          </div>
          {restRules.map((rule) => (
            <div className="border-t border-edge pt-6" key={rule.title}>
              <h3 className="text-lg font-semibold">{rule.title}</h3>
              <p className="mt-3 text-pretty leading-7 text-ink-dim">{rule.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>{pressure.heading}</h2>
        <p className={leadClass}>{pressure.body}</p>
        <div className="panel mt-10 px-5 py-2 sm:px-8 sm:py-4">
          <div
            aria-hidden
            className="hidden border-b border-edge py-4 text-xs text-ink-dim sm:grid sm:grid-cols-[7rem_1fr_1fr_1.2fr] sm:gap-6"
          >
            <span>{pressure.labels.depth}</span>
            <span>{pressure.labels.descent}</span>
            <span>{pressure.labels.colours}</span>
            <span>{pressure.labels.aim}</span>
          </div>
          <ul className="divide-y divide-edge">
            {pressure.rows.map((row, index) => (
              <li
                className="grid grid-cols-2 gap-x-6 gap-y-3 py-6 sm:grid-cols-[7rem_1fr_1fr_1.2fr] sm:items-start sm:gap-6"
                key={row.depth}
              >
                <p className="col-span-2 text-lg font-semibold text-ink sm:col-span-1">
                  {row.depth}
                </p>
                {/* One list per cell so every cell is a direct grid item. A single
                    `dl` spanning the row would need `display: contents`, which
                    drops its subtree out of the accessibility tree. */}
                <dl>
                  <dt className="text-xs text-ink-dim sm:sr-only">{pressure.labels.descent}</dt>
                  <dd className="mt-1 text-ink sm:mt-0">{row.descent}</dd>
                </dl>
                <dl>
                  <dt className="text-xs text-ink-dim sm:sr-only">{pressure.labels.colours}</dt>
                  <dd className="mt-1 text-ink sm:mt-0">{row.colours}</dd>
                </dl>
                <dl className="col-span-2 sm:col-span-1">
                  <dt className="text-xs text-ink-dim sm:sr-only">{pressure.labels.aim}</dt>
                  <dd className="mt-1 text-ink sm:mt-0">
                    {row.aim}
                    {aimShare[index] > 0 ? (
                      <span
                        aria-hidden
                        className="aim-bar mt-3"
                        style={{ width: `${aimShare[index]}%` }}
                      />
                    ) : null}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>{symbols.heading}</h2>
        <p className={leadClass}>{symbols.body}</p>
        <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-6">
          {bubbleSprites.map((bubble, index) => (
            <li
              className={`flex flex-col items-center gap-3 ${index % 2 === 1 ? "sm:mt-8" : ""}`}
              key={bubble.key}
            >
              <Image alt="" className="w-20 max-w-full sm:w-24" sizes="80px" src={bubble.src} />
              <span className="text-center text-sm text-ink-dim">{symbols.names[bubble.key]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${sectionClass} flex flex-col items-center text-center`}>
        <h2 className={headingClass}>{closing.heading}</h2>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-ink-dim">
          {closing.body}
        </p>
        <p className="mt-6 max-w-2xl text-pretty text-sm leading-6 text-ink-dim/85">
          {closing.scope}
        </p>
        <div className="mt-10 w-full max-w-md">
          <StoreLinks align="center" locale={locale} />
        </div>
      </section>
    </main>
  );
}

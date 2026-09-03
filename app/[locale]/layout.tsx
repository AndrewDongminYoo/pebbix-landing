import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({ variable: "--font-noto-sans-kr", subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: siteUrl,
    title: { default: dict.meta.title, template: "%s · Pebbix" },
    description: dict.meta.description,
    openGraph: {
      type: "website",
      siteName: "Pebbix",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-surface font-sans text-ink">
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}

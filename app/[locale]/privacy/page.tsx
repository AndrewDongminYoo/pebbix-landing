import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyLayout } from "@/components/policy-layout";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).footer.privacy,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { ko: "/ko/privacy", en: "/en/privacy", "x-default": "/ko/privacy" },
    },
  };
}

export default async function uprivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PolicyLayout locale={locale} doc="privacy" />;
}

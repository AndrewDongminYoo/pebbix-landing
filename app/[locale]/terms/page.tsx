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
    title: getDictionary(locale).footer.terms,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: { ko: "/ko/terms", en: "/en/terms", "x-default": "/ko/terms" },
    },
  };
}

export default async function utermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PolicyLayout locale={locale} doc="terms" />;
}

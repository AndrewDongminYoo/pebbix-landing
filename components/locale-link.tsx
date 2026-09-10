"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LocaleLink({
  className,
  fallbackHref,
  label,
  locale,
}: {
  className: string;
  fallbackHref: string;
  label: string;
  locale: Locale;
}) {
  const pathname = usePathname();
  const currentPrefix = `/${locale}`;
  const targetLocale = locale === "ko" ? "en" : "ko";
  const targetPrefix = `/${targetLocale}`;
  const href = pathname.startsWith(`${currentPrefix}/`)
    ? `${targetPrefix}${pathname.slice(currentPrefix.length)}`
    : fallbackHref;

  return (
    <Link className={className} href={href} hrefLang={targetLocale}>
      {label}
    </Link>
  );
}

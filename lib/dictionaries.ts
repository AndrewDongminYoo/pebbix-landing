import type { Locale } from "./i18n";

export type Dictionary = {
  meta: { title: string; description: string };
  home: { tagline: string; body: string };
  footer: {
    developer: string;
    contact: string;
    privacy: string;
    terms: string;
    language: string;
    languageHref: string;
  };
};

// Deliberately small. This site exists so the stores and the app have a public
// policy URL to point at (issue #37); the marketing surface — screenshots,
// features, store badges — belongs to issue #45 and lands with the listing.
const dictionaries: Record<Locale, Dictionary> = {
  ko: {
    meta: {
      title: "Pebbix",
      description: "같은 색 버블을 세 개 이상 맞춰 터뜨리는 퍼즐 게임.",
    },
    home: {
      tagline: "같은 색 셋을 맞춰 터뜨리세요.",
      body: "천장이 내려오기 전에 버블을 정리하는 싱글 플레이 퍼즐 게임입니다.",
    },
    footer: {
      developer: "돈민찌랩 · 대표 유동민",
      contact: "문의",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      language: "English",
      languageHref: "/en",
    },
  },
  en: {
    meta: {
      title: "Pebbix",
      description: "A puzzle game about matching three or more bubbles of the same colour.",
    },
    home: {
      tagline: "Match three of a colour to pop them.",
      body: "A single-player puzzle game about clearing the board before the ceiling closes in.",
    },
    footer: {
      developer: "donminzzi lab · Dongmin Yu",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      language: "한국어",
      languageHref: "/ko",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

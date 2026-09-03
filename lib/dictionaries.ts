import type { Locale } from "./i18n";

/** One row of the descent ladder. Values mirror the game's pressure table. */
export type PressureRow = {
  depth: string;
  descent: string;
  colours: string;
  aim: string;
};

export type Dictionary = {
  meta: { title: string; description: string };
  home: {
    tagline: string;
    body: string;
    keyArtAlt: string;
    rules: {
      heading: string;
      items: { title: string; body: string }[];
    };
    pressure: {
      heading: string;
      body: string;
      labels: { depth: string; descent: string; colours: string; aim: string };
      rows: PressureRow[];
    };
    symbols: {
      heading: string;
      body: string;
      names: Record<string, string>;
    };
    closing: { heading: string; body: string; scope: string };
  };
  store: { pending: string; appStore: string; playStore: string };
  footer: {
    developer: string;
    contact: string;
    privacy: string;
    terms: string;
    language: string;
    languageHref: string;
  };
};

// Every gameplay number below mirrors `bubble_shooter/lib/game/bubble_shooter.dart`
// (`shotsPerDescent`, `minimumShotsPerDescent`, `_pressureFor`). Re-check them
// against the game source before a store submission; see README.
const dictionaries: Record<Locale, Dictionary> = {
  ko: {
    meta: {
      title: "Pebbix",
      description:
        "천장이 내려오기 전에 같은 색 버블 셋을 맞춰 터뜨리는 싱글 플레이 우주 퍼즐 게임.",
    },
    home: {
      tagline: "같은 색 셋을 맞춰 터뜨리세요.",
      body: "천장이 내려오기 전에 보드를 비우는 싱글 플레이 퍼즐입니다. 계정도 로그인도 필요하지 않습니다.",
      keyArtAlt: "버블 두 개를 안고 있는 외계인 마스코트가 그려진 페빅스 앱 아이콘.",
      rules: {
        heading: "규칙은 세 줄이면 끝납니다",
        items: [
          {
            title: "끌어서 조준하고, 놓으면 발사됩니다",
            body: "발사대는 화면 아래에 고정되어 있고, 화면은 항상 세로입니다. 익혀야 할 조작은 이것 하나뿐입니다.",
          },
          {
            title: "벽에 튕겨서 각도를 만듭니다",
            body: "반사 경로와 버블이 자리 잡을 칸은 화면이 움직이기 전에 이미 전부 계산됩니다. 같은 판에서 같은 각도로 쏘면 언제나 같은 곳에 붙습니다.",
          },
          {
            title: "셋이 모이면 터지고, 매달려 있던 것도 함께 떨어집니다",
            body: "같은 색이 셋 이상 붙으면 사라집니다. 그 결과 천장에서 떨어져 나온 뭉치는 색과 상관없이 통째로 낙하합니다.",
          },
        ],
      },
      pressure: {
        heading: "천장이 내려올수록 도움이 줄어듭니다",
        body: "여섯 발마다 천장이 한 줄 내려옵니다. 그리고 내려온 깊이에 따라 하강 간격과 색의 가짓수, 조준선이 동시에 불리해집니다.",
        labels: {
          depth: "천장 깊이",
          descent: "하강 간격",
          colours: "등장 색",
          aim: "조준선",
        },
        rows: [
          {
            depth: "0줄",
            descent: "6발",
            colours: "4색",
            aim: "궤적과 착지점",
          },
          {
            depth: "1줄",
            descent: "5발",
            colours: "4색",
            aim: "궤적만",
          },
          {
            depth: "2~3줄",
            descent: "4발에서 3발",
            colours: "5색",
            aim: "방향만",
          },
          {
            depth: "4줄부터",
            descent: "3발",
            colours: "6색",
            aim: "없음",
          },
        ],
      },
      symbols: {
        heading: "색만으로 구분하지 않아도 됩니다",
        body: "여섯 가지 버블에는 각각 다른 문양이 새겨져 있습니다. 색을 구별하기 어려운 화면에서도, 색각 이상이 있어도 판을 그대로 읽을 수 있습니다.",
        names: {
          red: "별",
          yellow: "초승달",
          green: "삼각형",
          blue: "고리 행성",
          purple: "마름모",
          orange: "번개",
        },
      },
      closing: {
        heading: "로그인 없이, 기기 안에서",
        body: "계정을 만들 필요가 없고 최고 점수는 기기에만 남습니다. 한국어와 영어를 지원하며 기기 언어를 따라갑니다. 음악과 효과음, 진동은 각각 끌 수 있습니다.",
        scope:
          "v1.0은 끝없는 서바이벌 한 모드입니다. 레벨 모드와 리더보드, 클라우드 저장은 아직 들어 있지 않습니다.",
      },
    },
    store: {
      pending: "App Store와 Google Play 출시를 준비하고 있습니다.",
      appStore: "App Store에서 받기",
      playStore: "Google Play에서 받기",
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
      description:
        "A single-player space puzzle about matching three or more bubbles of the same colour before the ceiling closes in.",
    },
    home: {
      tagline: "Match three of a colour to pop them.",
      body: "A single-player puzzle about clearing the board before the ceiling closes in. No account, no sign-in.",
      keyArtAlt: "The Pebbix app icon: the alien mascot holding two bubbles.",
      rules: {
        heading: "Three lines of rules",
        items: [
          {
            title: "Drag to aim, release to shoot",
            body: "The launcher stays at the bottom of the screen, and the screen is always portrait. That is the whole control scheme.",
          },
          {
            title: "Bounce off the walls to build an angle",
            body: "The reflected path and the cell the bubble snaps into are solved before anything moves on screen. The same angle on the same board always lands in the same place.",
          },
          {
            title: "Three pop, and whatever hung from them falls",
            body: "Three or more of a colour disappear. Any cluster left dangling from the ceiling drops with them, whatever colour it is.",
          },
        ],
      },
      pressure: {
        heading: "The lower the ceiling, the less help you get",
        body: "The ceiling descends one row every six shots. How far it has descended then decides the descent interval, how many colours appear, and how much of the aim guide you keep.",
        labels: {
          depth: "Ceiling depth",
          descent: "Descends every",
          colours: "Colours in play",
          aim: "Aim guide",
        },
        rows: [
          {
            depth: "0 rows",
            descent: "6 shots",
            colours: "4",
            aim: "Path and landing",
          },
          {
            depth: "1 row",
            descent: "5 shots",
            colours: "4",
            aim: "Path only",
          },
          {
            depth: "2 to 3 rows",
            descent: "4 then 3 shots",
            colours: "5",
            aim: "Direction only",
          },
          {
            depth: "4 rows on",
            descent: "3 shots",
            colours: "6",
            aim: "None",
          },
        ],
      },
      symbols: {
        heading: "You never have to go by colour alone",
        body: "Each of the six bubbles carries its own engraved symbol. The board stays readable on a washed-out screen, and for players who cannot tell the colours apart.",
        names: {
          red: "Star",
          yellow: "Crescent",
          green: "Triangle",
          blue: "Ringed planet",
          purple: "Diamond",
          orange: "Bolt",
        },
      },
      closing: {
        heading: "No sign-in, nothing leaves the device",
        body: "There is no account to create, and your best score stays on the device. Korean and English are supported, following the device language. Music, sound effects, and haptics each turn off on their own.",
        scope:
          "v1.0 is one endless survival mode. Level mode, leaderboards, and cloud save are not in it yet.",
      },
    },
    store: {
      pending: "Coming to the App Store and Google Play.",
      appStore: "Get it on the App Store",
      playStore: "Get it on Google Play",
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

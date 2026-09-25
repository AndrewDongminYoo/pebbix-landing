# pebbix-landing

The public site for **Pebbix**, the bubble-shooter puzzle game built in [`bubble_shooter`](https://github.com/AndrewDongminYoo/bubble_shooter).

It exists first to give the app and the store listings a public policy URL to point at (bubble_shooter issue #37).
The marketing surface — screenshots, feature copy, store badges — belongs to issue #45 and lands with the listing.

## What is here

| Route               | Source                              |
| ------------------- | ----------------------------------- |
| `/{locale}`         | `app/[locale]/page.tsx`             |
| `/{locale}/privacy` | `content/legal/privacy.{locale}.md` |
| `/{locale}/terms`   | `content/legal/terms.{locale}.md`   |

Locales are `ko` (default) and `en`; `/` redirects to `/ko`.
The legal pages are markdown rendered through `components/policy-layout.tsx`, so editing policy means editing markdown and nothing else.

The app links to `/{locale}/privacy` from its settings screen, choosing the segment the same way it chooses its own locale — Korean for a Korean UI, English otherwise.

## Where it is deployed

Vercel project `pebbix` under `donminzzi-projects`, served at **<https://pebbix.donminzzi.kr>**.

DNS lives in Route 53 (hosted zone `Z02352673DHDBPOH9A6Q7`), not in Vercel — the apex `donminzzi.kr` keeps AWS nameservers.
The subdomain is a CNAME, matching every sibling site:

```log
pebbix.donminzzi.kr.  CNAME  e59e9e18f9c5901a.vercel-dns-017.com.
```

Vercel's CLI suggests an A record instead; the CNAME is what the other six subdomains on this zone use, and it is what was applied here.

## Running it

```sh
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # static export of all six routes
```

## Keeping the policy honest

The privacy policy describes the data flow in the current `bubble_shooter` main branch, including Crashlytics diagnostics while Firebase Analytics collection is disabled.
Before any app release:

- Compare the policy with the release candidate.
- Update and publish both localized policies before shipping if the release adds or removes a data flow.
- Verify the live policy pages and the Play Data Safety and App Store Privacy declarations against the same release candidate.

`bubble_shooter` issue #37 carries the inventory and tracks the remaining store-declaration checks. Planned data flows must not appear in the public policy before their implementation ships.

## Keeping the gameplay copy honest

The home page publishes the game's own tuning table: the ceiling descends every six shots, the interval tightens to three, the colour count climbs from four to six, and the aim guide degrades from "path and landing" to nothing.
Those numbers are mirrored from `bubble_shooter/lib/game/bubble_shooter.dart` (`shotsPerDescent`, `minimumShotsPerDescent`, and the `_pressureFor` switch), and the six engraved symbols are read off the sprites in `bubble_shooter/assets/images/`.

The concept spec says these constants ship hard-coded and get retuned in v1.1 from real data, so **re-check the table against the game source before a store submission**; `bubble_shooter` issue #45 requires that in-app strings, screenshots, and descriptions agree.

The art in `assets/` is copied from the game's own `assets/images/` (nebula background and the six bubble sprites, downscaled and quantised).
It is key art, not gameplay screenshots. Real screenshots belong to issue #45 and land with the store listing.

## Conventions

Shaped after the sibling landing sites — `prism-defense-landing`, `quest-keeper-landing`, `ttush-push-landing` — which use the same `content/legal/*.{en,ko}.md` layout served from `app/[locale]/`.
The `pnpm-workspace.yaml` security overrides are carried over from those sites for the same reasons noted there.

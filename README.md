# pebbix-landing

The public site for **Pebbix**, the bubble-shooter puzzle game built in [`bubble_shooter`](https://github.com/AndrewDongminYoo/bubble_shooter).

It exists first to give the app and the store listings a public policy URL to point at (bubble_shooter issue #37).
The marketing surface — screenshots, feature copy, store badges — belongs to issue #45 and lands with the listing.

## What is here

| Route | Source |
| ----- | ------ |
| `/{locale}` | `app/[locale]/page.tsx` |
| `/{locale}/privacy` | `content/legal/privacy.{locale}.md` |
| `/{locale}/terms` | `content/legal/terms.{locale}.md` |

Locales are `ko` (default) and `en`; `/` redirects to `/ko`.
The legal pages are markdown rendered through `components/policy-layout.tsx`, so editing policy means editing markdown and nothing else.

The app links to `/{locale}/privacy` from its settings screen, choosing the segment the same way it chooses its own locale — Korean for a Korean UI, English otherwise.

## Running it

```sh
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # static export of all six routes
```

## Keeping the policy honest

The privacy policy describes the **v1.0 release configuration**, which includes SDKs the app does not carry yet: Firebase Analytics and Crashlytics (bubble_shooter #40), in-app purchase (#36), and iOS App Tracking Transparency (#38).
All three are due before submission.

**If the app ships without one of them, the policy over-declares and has to be trimmed first.**
Re-check it against the app's real data flow at submission time; `bubble_shooter` issue #37 carries the inventory that check reads from.

## Conventions

Shaped after the sibling landing sites — `prism-defense-landing`, `quest-keeper-landing`, `ttush-push-landing` — which use the same `content/legal/*.{en,ko}.md` layout served from `app/[locale]/`.
The `pnpm-workspace.yaml` security overrides are carried over from those sites for the same reasons noted there.

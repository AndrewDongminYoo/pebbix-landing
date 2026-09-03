# Pebbix Landing Agent Guide

## Scope

These instructions apply to the entire `pebbix-landing` repository.
More specific nested `AGENTS.md` files override this file for their subtree.

This repository contains the public website for the Pebbix game in `../bubble_shooter`.
Treat the game repository as a separate Git scope.
Do not modify it unless the operator explicitly includes it in the task.

## Product Boundary

Keep this site focused on the public Pebbix landing surface, legal documents, and store-facing links.
Do not expand a legal or maintenance task into a marketing redesign.

Verify gameplay claims and data-flow disclosures against the current game source before you change public copy.
Do not infer product behavior from another landing site.
Revalidate deployment details and store URLs before you report them as current.

## Stack and Architecture

Use the existing Next.js App Router, React, strict TypeScript, Tailwind CSS, and pnpm setup.
Prefer Server Components.
Add a Client Component only when the feature requires browser state or browser-only APIs.

Keep responsibilities in their current locations:

- `app/[locale]/` defines localized routes and metadata.
- `components/` contains shared presentation components.
- `lib/i18n.ts` defines supported locales and the default locale.
- `lib/dictionaries.ts` contains localized interface and marketing copy.
- `content/legal/` contains the legal Markdown sources.
- `lib/site.ts` contains public site and store URLs.
- `assets/` contains game art copied from the game repository, imported through the `@/` alias.

Patch a source file before you patch a consumer.
Do not edit `.next/`, `out/`, `next-env.d.ts`, or other generated output.
Do not add a dependency unless the approved change cannot use the platform, framework, or installed packages.

## Localization and Legal Content

The supported locales are Korean (`ko`) and English (`en`).
Korean is the default locale.
Keep the localized route set and navigation behavior consistent across both locales.

Edit home-page copy in `lib/dictionaries.ts`.
Edit privacy and terms text in the matching `content/legal/*.{ko,en}.md` files.
Treat each locale as an intentional user-facing surface.
Do not mechanically translate or replace intentional Korean text.

Legal changes require evidence from the current product behavior and disclosures.
Preserve the meaning of existing legal text unless the task explicitly changes that meaning.

## Implementation Discipline

Make the smallest coherent change that satisfies the requested outcome.
Preserve existing routes and public URLs unless the request explicitly changes them.
Do not refactor adjacent files or restyle unrelated components.
Remove only imports, variables, or helpers that the current change makes unused.

Use `next/link` for internal navigation.
Preserve semantic HTML, keyboard access, visible focus, and readable contrast for UI changes.
Check both narrow and wide layouts when a change affects page structure.

## Documentation

Write durable notes in `docs/notes/`.
Write implementation plans in `docs/plans/`.
Write approved product or technical specifications in `docs/specs/`.
Do not create tool-branded documentation directories.

## Git and Secret Safety

Use absolute repository paths with `git -C` for Git commands.
Treat unexplained modifications as author-unknown.
Do not restore, delete, stage, or overwrite them.
Do not commit, push, deploy, or publish unless the operator explicitly requests that action.

Do not read, print, or commit `.env.local` or `.vercel/` contents unless the task requires a specific field and the operator authorizes that scope.
Never expose credentials or deployment tokens in logs, documentation, or responses.

## Verification

Run the repository checks after source or content changes:

```sh
pnpm lint
pnpm build
```

Run `git diff --check` after documentation-only changes.
For route, copy, or layout changes, render each affected `ko` and `en` route in a browser.
Verify the language, navigation targets, focus behavior, and responsive layout on the rendered page.

Do not claim that a command or browser check passed unless it ran against the current worktree.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

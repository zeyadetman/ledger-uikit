# LEDGER Blocks UI Kit

<img src="public/logo.png" alt="LEDGER Blocks UI Kit" width="72" height="72" />

**Your next app. A head start.**

100 copy-and-paste SaaS UI blocks for Next.js, React, TypeScript, and Tailwind CSS v4. Explore blocks in a live viewer, choose a design preset, and bring the source into your own project.

- Blocks for marketing, apps, authentication, onboarding, billing, data, communication, content, and system UI.
- Original paper-and-ink design plus ten alternative presets, each with light and dark colors.
- Searchable catalog, category browsing, and desktop/tablet/mobile previews.
- Code copying, dependency lists, and supported loading, empty, and error-state previews.
- A quick-start guide and exportable theme CSS.
- Interactive demos for AI chat, Kanban, calendar, bookings, uploads, customer records, analytics, checkout, automations, domains, feedback, and version history.
- Two composed SaaS demos to show how the blocks fit together.

## Run locally

Clone this repository. Use Node.js 22 and the pnpm version specified in `package.json`.

```sh
cd ledger-uikit
corepack enable
pnpm install
pnpm dev
```

Open the local URL printed by Next.js. Start at **Quick start** to add a block to another app, or **Blocks** to explore the catalog.

## Use a block

1. Set up a Next.js App Router project with TypeScript and Tailwind CSS v4.
2. Visit `/getting-started` for the shared `cn` utility, dependencies, and font setup.
3. Select a design and copy its CSS from `/design-system` into your global stylesheet. Merge with existing styles if your app already has them.
4. Open a block, copy the TSX source, and save it in your project. Install its listed dependencies.
5. Import the block’s named export and connect its data and actions to your application.

Blocks contain demonstration UI and sample data. Authentication, payments, forms, and other actions need your own application logic.

## Project map

| Location | Purpose |
| --- | --- |
| `registry/blocks/<slug>/` | Block source and metadata |
| `registry/pages/` | Composed SaaS demo pages |
| `lib/blocks.ts` | Catalog metadata |
| `registry/render-block.tsx` | Preview renderer |
| `lib/design-system.ts` | Presets and theme export |
| `app/globals.css` | Base styling and theme tokens |
| `llms.txt` | Project context for coding assistants |

## Checks

```sh
pnpm lint
pnpm typecheck
pnpm build
```

The production build downloads Geist fonts through `next/font`. It needs access to Google Fonts on a clean cache. Stop the development server before building in the same checkout; both commands use `.next`.

## Deploy on Cloudflare Pages

The kit is a static Next.js export (`output: "export"`). Use a **Pages** project so the hostname is `*.pages.dev`. A Workers project will always be `*.workers.dev`.

1. Go to [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages).
2. **Create** → **Pages** → **Import an existing Git repository** (not Workers / “create a Worker”).
3. Select this repository.
4. Set the build:

   | Field | Value |
   | --- | --- |
   | Project name | `ledger-uikit` (this becomes `ledger-uikit.pages.dev`) |
   | Production branch | `main` |
   | Framework preset | **Next.js (Static HTML Export)** |
   | Build command | `pnpm build` |
   | Build output directory | `out` |

5. Environment variables:
   - `NODE_VERSION` = `22`
   - Optional: `NEXT_PUBLIC_GITHUB_REPO` = GitHub `owner/name` so the homepage can link to the repository and read the star count
   - Optional: `GITHUB_TOKEN` so the star count request is authenticated at build time
6. **Save and Deploy**.

If the log says `No build command specified` and `Output directory "out" not found`, the dashboard build command is empty. Set it to `pnpm build` and retry. Do not deploy this kit as a Worker if you need a `*.pages.dev` hostname.

Pushes to `main` update production. Pull requests get preview URLs.

To publish from this checkout after `npx wrangler login`:

```sh
pnpm build
npx wrangler pages deploy
```

## Contribute

Found a rough edge or have a block idea? Open an issue. Contributions are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md) for the block conventions and checks.

If LEDGER helps you build something, a star helps other developers find the project.

## License

Copyright 2026 LEDGER Blocks UI Kit contributors. Licensed under the [Apache License 2.0](LICENSE).

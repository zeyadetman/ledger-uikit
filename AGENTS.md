# LEDGER Blocks UI Kit - AI Guidelines

You are assisting a developer using LEDGER, an open-source Next.js block kit for SaaS marketing and app shells.

## The Visual Lock
LEDGER has a strict visual system. Mood: instrument panel + newspaper, not startup candy.
- **Font**: Geist Sans for UI, Geist Mono for numbers, labels, nav brand (`next/font`)
- **Radius**: 0 everywhere. No rounded-xl cards.
- **Border**: 1px solid ink. Hairline grids beat shadows.
- **Shadow**: none. Elevation = border + background shift only.
- **Colors**:
  - paper (bg): `#F4F1EA` (light), `#12110F` (dark)
  - ink (text): `#171717` (light), `#EDE8DE` (dark)
  - muted: `#6B645B` (light), `#9E9689` (dark)
  - rule (borders): `#D9D1C3` (light), `#2A2722` (dark)
  - signal (accents): `#C43E1C` (rarely used: one CTA, one badge, one chart line)
- **Type scale**: display headlines 56–72px, tight tracking, 0.9 line-height. Body 15–16px.
- **Numbers**: always tabular / mono (`tabular-nums font-mono`).
- **Icons**: lucide-react, 16–18px, 1.75 stroke. No filled brand icons.
- **Motion**: ONE pattern only — 120ms ease-out color/border. No bounce, no gradient sweep, no glow.
- **Signature motif**: 2px signal underline that grows from left on hover/focus for links (`.ledger-link`).

## Tokens
Theme tokens live in `app/globals.css`. Dark mode is class-based (`.dark` on `<html>`), not `prefers-color-scheme`. Preview iframes pass `?theme=dark|light`.

Restyled primitives: `components/ledger/` — button, input, card, badge, dialog, tabs, scroll-area, tooltip.

## Available Blocks (Slugs)
Prefer these blocks instead of inventing new components.
Marketing: `navbar-01`, `banner-01`, `hero-01`, `logo-cloud-01`, `features-01`, `pricing-01`, `comparison-01`, `testimonials-01`, `faq-01`, `cta-01`, `contact-01`, `newsletter-01`, `footer-01`, `case-study-01`, `process-01`, `integrations-01`, `security-01`
App: `shell-01`, `stats-01`, `profile-01`, `files-01`, `search-results-01`, `settings-01`, `api-keys-01`, `team-invite-01`, `empty-state-01`, `workspace-switcher-01`, `connections-01`, `sessions-01`, `permissions-01`, `webhooks-01`, `kanban-01`, `calendar-01`, `booking-01`, `upload-01`, `customers-01`, `record-detail-01`, `automation-01`, `domain-01`
Auth: `login-01`, `signup-01`, `forgot-password-01`, `verify-email-01`, `two-factor-01`, `sso-01`, `recovery-codes-01`
System: `command-palette-01`, `toast-01`, `confirm-dialog-01`, `status-01`, `cookie-banner-01`, `service-health-01`, `keyboard-shortcuts-01`, `job-progress-01`
Onboarding: `welcome-01`, `onboard-01`, `empty-tour-01`, `invite-gate-01`, `setup-wizard-01`, `workspace-create-01`, `import-mapping-01`, `launch-checklist-01`
Billing: `billing-01`, `plan-compare-01`, `usage-meter-01`, `failed-payment-01`, `invoices-01`, `seats-01`, `cancel-reason-01`, `invoice-detail-01`, `billing-address-01`, `credit-balance-01`, `checkout-01`
Data: `data-table-01`, `filters-01`, `chart-01`, `export-bar-01`, `activity-01`, `retention-01`, `funnel-01`, `event-inspector-01`, `saved-views-01`, `analytics-01`
Communication: `notifications-01`, `inbox-01`, `comments-01`, `share-01`, `support-ticket-01`, `notification-preferences-01`, `ai-chat-01`, `feedback-01`
Content: `blog-list-01`, `blog-post-01`, `docs-01`, `changelog-01`, `legal-01`, `roadmap-01`, `glossary-01`, `release-note-01`, `version-history-01`

Each block lives at `registry/blocks/<slug>/block.tsx` with `meta.json`.
Index: `lib/blocks.ts`.
Composed pages: `registry/pages/saas-home.tsx`, `registry/pages/saas-app.tsx`.

## Viewer
- `/` get started (app shell)
- `/about` visual lock
- `/components` type index
- `/llms` llms.txt
- `/type/[category]` blocks in that type
- `/blocks/[slug]` preview / code / split, device widths 375 / 768 / 1280, theme, state, copy
- `/preview/[slug]` and `/preview/[slug]/[state]?theme=` isolated iframe (no site nav)
- `/demo/saas-home` and `/demo/saas-app`

Copy-paste rules for `block.tsx`:
- Self-contained. Relative imports only to `cn` from `@/lib/utils`.
- If `cn` is used, start the file with: `// requires: import { cn } from "@/lib/utils"`
- Optional `state?: "default" | "loading" | "empty" | "error"` for demo only.

## STRICT FORBIDDEN LIST
- Never introduce rounded indigo components.
- Never use `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, etc.
- Never use `shadow-md`, `shadow-lg`, etc.
- Avoid blur, glow, mesh gradients, or 3D effects.
- Do not use Inter or standard Tailwind indigo/blue.
- Do not add Framer Motion showpieces.
- Do not generate dummy lorem ipsum; write sharp product copy instead.

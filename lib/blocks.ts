export type BlockState = "default" | "loading" | "empty" | "error";
export type BlockCategory =
  | "marketing"
  | "app"
  | "auth"
  | "system"
  | "onboarding"
  | "billing"
  | "data"
  | "communication"
  | "content";
export type ViewMode = "preview" | "code" | "split";
export type DeviceWidth = 375 | 768 | 1280;
export type PreviewTheme = "light" | "dark";

export type BlockMeta = {
  slug: string;
  title: string;
  category: BlockCategory;
  use_when: string;
  avoid_when: string;
  deps: string[];
  states: BlockState[];
  filePath: string;
};

export type CategoryMeta = {
  slug: BlockCategory;
  title: string;
  kicker: string;
  blurb: string;
};

export const categories: CategoryMeta[] = [
  {
    slug: "marketing",
    title: "Marketing",
    kicker: "Site",
    blurb: "Nav, heroes, proof, pricing. Pages that sell the desk.",
  },
  {
    slug: "app",
    title: "App",
    kicker: "Console",
    blurb: "Shell, stats, settings, operators. The instrument panel.",
  },
  {
    slug: "auth",
    title: "Auth",
    kicker: "Access",
    blurb: "Sign in, sign up, reset. The locked door.",
  },
  {
    slug: "system",
    title: "System",
    kicker: "OS",
    blurb: "Palette, toasts, confirm, 404/500, consent. Reused everywhere.",
  },
  {
    slug: "onboarding",
    title: "Onboarding",
    kicker: "First run",
    blurb:
      "Welcome, checklist, tour, invite gate, wizard. Where products stall.",
  },
  {
    slug: "billing",
    title: "Billing",
    kicker: "Money",
    blurb: "Plans, usage, failed payment, invoices, seats, cancel.",
  },
  {
    slug: "data",
    title: "Data",
    kicker: "Tape",
    blurb: "Tables, filters, charts with no-data, export, audit.",
  },
  {
    slug: "communication",
    title: "Communication",
    kicker: "Desk",
    blurb: "Inbox, comment threads, share links with permissions.",
  },
  {
    slug: "content",
    title: "Content",
    kicker: "Paper",
    blurb: "Blog post, docs + TOC, changelog, legal. The public site.",
  },
];

export const blocks: BlockMeta[] = [
  {
    slug: "navbar-01",
    title: "Navbar",
    category: "marketing",
    use_when:
      "Use at the top of marketing pages for product navigation and primary CTA.",
    avoid_when: "Avoid inside authenticated app chrome — use shell-01 instead.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/navbar-01/block.tsx",
  },
  {
    slug: "banner-01",
    title: "Banner",
    category: "marketing",
    use_when:
      "Use at the very top of marketing pages for a single product notice.",
    avoid_when: "Avoid for in-app alerts — use notifications-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/banner-01/block.tsx",
  },
  {
    slug: "hero-01",
    title: "Hero",
    category: "marketing",
    use_when:
      "Use at the top of the marketing home page, directly under the navbar.",
    avoid_when: "Avoid inside the app dashboard or as a section mid-page.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/hero-01/block.tsx",
  },
  {
    slug: "logo-cloud-01",
    title: "Logo cloud",
    category: "marketing",
    use_when: "Use under the hero to show production logos / social proof.",
    avoid_when: "Avoid as a footer substitute or inside the app shell.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/logo-cloud-01/block.tsx",
  },
  {
    slug: "features-01",
    title: "Features",
    category: "marketing",
    use_when:
      "Use on the marketing page to list product capabilities in a dense grid.",
    avoid_when: "Avoid for pricing comparison or dashboard widgets.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/features-01/block.tsx",
  },
  {
    slug: "pricing-01",
    title: "Pricing",
    category: "marketing",
    use_when: "Use on the marketing pricing section for three-tier SaaS plans.",
    avoid_when: "Avoid for in-app plan changes — use billing-01.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/pricing-01/block.tsx",
  },
  {
    slug: "comparison-01",
    title: "Comparison",
    category: "marketing",
    use_when:
      "Use under pricing to compare plan capabilities in a dense matrix.",
    avoid_when: "Avoid as the only pricing block — pair with pricing-01.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/comparison-01/block.tsx",
  },
  {
    slug: "testimonials-01",
    title: "Testimonials",
    category: "marketing",
    use_when: "Use under features or pricing to quote operators in production.",
    avoid_when: "Avoid as a dashboard widget or with photos/avatars.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/testimonials-01/block.tsx",
  },
  {
    slug: "faq-01",
    title: "FAQ",
    category: "marketing",
    use_when: "Use on marketing or pricing pages for dense operator questions.",
    avoid_when: "Avoid for in-app help — write a docs surface instead.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/faq-01/block.tsx",
  },
  {
    slug: "cta-01",
    title: "Call to action",
    category: "marketing",
    use_when: "Use before the footer as a closing band to open a ledger.",
    avoid_when: "Avoid inside the app shell.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/cta-01/block.tsx",
  },
  {
    slug: "changelog-01",
    title: "Changelog",
    category: "content",
    use_when: "Use on a public changelog page for dated product notes.",
    avoid_when: "Avoid as an in-app activity feed — use activity-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/changelog-01/block.tsx",
  },
  {
    slug: "blog-list-01",
    title: "Blog list",
    category: "content",
    use_when:
      "Use for a public field-notes or changelog index in newspaper rows.",
    avoid_when: "Avoid as an in-app activity feed — use activity-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/blog-list-01/block.tsx",
  },
  {
    slug: "contact-01",
    title: "Contact",
    category: "marketing",
    use_when: "Use for a sales/desk contact form with a postal address.",
    avoid_when: "Avoid as an in-app support ticket form.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/contact-01/block.tsx",
  },
  {
    slug: "newsletter-01",
    title: "Newsletter",
    category: "marketing",
    use_when: "Use in the marketing page to collect tape subscribers.",
    avoid_when: "Avoid as account notification settings — use settings-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/newsletter-01/block.tsx",
  },
  {
    slug: "footer-01",
    title: "Footer",
    category: "marketing",
    use_when:
      "Use at the bottom of marketing pages for sitemap, legal, and wordmark.",
    avoid_when:
      "Avoid inside the authenticated app — shell-01 already has chrome.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/footer-01/block.tsx",
  },
  {
    slug: "shell-01",
    title: "App shell",
    category: "app",
    use_when:
      "Use as the authenticated layout: sidebar, top bar, and main canvas.",
    avoid_when: "Avoid on marketing pages — use navbar-01 + footer-01.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/shell-01/block.tsx",
  },
  {
    slug: "stats-01",
    title: "Stats",
    category: "app",
    use_when: "Use at the top of a dashboard to show four operational metrics.",
    avoid_when: "Avoid as a marketing hero substitute.",
    deps: ["lucide-react"],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/stats-01/block.tsx",
  },
  {
    slug: "data-table-01",
    title: "Data table",
    category: "data",
    use_when: "Use for dense operational tables: events, invoices, members.",
    avoid_when: "Avoid for marketing feature lists — use features-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/data-table-01/block.tsx",
  },
  {
    slug: "activity-01",
    title: "Activity",
    category: "data",
    use_when: "Use for an audit tape of operator writes inside the workspace.",
    avoid_when: "Avoid as a public changelog — use changelog-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/activity-01/block.tsx",
  },
  {
    slug: "notifications-01",
    title: "Notifications",
    category: "communication",
    use_when: "Use for desk alerts: drift, failed meters, invoice events.",
    avoid_when: "Avoid as marketing announcements.",
    deps: ["lucide-react"],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/notifications-01/block.tsx",
  },
  {
    slug: "profile-01",
    title: "Profile",
    category: "app",
    use_when:
      "Use for the signed-in operator's name, desk role, and passphrase.",
    avoid_when: "Avoid for workspace settings — use settings-01.",
    deps: [],
    states: ["default", "loading"],
    filePath: "registry/blocks/profile-01/block.tsx",
  },
  {
    slug: "files-01",
    title: "Files",
    category: "app",
    use_when: "Use to list exported tapes, CSVs, and invoice PDFs.",
    avoid_when: "Avoid as a generic cloud drive UI.",
    deps: ["lucide-react"],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/files-01/block.tsx",
  },
  {
    slug: "search-results-01",
    title: "Search results",
    category: "app",
    use_when: "Use for workspace search across meters, events, and invoices.",
    avoid_when: "Avoid as a marketing site search.",
    deps: ["lucide-react"],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/search-results-01/block.tsx",
  },
  {
    slug: "onboard-01",
    title: "Onboarding",
    category: "onboarding",
    use_when: "Use after first login to walk an operator through meter setup.",
    avoid_when: "Avoid as a marketing feature list.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/onboard-01/block.tsx",
  },
  {
    slug: "settings-01",
    title: "Settings",
    category: "app",
    use_when:
      "Use for workspace profile, timezone, and destructive account actions.",
    avoid_when: "Avoid for billing plan changes — use billing-01.",
    deps: [],
    states: ["default", "loading"],
    filePath: "registry/blocks/settings-01/block.tsx",
  },
  {
    slug: "api-keys-01",
    title: "API keys",
    category: "app",
    use_when: "Use on a credentials screen to list and mint ingest keys.",
    avoid_when: "Avoid as a generic secrets manager.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/api-keys-01/block.tsx",
  },
  {
    slug: "billing-01",
    title: "Billing",
    category: "billing",
    use_when: "Use on the billing screen for current plan and invoice history.",
    avoid_when: "Avoid as public pricing — use pricing-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/billing-01/block.tsx",
  },
  {
    slug: "team-invite-01",
    title: "Team invite",
    category: "app",
    use_when: "Use to invite operators and list workspace members with roles.",
    avoid_when: "Avoid as a marketing waitlist form.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/team-invite-01/block.tsx",
  },
  {
    slug: "empty-state-01",
    title: "Empty state",
    category: "app",
    use_when: "Use when a ledger view has no rows and you need a first action.",
    avoid_when: "Avoid for API errors — use the error state on the data block.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/empty-state-01/block.tsx",
  },
  {
    slug: "login-01",
    title: "Login",
    category: "auth",
    use_when: "Use as the sign-in screen for email + password operators.",
    avoid_when: "Avoid as a marketing CTA section.",
    deps: [],
    states: ["default", "error"],
    filePath: "registry/blocks/login-01/block.tsx",
  },
  {
    slug: "signup-01",
    title: "Sign up",
    category: "auth",
    use_when:
      "Use to open a new workspace with email, passphrase, and firm name.",
    avoid_when: "Avoid as an invite accept screen.",
    deps: [],
    states: ["default", "error"],
    filePath: "registry/blocks/signup-01/block.tsx",
  },
  {
    slug: "forgot-password-01",
    title: "Forgot password",
    category: "auth",
    use_when: "Use when an operator needs a passphrase reset sent to email.",
    avoid_when: "Avoid as the profile passphrase change — use profile-01.",
    deps: [],
    states: ["default", "error"],
    filePath: "registry/blocks/forgot-password-01/block.tsx",
  },
  {
    slug: "verify-email-01",
    title: "Verify email",
    category: "auth",
    use_when:
      "Use after signup while the operator waits on a confirmation link.",
    avoid_when: "Avoid as a passphrase reset screen — use forgot-password-01.",
    deps: [],
    states: ["default", "error"],
    filePath: "registry/blocks/verify-email-01/block.tsx",
  },
  {
    slug: "command-palette-01",
    title: "Command palette",
    category: "system",
    use_when: "Use as the global jump menu (⌘K) inside the authenticated app.",
    avoid_when: "Avoid as marketing site search — use a public search page.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/command-palette-01/block.tsx",
  },
  {
    slug: "toast-01",
    title: "Toast",
    category: "system",
    use_when: "Use for short, reversible confirmations after a desk write.",
    avoid_when:
      "Avoid for blocking failures — use confirm-dialog-01 or an error state.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/toast-01/block.tsx",
  },
  {
    slug: "confirm-dialog-01",
    title: "Confirm dialog",
    category: "system",
    use_when: "Use before a destructive write: archive, revoke, cancel.",
    avoid_when: "Avoid for ordinary saves — a toast is enough.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/confirm-dialog-01/block.tsx",
  },
  {
    slug: "status-01",
    title: "Status pages",
    category: "system",
    use_when:
      "Use for 404 (default), 500 (error), and maintenance (empty) full-page states.",
    avoid_when: "Avoid inside a dashboard canvas — those get empty-state-01.",
    deps: [],
    states: ["default", "empty", "error"],
    filePath: "registry/blocks/status-01/block.tsx",
  },
  {
    slug: "cookie-banner-01",
    title: "Cookie banner",
    category: "system",
    use_when:
      "Use on marketing pages that set a session cookie. Keep it necessary-only.",
    avoid_when:
      "Avoid dark-pattern walls of vendors. LEDGER does not ship ad consent.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/cookie-banner-01/block.tsx",
  },
  {
    slug: "welcome-01",
    title: "Welcome",
    category: "onboarding",
    use_when: "Use as the first screen after signup, before any meters exist.",
    avoid_when:
      "Avoid once the workspace has posted events — use the app shell.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/welcome-01/block.tsx",
  },
  {
    slug: "empty-tour-01",
    title: "Empty tour",
    category: "onboarding",
    use_when:
      "Use on an empty canvas during first-run, with a short product lesson.",
    avoid_when:
      "Avoid after the operator has created the object — use empty-state-01 for later blanks.",
    deps: ["lucide-react"],
    states: ["default"],
    filePath: "registry/blocks/empty-tour-01/block.tsx",
  },
  {
    slug: "invite-gate-01",
    title: "Invite gate",
    category: "onboarding",
    use_when:
      "Use as a blocking step before production ingest, to force a second operator.",
    avoid_when: "Avoid as the standing team page — use team-invite-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/invite-gate-01/block.tsx",
  },
  {
    slug: "setup-wizard-01",
    title: "Setup wizard",
    category: "onboarding",
    use_when: "Use for the three-step first-run: workspace, meter, test event.",
    avoid_when: "Avoid for later settings edits — use settings-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/setup-wizard-01/block.tsx",
  },
  {
    slug: "plan-compare-01",
    title: "Plan compare",
    category: "billing",
    use_when:
      "Use inside billing when an operator switches Desk / Floor / Exchange.",
    avoid_when: "Avoid as public pricing — use pricing-01 + comparison-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/plan-compare-01/block.tsx",
  },
  {
    slug: "usage-meter-01",
    title: "Usage meter",
    category: "billing",
    use_when: "Use on billing to show period consumption against plan caps.",
    avoid_when: "Avoid as a marketing social-proof counter.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/usage-meter-01/block.tsx",
  },
  {
    slug: "failed-payment-01",
    title: "Failed payment",
    category: "billing",
    use_when:
      "Use when a subscription charge is declined and the operator must act.",
    avoid_when: "Avoid as a generic error toast — this has to block the desk.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/failed-payment-01/block.tsx",
  },
  {
    slug: "invoices-01",
    title: "Invoices list",
    category: "billing",
    use_when: "Use as the full invoice table, including failed periods.",
    avoid_when: "Avoid as public pricing history.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/invoices-01/block.tsx",
  },
  {
    slug: "seats-01",
    title: "Manage seats",
    category: "billing",
    use_when: "Use on billing to show seat cap versus named operators.",
    avoid_when: "Avoid as the invite form — use team-invite-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/seats-01/block.tsx",
  },
  {
    slug: "cancel-reason-01",
    title: "Cancel reason",
    category: "billing",
    use_when: "Use as the last step before tearing down a paid plan.",
    avoid_when: "Avoid as a generic survey.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/cancel-reason-01/block.tsx",
  },
  {
    slug: "filters-01",
    title: "Filters",
    category: "data",
    use_when: "Use above a dense table for saved views and status chips.",
    avoid_when: "Avoid as the only navigation in the app.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/filters-01/block.tsx",
  },
  {
    slug: "chart-01",
    title: "Chart",
    category: "data",
    use_when:
      "Use for a dense bar series of events. Empty state keeps the axis.",
    avoid_when: "Avoid gradient area charts, glow, or animation.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/chart-01/block.tsx",
  },
  {
    slug: "export-bar-01",
    title: "Export bar",
    category: "data",
    use_when:
      "Use above or below a table when operators dump the current view.",
    avoid_when: "Avoid as a generic download widget on marketing pages.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/export-bar-01/block.tsx",
  },
  {
    slug: "inbox-01",
    title: "Notification inbox",
    category: "communication",
    use_when: "Use as the two-pane desk inbox for operational threads.",
    avoid_when:
      "Avoid as a marketing announcement list — use notifications-01 for a simple feed.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/inbox-01/block.tsx",
  },
  {
    slug: "comments-01",
    title: "Comments",
    category: "communication",
    use_when:
      "Use on a record (invoice line, meter, event) for an operator thread.",
    avoid_when: "Avoid as a marketing testimonial wall.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/comments-01/block.tsx",
  },
  {
    slug: "share-01",
    title: "Share link",
    category: "communication",
    use_when:
      "Use to hand a record URL to finance with an explicit permission.",
    avoid_when: "Avoid world-readable links.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/share-01/block.tsx",
  },
  {
    slug: "blog-post-01",
    title: "Blog post",
    category: "content",
    use_when: "Use for a single field note / essay on the marketing site.",
    avoid_when:
      "Avoid as an in-app changelog row — use changelog-01 for lists.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/blog-post-01/block.tsx",
  },
  {
    slug: "docs-01",
    title: "Docs",
    category: "content",
    use_when: "Use for API/spec pages with a sidebar and on-this-page TOC.",
    avoid_when: "Avoid as a blog layout — use blog-post-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/docs-01/block.tsx",
  },
  {
    slug: "legal-01",
    title: "Legal page",
    category: "content",
    use_when: "Use for terms, privacy, or DPA pages with numbered clauses.",
    avoid_when: "Avoid as a blog post.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/legal-01/block.tsx",
  },
  {
    slug: "case-study-01",
    title: "Case study",
    category: "marketing",
    use_when:
      "Use a customer story connecting an operational problem to measurable results",
    avoid_when: "Avoid for unattributed quotes; use testimonials-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/case-study-01/block.tsx",
  },
  {
    slug: "process-01",
    title: "How it works",
    category: "marketing",
    use_when:
      "Use a numbered walkthrough of the path from raw events to a reliable close",
    avoid_when: "Avoid for first-run tasks; use onboard-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/process-01/block.tsx",
  },
  {
    slug: "integrations-01",
    title: "Integration directory",
    category: "marketing",
    use_when:
      "Use a searchable directory of the systems that connect to your product",
    avoid_when: "Avoid for managing live connections; use connections-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/integrations-01/block.tsx",
  },
  {
    slug: "security-01",
    title: "Security overview",
    category: "marketing",
    use_when:
      "Use a public overview of product security controls and shared responsibilities",
    avoid_when:
      "Avoid as a substitute for a legal agreement or compliance certification.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/security-01/block.tsx",
  },
  {
    slug: "workspace-switcher-01",
    title: "Workspace switcher",
    category: "app",
    use_when:
      "Use a compact workspace picker with filtering and an explicit current selection",
    avoid_when: "Avoid as the main navigation; pair with shell-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/workspace-switcher-01/block.tsx",
  },
  {
    slug: "connections-01",
    title: "Connected sources",
    category: "app",
    use_when:
      "Use a source connection list with local pause and resume controls",
    avoid_when: "Avoid for browsing supported vendors; use integrations-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/connections-01/block.tsx",
  },
  {
    slug: "sessions-01",
    title: "Active sessions",
    category: "app",
    use_when:
      "Use a review of signed-in devices with individual session revocation",
    avoid_when: "Avoid for changing a password; use profile-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/sessions-01/block.tsx",
  },
  {
    slug: "permissions-01",
    title: "Role permissions",
    category: "app",
    use_when: "Use an editable permission matrix for workspace roles",
    avoid_when: "Avoid for assigning members to roles; use team-invite-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/permissions-01/block.tsx",
  },
  {
    slug: "webhooks-01",
    title: "Webhook endpoints",
    category: "app",
    use_when:
      "Use an endpoint inspector with an editable URL and a simulated delivery test",
    avoid_when: "Avoid for API credential management; use api-keys-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/webhooks-01/block.tsx",
  },
  {
    slug: "two-factor-01",
    title: "Two-factor challenge",
    category: "auth",
    use_when:
      "Use a six-digit authenticator challenge after password verification",
    avoid_when: "Avoid as a standalone sign-in screen; use login-01 first.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/two-factor-01/block.tsx",
  },
  {
    slug: "sso-01",
    title: "SSO sign in",
    category: "auth",
    use_when:
      "Use an organization email entry point for enterprise single sign-on",
    avoid_when: "Avoid for personal email and password login; use login-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/sso-01/block.tsx",
  },
  {
    slug: "recovery-codes-01",
    title: "Recovery codes",
    category: "auth",
    use_when: "Use a printable backup-code sheet during two-factor enrollment",
    avoid_when:
      "Avoid as a live credential store; generate and consume real codes on your server.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/recovery-codes-01/block.tsx",
  },
  {
    slug: "service-health-01",
    title: "Service health",
    category: "system",
    use_when:
      "Use a service status summary with availability and incident details",
    avoid_when: "Avoid for missing-page errors; use status-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/service-health-01/block.tsx",
  },
  {
    slug: "keyboard-shortcuts-01",
    title: "Keyboard shortcuts",
    category: "system",
    use_when:
      "Use a searchable reference of keyboard commands used in the workspace",
    avoid_when: "Avoid as a command launcher; use command-palette-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/keyboard-shortcuts-01/block.tsx",
  },
  {
    slug: "job-progress-01",
    title: "Background job",
    category: "system",
    use_when:
      "Use a long-running job summary with progress, cancellation, and restart controls",
    avoid_when: "Avoid for brief save confirmations; use toast-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/job-progress-01/block.tsx",
  },
  {
    slug: "workspace-create-01",
    title: "Create workspace",
    category: "onboarding",
    use_when:
      "Use a first-run form for the workspace name, region, and reporting timezone",
    avoid_when:
      "Avoid for editing existing workspace settings; use settings-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/workspace-create-01/block.tsx",
  },
  {
    slug: "import-mapping-01",
    title: "Import column mapping",
    category: "onboarding",
    use_when: "Use a CSV column-mapping step before importing historical usage",
    avoid_when: "Avoid for recurring exports; use export-bar-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/import-mapping-01/block.tsx",
  },
  {
    slug: "launch-checklist-01",
    title: "Launch checklist",
    category: "onboarding",
    use_when:
      "Use a production readiness checklist with an explicit completion gate",
    avoid_when: "Avoid for routine work tracking after launch.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/launch-checklist-01/block.tsx",
  },
  {
    slug: "invoice-detail-01",
    title: "Invoice detail",
    category: "billing",
    use_when:
      "Use an itemized invoice with totals, billing parties, and payment terms",
    avoid_when: "Avoid for listing multiple invoices; use invoices-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/invoice-detail-01/block.tsx",
  },
  {
    slug: "billing-address-01",
    title: "Billing address",
    category: "billing",
    use_when:
      "Use a billing identity form for invoice delivery and tax details",
    avoid_when:
      "Avoid for payment-card collection; use a payment-provider form.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/billing-address-01/block.tsx",
  },
  {
    slug: "credit-balance-01",
    title: "Credit balance",
    category: "billing",
    use_when: "Use a prepaid credit summary with a transaction ledger",
    avoid_when: "Avoid for subscription limits; use usage-meter-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/credit-balance-01/block.tsx",
  },
  {
    slug: "retention-01",
    title: "Cohort retention",
    category: "data",
    use_when:
      "Use a cohort matrix showing the share of accounts returning each week",
    avoid_when: "Avoid for raw event volume; use chart-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/retention-01/block.tsx",
  },
  {
    slug: "funnel-01",
    title: "Conversion funnel",
    category: "data",
    use_when:
      "Use a stage-by-stage conversion report with counts and drop-off rates",
    avoid_when: "Avoid for time-series trends; use chart-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/funnel-01/block.tsx",
  },
  {
    slug: "event-inspector-01",
    title: "Event inspector",
    category: "data",
    use_when:
      "Use an individual event record with structured metadata and a raw JSON view",
    avoid_when: "Avoid for browsing many records; use data-table-01.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/event-inspector-01/block.tsx",
  },
  {
    slug: "saved-views-01",
    title: "Saved views",
    category: "data",
    use_when:
      "Use a saved query list with selection and creation of named views",
    avoid_when: "Avoid as a global search surface; use search-results-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/saved-views-01/block.tsx",
  },
  {
    slug: "support-ticket-01",
    title: "Support ticket",
    category: "communication",
    use_when:
      "Use a support request form with topic, priority, and a local submission receipt",
    avoid_when: "Avoid for sales inquiries; use contact-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/support-ticket-01/block.tsx",
  },
  {
    slug: "notification-preferences-01",
    title: "Notification preferences",
    category: "communication",
    use_when: "Use per-topic email and in-app notification controls",
    avoid_when: "Avoid for reading received messages; use inbox-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/notification-preferences-01/block.tsx",
  },
  {
    slug: "roadmap-01",
    title: "Product roadmap",
    category: "content",
    use_when: "Use a public roadmap grouped by delivery stage",
    avoid_when:
      "Avoid as a promise of release dates; use changelog-01 for shipped details.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/roadmap-01/block.tsx",
  },
  {
    slug: "glossary-01",
    title: "Product glossary",
    category: "content",
    use_when:
      "Use a searchable glossary of domain terms for product documentation",
    avoid_when: "Avoid for full API reference pages; use docs-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/glossary-01/block.tsx",
  },
  {
    slug: "release-note-01",
    title: "Release note",
    category: "content",
    use_when:
      "Use a detailed product release with highlights, migration notes, and an upgrade checklist",
    avoid_when: "Avoid for a chronological index; use changelog-01.",
    deps: [],
    states: ["default"],
    filePath: "registry/blocks/release-note-01/block.tsx",
  },
  {
    slug: "ai-chat-01",
    title: "AI conversation",
    category: "communication",
    use_when:
      "Use an assistant conversation with suggested prompts, generation, and retry.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/ai-chat-01/block.tsx",
  },
  {
    slug: "kanban-01",
    title: "Kanban board",
    category: "app",
    use_when: "Use a project board with priorities, owners, and movable tasks.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/kanban-01/block.tsx",
  },
  {
    slug: "calendar-01",
    title: "Calendar and agenda",
    category: "app",
    use_when: "Use a monthly calendar with event details and a mobile agenda.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/calendar-01/block.tsx",
  },
  {
    slug: "booking-01",
    title: "Booking scheduler",
    category: "app",
    use_when:
      "Use an appointment flow with time zones, available slots, and confirmation.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/booking-01/block.tsx",
  },
  {
    slug: "upload-01",
    title: "Upload queue",
    category: "app",
    use_when:
      "Use a file queue with validation, simulated progress, cancellation, and retry.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/upload-01/block.tsx",
  },
  {
    slug: "customers-01",
    title: "Customer directory",
    category: "app",
    use_when:
      "Use a searchable customer directory with owners, account status, and details.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/customers-01/block.tsx",
  },
  {
    slug: "record-detail-01",
    title: "Record detail panel",
    category: "app",
    use_when:
      "Use an editable record with local saving, activity, and change cancellation.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/record-detail-01/block.tsx",
  },
  {
    slug: "analytics-01",
    title: "Report dashboard",
    category: "data",
    use_when:
      "Use a report with selectable periods, comparison metrics, and accessible charts.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/analytics-01/block.tsx",
  },
  {
    slug: "checkout-01",
    title: "Checkout summary",
    category: "billing",
    use_when:
      "Use a plan checkout with billing frequency, coupon validation, and an order summary.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/checkout-01/block.tsx",
  },
  {
    slug: "automation-01",
    title: "Automation rules",
    category: "app",
    use_when:
      "Use a workflow editor with triggers, conditions, actions, and a local test run.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/automation-01/block.tsx",
  },
  {
    slug: "domain-01",
    title: "Custom domain setup",
    category: "app",
    use_when:
      "Use a custom-domain workflow with DNS records and simulated verification.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/domain-01/block.tsx",
  },
  {
    slug: "feedback-01",
    title: "Feedback collector",
    category: "communication",
    use_when:
      "Use a feedback form with ratings, categories, validation, and submission confirmation.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/feedback-01/block.tsx",
  },
  {
    slug: "version-history-01",
    title: "Version history",
    category: "content",
    use_when:
      "Use a revision viewer with comparison and confirmed restoration of a previous version.",
    avoid_when:
      "Avoid treating the local demo as a connected production service.",
    deps: [],
    states: ["default", "loading", "empty", "error"],
    filePath: "registry/blocks/version-history-01/block.tsx",
  },
];

export function isBlockCategory(value: string): value is BlockCategory {
  return categories.some((category) => category.slug === value);
}

export function getCategory(slug: string): CategoryMeta | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getBlocksByCategory(category: BlockCategory): BlockMeta[] {
  return blocks.filter((block) => block.category === category);
}

export function getBlock(slug: string): BlockMeta | undefined {
  return blocks.find((block) => block.slug === slug);
}

export function getAdjacentBlocks(slug: string): {
  prev: BlockMeta | null;
  next: BlockMeta | null;
} {
  const current = getBlock(slug);
  if (!current) return { prev: null, next: null };
  const list = getBlocksByCategory(current.category);
  const index = list.findIndex((block) => block.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: list[index - 1] ?? null,
    next: list[index + 1] ?? null,
  };
}

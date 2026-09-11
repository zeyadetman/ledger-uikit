import { VersionHistory01 } from "@/registry/blocks/version-history-01/block";
import { Feedback01 } from "@/registry/blocks/feedback-01/block";
import { Domain01 } from "@/registry/blocks/domain-01/block";
import { Automation01 } from "@/registry/blocks/automation-01/block";
import { Checkout01 } from "@/registry/blocks/checkout-01/block";
import { Analytics01 } from "@/registry/blocks/analytics-01/block";
import { RecordDetail01 } from "@/registry/blocks/record-detail-01/block";
import { Customers01 } from "@/registry/blocks/customers-01/block";
import { Upload01 } from "@/registry/blocks/upload-01/block";
import { Booking01 } from "@/registry/blocks/booking-01/block";
import { Calendar01 } from "@/registry/blocks/calendar-01/block";
import { Kanban01 } from "@/registry/blocks/kanban-01/block";
import { AiChat01 } from "@/registry/blocks/ai-chat-01/block";
import { CaseStudy01 } from "@/registry/blocks/case-study-01/block";
import { Process01 } from "@/registry/blocks/process-01/block";
import { Integrations01 } from "@/registry/blocks/integrations-01/block";
import { Security01 } from "@/registry/blocks/security-01/block";
import { WorkspaceSwitcher01 } from "@/registry/blocks/workspace-switcher-01/block";
import { Connections01 } from "@/registry/blocks/connections-01/block";
import { Sessions01 } from "@/registry/blocks/sessions-01/block";
import { Permissions01 } from "@/registry/blocks/permissions-01/block";
import { Webhooks01 } from "@/registry/blocks/webhooks-01/block";
import { TwoFactor01 } from "@/registry/blocks/two-factor-01/block";
import { Sso01 } from "@/registry/blocks/sso-01/block";
import { RecoveryCodes01 } from "@/registry/blocks/recovery-codes-01/block";
import { ServiceHealth01 } from "@/registry/blocks/service-health-01/block";
import { KeyboardShortcuts01 } from "@/registry/blocks/keyboard-shortcuts-01/block";
import { JobProgress01 } from "@/registry/blocks/job-progress-01/block";
import { WorkspaceCreate01 } from "@/registry/blocks/workspace-create-01/block";
import { ImportMapping01 } from "@/registry/blocks/import-mapping-01/block";
import { LaunchChecklist01 } from "@/registry/blocks/launch-checklist-01/block";
import { InvoiceDetail01 } from "@/registry/blocks/invoice-detail-01/block";
import { BillingAddress01 } from "@/registry/blocks/billing-address-01/block";
import { CreditBalance01 } from "@/registry/blocks/credit-balance-01/block";
import { Retention01 } from "@/registry/blocks/retention-01/block";
import { Funnel01 } from "@/registry/blocks/funnel-01/block";
import { EventInspector01 } from "@/registry/blocks/event-inspector-01/block";
import { SavedViews01 } from "@/registry/blocks/saved-views-01/block";
import { SupportTicket01 } from "@/registry/blocks/support-ticket-01/block";
import { NotificationPreferences01 } from "@/registry/blocks/notification-preferences-01/block";
import { Roadmap01 } from "@/registry/blocks/roadmap-01/block";
import { Glossary01 } from "@/registry/blocks/glossary-01/block";
import { ReleaseNote01 } from "@/registry/blocks/release-note-01/block";
import type { BlockState } from "@/lib/blocks";
import { Activity01 } from "@/registry/blocks/activity-01/block";
import { ApiKeys01 } from "@/registry/blocks/api-keys-01/block";
import { Banner01 } from "@/registry/blocks/banner-01/block";
import { Billing01 } from "@/registry/blocks/billing-01/block";
import { BlogList01 } from "@/registry/blocks/blog-list-01/block";
import { BlogPost01 } from "@/registry/blocks/blog-post-01/block";
import { CancelReason01 } from "@/registry/blocks/cancel-reason-01/block";
import { Chart01 } from "@/registry/blocks/chart-01/block";
import { CommandPalette01 } from "@/registry/blocks/command-palette-01/block";
import { Comments01 } from "@/registry/blocks/comments-01/block";
import { ConfirmDialog01 } from "@/registry/blocks/confirm-dialog-01/block";
import { CookieBanner01 } from "@/registry/blocks/cookie-banner-01/block";
import { Changelog01 } from "@/registry/blocks/changelog-01/block";
import { Comparison01 } from "@/registry/blocks/comparison-01/block";
import { Contact01 } from "@/registry/blocks/contact-01/block";
import { Cta01 } from "@/registry/blocks/cta-01/block";
import { DataTable01 } from "@/registry/blocks/data-table-01/block";
import { Docs01 } from "@/registry/blocks/docs-01/block";
import { EmptyState01 } from "@/registry/blocks/empty-state-01/block";
import { EmptyTour01 } from "@/registry/blocks/empty-tour-01/block";
import { ExportBar01 } from "@/registry/blocks/export-bar-01/block";
import { FailedPayment01 } from "@/registry/blocks/failed-payment-01/block";
import { Faq01 } from "@/registry/blocks/faq-01/block";
import { Features01 } from "@/registry/blocks/features-01/block";
import { Files01 } from "@/registry/blocks/files-01/block";
import { Filters01 } from "@/registry/blocks/filters-01/block";
import { Footer01 } from "@/registry/blocks/footer-01/block";
import { ForgotPassword01 } from "@/registry/blocks/forgot-password-01/block";
import { Hero01 } from "@/registry/blocks/hero-01/block";
import { Inbox01 } from "@/registry/blocks/inbox-01/block";
import { InviteGate01 } from "@/registry/blocks/invite-gate-01/block";
import { Invoices01 } from "@/registry/blocks/invoices-01/block";
import { Legal01 } from "@/registry/blocks/legal-01/block";
import { Login01 } from "@/registry/blocks/login-01/block";
import { LogoCloud01 } from "@/registry/blocks/logo-cloud-01/block";
import { Navbar01 } from "@/registry/blocks/navbar-01/block";
import { Newsletter01 } from "@/registry/blocks/newsletter-01/block";
import { Notifications01 } from "@/registry/blocks/notifications-01/block";
import { Onboard01 } from "@/registry/blocks/onboard-01/block";
import { PlanCompare01 } from "@/registry/blocks/plan-compare-01/block";
import { Pricing01 } from "@/registry/blocks/pricing-01/block";
import { Profile01 } from "@/registry/blocks/profile-01/block";
import { SearchResults01 } from "@/registry/blocks/search-results-01/block";
import { Seats01 } from "@/registry/blocks/seats-01/block";
import { Settings01 } from "@/registry/blocks/settings-01/block";
import { SetupWizard01 } from "@/registry/blocks/setup-wizard-01/block";
import { Share01 } from "@/registry/blocks/share-01/block";
import { Shell01 } from "@/registry/blocks/shell-01/block";
import { Signup01 } from "@/registry/blocks/signup-01/block";
import { Stats01 } from "@/registry/blocks/stats-01/block";
import { Status01 } from "@/registry/blocks/status-01/block";
import { TeamInvite01 } from "@/registry/blocks/team-invite-01/block";
import { Testimonials01 } from "@/registry/blocks/testimonials-01/block";
import { Toast01 } from "@/registry/blocks/toast-01/block";
import { UsageMeter01 } from "@/registry/blocks/usage-meter-01/block";
import { VerifyEmail01 } from "@/registry/blocks/verify-email-01/block";
import { Welcome01 } from "@/registry/blocks/welcome-01/block";

export function RenderBlock({
  slug,
  state = "default",
}: {
  slug: string;
  state?: BlockState;
}) {
  switch (slug) {
    case "navbar-01":
      return <Navbar01 />;
    case "banner-01":
      return <Banner01 />;
    case "hero-01":
      return <Hero01 />;
    case "logo-cloud-01":
      return <LogoCloud01 />;
    case "features-01":
      return <Features01 />;
    case "pricing-01":
      return <Pricing01 />;
    case "comparison-01":
      return <Comparison01 />;
    case "testimonials-01":
      return <Testimonials01 />;
    case "faq-01":
      return <Faq01 />;
    case "cta-01":
      return <Cta01 />;
    case "changelog-01":
      return <Changelog01 />;
    case "blog-list-01":
      return <BlogList01 />;
    case "contact-01":
      return <Contact01 />;
    case "newsletter-01":
      return <Newsletter01 />;
    case "footer-01":
      return <Footer01 />;
    case "shell-01":
      return <Shell01 state={state} />;
    case "stats-01":
      return <Stats01 state={state} />;
    case "data-table-01":
      return <DataTable01 state={state} />;
    case "activity-01":
      return <Activity01 state={state} />;
    case "notifications-01":
      return <Notifications01 state={state} />;
    case "profile-01":
      return <Profile01 state={state} />;
    case "files-01":
      return <Files01 state={state} />;
    case "search-results-01":
      return <SearchResults01 state={state} />;
    case "onboard-01":
      return <Onboard01 />;
    case "settings-01":
      return <Settings01 state={state} />;
    case "api-keys-01":
      return <ApiKeys01 state={state} />;
    case "billing-01":
      return <Billing01 state={state} />;
    case "team-invite-01":
      return <TeamInvite01 state={state} />;
    case "empty-state-01":
      return <EmptyState01 />;
    case "login-01":
      return <Login01 state={state} />;
    case "signup-01":
      return <Signup01 state={state} />;
    case "forgot-password-01":
      return <ForgotPassword01 state={state} />;
    case "verify-email-01":
      return <VerifyEmail01 state={state} />;
    case "command-palette-01":
      return <CommandPalette01 />;
    case "toast-01":
      return <Toast01 />;
    case "confirm-dialog-01":
      return <ConfirmDialog01 />;
    case "status-01":
      return <Status01 state={state} />;
    case "cookie-banner-01":
      return <CookieBanner01 />;
    case "welcome-01":
      return <Welcome01 />;
    case "empty-tour-01":
      return <EmptyTour01 />;
    case "invite-gate-01":
      return <InviteGate01 />;
    case "setup-wizard-01":
      return <SetupWizard01 />;
    case "plan-compare-01":
      return <PlanCompare01 />;
    case "usage-meter-01":
      return <UsageMeter01 state={state} />;
    case "failed-payment-01":
      return <FailedPayment01 />;
    case "invoices-01":
      return <Invoices01 state={state} />;
    case "seats-01":
      return <Seats01 />;
    case "cancel-reason-01":
      return <CancelReason01 />;
    case "filters-01":
      return <Filters01 />;
    case "chart-01":
      return <Chart01 state={state} />;
    case "export-bar-01":
      return <ExportBar01 />;
    case "inbox-01":
      return <Inbox01 state={state} />;
    case "comments-01":
      return <Comments01 />;
    case "share-01":
      return <Share01 />;
    case "blog-post-01":
      return <BlogPost01 />;
    case "docs-01":
      return <Docs01 />;
    case "legal-01":
      return <Legal01 />;
    case "case-study-01":
      return <CaseStudy01 />;
    case "process-01":
      return <Process01 />;
    case "integrations-01":
      return <Integrations01 />;
    case "security-01":
      return <Security01 />;
    case "workspace-switcher-01":
      return <WorkspaceSwitcher01 />;
    case "connections-01":
      return <Connections01 state={state} />;
    case "sessions-01":
      return <Sessions01 state={state} />;
    case "permissions-01":
      return <Permissions01 />;
    case "webhooks-01":
      return <Webhooks01 />;
    case "two-factor-01":
      return <TwoFactor01 />;
    case "sso-01":
      return <Sso01 />;
    case "recovery-codes-01":
      return <RecoveryCodes01 />;
    case "service-health-01":
      return <ServiceHealth01 state={state} />;
    case "keyboard-shortcuts-01":
      return <KeyboardShortcuts01 />;
    case "job-progress-01":
      return <JobProgress01 />;
    case "workspace-create-01":
      return <WorkspaceCreate01 />;
    case "import-mapping-01":
      return <ImportMapping01 />;
    case "launch-checklist-01":
      return <LaunchChecklist01 />;
    case "invoice-detail-01":
      return <InvoiceDetail01 />;
    case "billing-address-01":
      return <BillingAddress01 />;
    case "credit-balance-01":
      return <CreditBalance01 state={state} />;
    case "retention-01":
      return <Retention01 state={state} />;
    case "funnel-01":
      return <Funnel01 state={state} />;
    case "event-inspector-01":
      return <EventInspector01 state={state} />;
    case "saved-views-01":
      return <SavedViews01 />;
    case "support-ticket-01":
      return <SupportTicket01 />;
    case "notification-preferences-01":
      return <NotificationPreferences01 />;
    case "roadmap-01":
      return <Roadmap01 />;
    case "glossary-01":
      return <Glossary01 />;
    case "release-note-01":
      return <ReleaseNote01 />;
    case "ai-chat-01":
      return <AiChat01 state={state} />;
    case "kanban-01":
      return <Kanban01 state={state} />;
    case "calendar-01":
      return <Calendar01 state={state} />;
    case "booking-01":
      return <Booking01 state={state} />;
    case "upload-01":
      return <Upload01 state={state} />;
    case "customers-01":
      return <Customers01 state={state} />;
    case "record-detail-01":
      return <RecordDetail01 state={state} />;
    case "analytics-01":
      return <Analytics01 state={state} />;
    case "checkout-01":
      return <Checkout01 state={state} />;
    case "automation-01":
      return <Automation01 state={state} />;
    case "domain-01":
      return <Domain01 state={state} />;
    case "feedback-01":
      return <Feedback01 state={state} />;
    case "version-history-01":
      return <VersionHistory01 state={state} />;
    default:
      return null;
  }
}

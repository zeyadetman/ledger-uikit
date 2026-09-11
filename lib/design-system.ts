export const designPresets = [
  {
    id: "ledger",
    name: "Ledger",
    description: "Paper, ink, precise rules.",
    light: ["#f4f1ea", "#171717", "#6b645b", "#d9d1c3", "#c43e1c"],
    dark: ["#12110f", "#ede8de", "#9e9689", "#2a2722", "#e76b49"],
    font: "var(--font-geist-sans), sans-serif",
    radius: 0,
    spacing: 1,
    casing: "uppercase",
  },
  {
    id: "atelier",
    name: "Atelier",
    description: "Literary serif, wine, generous space.",
    light: ["#fff8f2", "#35202a", "#775461", "#e6cdd3", "#9c244c"],
    dark: ["#20151b", "#f9eaf0", "#c7a2b1", "#513642", "#f291b3"],
    font: 'Georgia, "Times New Roman", serif',
    radius: 4,
    spacing: 1.1,
    casing: "none",
  },
  {
    id: "mint",
    name: "Mint",
    description: "Fresh green, soft shapes, open spacing.",
    light: ["#f0fff8", "#123c30", "#476f60", "#bce6d1", "#167650"],
    dark: ["#102c23", "#e0fff1", "#9bc9b4", "#30594a", "#6be0ab"],
    font: "var(--font-geist-sans), sans-serif",
    radius: 16,
    spacing: 1.08,
    casing: "none",
  },
  {
    id: "terminal",
    name: "Terminal",
    description: "Monospaced, compact, phosphor green.",
    light: ["#eef8ed", "#152c16", "#446545", "#b4cdb4", "#276b2d"],
    dark: ["#07150b", "#c6ffd0", "#84b78e", "#284b30", "#78ed8a"],
    font: "var(--font-geist-mono), monospace",
    radius: 0,
    spacing: 0.9,
    casing: "uppercase",
  },
  {
    id: "cobalt",
    name: "Cobalt",
    description: "Cool precision with rounded controls.",
    light: ["#f1f6ff", "#172c51", "#526684", "#c2d1eb", "#2256b5"],
    dark: ["#0e1b32", "#e5edff", "#9daed0", "#304568", "#87b0ff"],
    font: "var(--font-geist-sans), sans-serif",
    radius: 8,
    spacing: 1,
    casing: "none",
  },
  {
    id: "orchid",
    name: "Orchid",
    description: "Expressive violet and spacious type.",
    light: ["#fcf4ff", "#382346", "#775885", "#dec9e9", "#8737a5"],
    dark: ["#24142e", "#f7e5ff", "#c5a1d1", "#533161", "#d89af2"],
    font: 'Georgia, "Times New Roman", serif',
    radius: 12,
    spacing: 1.12,
    casing: "none",
  },
  {
    id: "ember",
    name: "Ember",
    description: "Bold warm surfaces and dense rhythm.",
    light: ["#fff3e8", "#462619", "#80604c", "#e7c8ad", "#a93d12"],
    dark: ["#2c180f", "#ffecdd", "#d2a98c", "#603c28", "#ffab73"],
    font: "var(--font-geist-sans), sans-serif",
    radius: 3,
    spacing: 0.95,
    casing: "uppercase",
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Calm teal, fluid shapes, airy rhythm.",
    light: ["#effcfc", "#123b41", "#477078", "#b6dce1", "#087984"],
    dark: ["#10282d", "#dcf9fc", "#95c0c6", "#2d5159", "#65d3df"],
    font: "var(--font-geist-sans), sans-serif",
    radius: 20,
    spacing: 1.15,
    casing: "none",
  },
  {
    id: "noir",
    name: "Noir",
    description: "High contrast, editorial serif.",
    light: ["#ffffff", "#101010", "#656565", "#d4d4d4", "#484848"],
    dark: ["#101010", "#f5f5f5", "#a9a9a9", "#383838", "#c9c9c9"],
    font: 'Georgia, "Times New Roman", serif',
    radius: 0,
    spacing: 1.05,
    casing: "none",
  },
  {
    id: "citrus",
    name: "Citrus",
    description: "Acid yellow, bold type, crisp edges.",
    light: ["#fafde9", "#29330d", "#626b3b", "#d4dda7", "#626f0b"],
    dark: ["#202509", "#f3ffc9", "#b7c58a", "#495323", "#d5ed60"],
    font: "var(--font-geist-sans), sans-serif",
    radius: 6,
    spacing: 1.04,
    casing: "uppercase",
  },
  {
    id: "rose",
    name: "Rose",
    description: "Soft rose, friendly curves, quiet labels.",
    light: ["#fff2f4", "#4e2330", "#875665", "#eec4cf", "#b52c58"],
    dark: ["#30151f", "#ffe6ee", "#d7a0b2", "#613244", "#ff92b6"],
    font: "var(--font-geist-sans), sans-serif",
    radius: 24,
    spacing: 1.1,
    casing: "none",
  },
] as const;
export type DesignId = (typeof designPresets)[number]["id"];
export const DESIGN_KEY = "ledger-design-system";
export const MODE_KEY = "ledger-color-mode";
export function validDesign(value: string | null): DesignId {
  return designPresets.find((p) => p.id === value)?.id ?? "ledger";
}

const tokens = ["paper", "ink", "muted", "rule", "signal"];
export const designCSS = designPresets
  .map((p) => {
    const selector = `:root[data-design="${p.id}"]`;
    const colors = (values: readonly string[]) =>
      values.map((v, i) => `--ledger-${tokens[i]}:${v}`).join(";");
    return `${selector}{${colors(p.light)};--design-font:${p.font};--design-radius:${p.radius}px;--spacing:${0.25 * p.spacing}rem;--design-case:${p.casing}}${selector}.dark{${colors(p.dark)}}`;
  })
  .join("\n");
export const designBootstrap = `(function(){try{var ids=${JSON.stringify(designPresets.map((p) => p.id))};var p=new URLSearchParams(location.search);var d=p.get('design')||localStorage.getItem('${DESIGN_KEY}');document.documentElement.dataset.design=ids.includes(d)?d:'ledger';var m=p.get('theme')||localStorage.getItem('${MODE_KEY}');document.documentElement.classList.toggle('dark',m==='dark');}catch(e){}})();`;

/** Standalone Tailwind v4 stylesheet for consumers of copied blocks. */
export function exportThemeCSS(id: DesignId) {
  const preset = designPresets.find((p) => p.id === id)!;
  const variables = (values: readonly string[]) =>
    values.map((value, i) => `  --ledger-${tokens[i]}: ${value};`).join("\n");
  return `@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
${tokens.map((token) => `  --color-ledger-${token}: var(--ledger-${token});`).join("\n")}
  --font-sans: var(--design-font);
  --font-mono: var(--font-geist-mono, ui-monospace), monospace;
}

:root {
${variables(preset.light)}
  --design-font: ${preset.font.replace("var(--font-geist-sans)", "var(--font-geist-sans, ui-sans-serif)").replace("var(--font-geist-mono)", "var(--font-geist-mono, ui-monospace)")};
  --spacing: ${0.25 * preset.spacing}rem;
  color-scheme: light;
}
.dark {
${variables(preset.dark)}
  color-scheme: dark;
}
body {
  background: var(--ledger-paper);
  color: var(--ledger-ink);
  font-family: var(--design-font);
  -webkit-font-smoothing: antialiased;
}
* { border-radius: 0; box-shadow: none; }
:is(button, input, select, textarea, [class~="border"]) { border-radius: ${preset.radius}px; }
${preset.id === "ledger" ? "" : `:is(h1, h2, h3, button, label) { text-transform: ${preset.casing}; letter-spacing: normal; }`}
::selection { background: var(--ledger-signal); color: var(--ledger-paper); }
:focus-visible { outline: 2px solid var(--ledger-signal); outline-offset: 3px; }
.ledger-link { position: relative; display: inline-block; color: var(--ledger-ink); text-decoration: none; }
.ledger-link::after { content: ""; position: absolute; bottom: -2px; left: 0; width: 40px; height: 2px; background: var(--ledger-signal); transition: width 120ms ease-out; }
.ledger-link:hover::after, .ledger-link:focus-visible::after { width: 100%; }
.bg-grid-pattern { background-image: radial-gradient(var(--ledger-ink) 1px, transparent 1px); background-size: 24px 24px; }
`;
}

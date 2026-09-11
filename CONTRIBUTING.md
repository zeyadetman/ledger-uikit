# Contributing to LEDGER

Thanks for helping make the kit more useful.

For a bug report, include the route or block slug, reproduction steps, browser, viewport, preset, and expected behavior. For a larger feature or new block category, open an issue first to discuss the scope.

## Development

Follow the setup in [README.md](README.md). Keep changes focused and preserve existing work. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before submitting a pull request. Stop the development server before a production build in the same checkout.

## Adding a block

1. Create `registry/blocks/<slug>/block.tsx` and `meta.json`, following a neighboring block.
2. Keep the source self-contained. Use `lucide-react` for icons and shared `ledger-*` color tokens. The only shared helper import should be `cn` from `@/lib/utils` if needed; include its `// requires:` comment.
3. Use the original LEDGER design as the baseline: Geist typography, square corners, crisp borders, and no shadows. Use tokens so alternative presets work too.
4. Add accurate dependency and supported-state metadata to `lib/blocks.ts`, and register the block in `registry/render-block.tsx`.
5. Check supported states at all three preview widths, in light and dark modes. Check keyboard navigation, input labels, and overflow. Update `llms.txt` when the block inventory changes.

Include a short description of the problem and resulting behavior in your pull request, plus screenshots for visual changes and the checks you ran.

Contributions are licensed under this repository’s Apache-2.0 license.

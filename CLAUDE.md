# CLAUDE.md

## Project Overview

vite-plugin-capsize-radix is a Vite plugin that integrates Capsize (precise typography system) with Radix UI themes. It generates bulletproof typography CSS that allows fonts to render exactly as specified with pixel-perfect text alignment.

## Tech Stack

- TypeScript (ES2020)
- pnpm (workspace with root + example app)
- Vite plugin architecture
- tsup for building (ESM + CJS)
- vitest for testing

## Key Commands

```bash
pnpm run build      # Build the plugin
pnpm run check      # TypeScript type checking
pnpm run clean      # Remove dist directory
```

Example app (in `example/`):

```bash
pnpm run dev        # Start dev server
pnpm run build      # Production build
pnpm run lint       # Lint TypeScript files
```

## Project Structure

- `src/index.ts` - Main plugin implementation
- `tests/` - Vitest tests
- `example/` - Demo React app with Radix UI showing various font configurations

## Code Conventions

- Use backtick quotes (enforced by ESLint)
- No semicolons (Prettier config)
- 2-space indentation
- TypeScript strict mode enabled

## Plugin Configuration

The plugin accepts:

- `outputPath` (required) - Where to save generated CSS
- `textStyles` - Font size/line height pairs
- `defaultFontStack` - Default font metrics
- `headingFontStack` - Heading-specific metrics
- `codingFontStack` - Code element metrics

## Dependencies

Key dependencies: `@capsizecss/core`, `@capsizecss/metrics`, `mustache`, `vite`

# KLYP STUDIOS

Production foundation for the KLYP STUDIOS website and future creator/editor platform.

## Stack

- Next.js App Router with React and strict TypeScript
- ESLint with Next.js rules
- Prettier for formatting
- CSS custom properties for the design-token layer

## Development

```bash
pnpm install
pnpm dev
```

Run validation with `pnpm lint`, `pnpm typecheck`, `pnpm format:check`, and `pnpm build`.

## Architecture

- `src/app`: routes, layouts, metadata, and global styles
- `src/components`: shared presentational components
- `src/features`: domain-oriented product capabilities
- `src/config`: application configuration and public constants
- `src/lib`: domain-agnostic utilities
- `src/server`: future server-only integrations and services
- `src/types`: types shared across independent modules

Use the `@/*` alias for imports from `src`. Keep secrets out of source control; use `.env.example` to document public configuration names and required local variables.

## Portfolio updates

Portfolio entries live in `src/config/portfolio.ts`. Add an item only after its public
use is approved. Required fields are `id`, `title`, `category`, `format`, `role`,
`featured`, `status`, and `shortDescription`; add creator names, media URLs, and links
only when cleared. Place local thumbnails in `public/portfolio/` and reference them as
`/portfolio/file-name.jpg`. Do not publish unapproved work, names, thumbnails, or video links.

## Visual system

- Semantic color and fluid type tokens live in `src/app/globals.css`.
- The public visual language uses cinematic black and graphite surfaces, bold modern type, controlled KLYP red, and restrained glass depth.
- Use `Container` and `Section` for page width, gutters, and vertical rhythm.
- Core controls live in `src/components/ui`; responsive media ratios use `MediaFrame`.
- Public routes share navigation and footer structure through `src/app/(public)`.
- Homepage sections and neutral content boundaries live in `src/features/home`.
- Shared foundations for public page heroes, processes, CTAs, media slots, and forms live in `src/features/public-pages`.
- Future contact and editor-application payload types and option constants live in `src/features/public-pages/form-config.ts`.
- Portfolio, founder, and form boundaries must remain factual and must not imply unconfirmed work, people, results, or working submissions.

Form backends, dashboards, authentication, databases, CMS, payments, training workflows, and production content are intentionally deferred.

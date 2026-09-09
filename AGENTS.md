# Agent guide — `@vtexdocs/components`

## Project overview

`@vtexdocs/components` is the shared React component library behind VTEX's documentation
portals: the [Developers Portal](https://github.com/vtexdocs/devportal) and the
[Help Center](https://github.com/vtexdocs/helpcenter). It publishes ~48 components
(headers, sidebars, search, MDX rendering, feedback widgets, cards, tags) plus the i18n
catalogs and React contexts those components need, bundled by `tsup` into a single ESM
entry point.

Two things make this repository unusual, and both matter on every change:

1. **`dist/` is committed.** Consumers install by git reference
   (`"@vtexdocs/components": "https://github.com/vtexdocs/components.git#branch"`), so the
   committed build output *is* the package. A `src/` change without a rebuilt `dist/`
   ships nothing.
2. **There is no test suite and CI runs no quality gate.** The only pull-request workflow
   validates release labels. Storybook, the TypeScript compiler, and ESLint are the entire
   safety net, and they run locally.

## Sources of truth

- `.specify/memory/constitution.md` — the governing principles, architectural boundaries,
  project structure, and quality gates. Read it before any non-trivial change.
- `.agents/skills/component-authoring/` — how to actually create, change, or review a
  component (step order, file templates, pre-review checklist).
- `.agents/skills/specification/` and `.agents/skills/implementing/` — the VTEX SDD Lite
  workflow, vendored from [vtex/vtex-agent-skills](https://github.com/vtex/vtex-agent-skills).
  `specification` writes `specs/<feature-name>.md`; `implementing` consumes an approved one.
- `README.md` — installation, Storybook, the `ThemeProvider` / `LibraryContextProvider`
  contract, Algolia `SearchConfig`, and the branch-reference testing flow.
- `package.json` — the `exports` map and `peerDependencies` are the public contract.
- `src/index.ts` — the single public API barrel.

## Tech stack

- **TypeScript** `^5.0.4`, `strict`, `baseUrl: src`, target `ESNext`.
- **React** `^18.2.0` / **React DOM** `18.2.0` / **Next.js** `13.2.4` — all
  `peerDependencies`, supplied by the consuming portal.
- **`@vtex/brand-ui`** `^0.46.1` — the design system: components, theme, and
  `SxStyleProp` typing.
- **`tsup`** `^7.2.0` → `dist/index.mjs`, `dist/index.d.mts`, `dist/index.css` (ESM only).
- **Storybook** `^7.5.2` with `@storybook/nextjs`.
- **Algolia** via `react-instantsearch-dom` `^6.37.0`, `algoliasearch`, `search-insights`.
- **Content**: `next-mdx-remote`, `@code-hike/mdx`, `mermaid` `^10.1.0`,
  `html-react-parser`.
- **Quality**: ESLint `^7.32.0` + Prettier `^2.5.1` (`@vtex/prettier-config`).
- **Release**: `standard-version` `^9.5.0`, driven by pull-request labels.

## Prerequisites

- **Yarn Classic `>= 1.22.18`.** `npm` is blocked by `engines` (`"npm": "please-use-yarn"`).
  Never run `npm install`; never commit `package-lock.json` changes.
- No Node floor is declared in `engines`. The Babel targets (`chrome 100`, `safari 15`,
  `firefox 91`) define the browser floor.
- Algolia credentials are optional for local work. Storybook reads
  `NEXT_PUBLIC_ALGOLIA_APP_ID`, `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY`, and `NEXT_PUBLIC_INDEX`
  from the environment and degrades gracefully when they are absent — search-dependent
  stories simply will not fetch. Do not invent or commit credentials.

## Build & run

```sh
yarn                 # install
yarn storybook       # develop and visually verify, port 6006
yarn lint            # eslint . --ext .ts,.tsx — see the baseline caveat below
yarn build           # rm -rf dist && tsup — must succeed
```

`yarn build-storybook` is documented in `README.md` as not working as expected. Do not
rely on it, and do not report a change as verified on the strength of it.

**Lint baseline is red.** `yarn lint` reports 930 pre-existing errors on `main` — 929
`prettier/prettier` and 1 `@typescript-eslint/no-unused-vars`. A Prettier config was
adopted but never applied to the existing source. So:

- The gate is **zero errors in the files your change touches**, not a clean tree.
- **Never** run `eslint --fix` across `src/`. It would rewrite most of the library in one
  unreviewable diff and force a full `dist/` rebuild on top of it. Clearing the baseline
  is a maintainer decision with its own dedicated pull request.
- Never opportunistically reformat code you did not otherwise need to change.

`yarn release` runs `standard-version`. It is **CI-owned** — do not run it locally.

## Test commands

**None.** There is no test runner and no test file in this repository, though
`.npmignore` already excludes `__tests__`. Verification is therefore:

1. `yarn lint` — no new errors in the files you touched.
2. `yarn build` — succeeds.
3. `yarn storybook` — the affected stories render correctly across the viewports declared
   in `.storybook/preview.ts` (360px through 2560px).

Adopting a test runner is an open decision recorded as a `TODO(team)` in the
constitution's Principle IV. Do not introduce one unilaterally.

## Architecture boundaries

Dependencies flow in one direction only.

| Layer | Location | MAY import | MUST NOT import |
|---|---|---|---|
| Barrel | `src/index.ts` | `components/*`, `lib/*`, `utils/*` | — |
| Composed features | `src/lib/*` | `components/*`, `utils/*` | `src/index.ts` |
| Components | `src/components/*` | sibling `components/*`, `utils/*` | `src/index.ts`, `lib/*` |
| Shared utilities | `src/utils/*` | `utils/*` | `components/*`, `lib/*`, `src/index.ts` |

- `src/components/` = presentational building blocks. `src/lib/` = composed,
  portal-level features (`markdown-renderer`, `sidebar`, `search`, `table-of-contents`,
  `on-this-page`, `contributors`, `cookie-bar`, `hamburger-menu`).
- Nothing imports from `src/index.ts` internally — that cycles through the barrel and
  breaks consumer tree-shaking. Nothing in `src/` imports from `dist/`.
- Do not add a new top-level directory under `src/` without amending the constitution.

## Coding conventions

Only rules that are actually enforced or uniformly followed today:

- **Component folder**: `src/components/<kebab-case>/` containing `index.tsx` (component +
  exported `<Component>Props`), `styles.ts`, `<Component>.stories.tsx`, and optionally
  `<Component>.types.ts` and `functions.ts`. Component and story files are `PascalCase`.
- **Props**: a named, exported `type <Component>Props`, JSDoc'd, declared beside the
  component. Variants are union types with a default, not stacked booleans. Booleans read
  as predicates (`isOpen`, `hasError`).
- **Styling**: typed `SxStyleProp` constants in `styles.ts` under a single default export,
  applied via `sx`. Primitives from `@vtex/brand-ui`. One CSS Module exists
  (`lib/markdown-renderer/styles.module.css`) and is a justified exception.
- **Imports**: `baseUrl: src` aliases (`components/tag`, `lib/contributors`,
  `utils/typings/types`), not `../../` traversal. Only `./styles` and `./functions` stay
  relative.
- **Types**: `strict`. `@typescript-eslint/no-explicit-any` and `no-unused-vars` are
  `error`. `any` is prohibited.
- **Formatting**: `@vtex/prettier-config`. Format the code you touch; leave the rest
  alone — see the lint baseline caveat above.
- **i18n**: every user-facing string — including `alt`, `aria-label`, `title` — comes from
  `src/messages/{en,es,pt}.json` via `messages[locale][key] ?? messages.en[key]`, with
  `locale` read from `LibraryContext`. New keys go into all three catalogs in the same
  commit.
- **Stories**: `title: 'Example/<Name>'`, `tags: ['autodocs']`, `ThemeProvider` decorator,
  `satisfies Meta<typeof Component>`. Deterministic inline fixtures, no live network.
- **Commits**: Conventional Commits (`feat:`, `fix:`, `chore:`, `styles:`) — the release
  version is derived from them.

## Expected agent workflow

1. Read `.specify/memory/constitution.md` and, for component work, the
   `component-authoring` skill.
2. `yarn` to install.
3. For anything larger than a contained fix, write a spec first with the `specification`
   skill → `specs/<feature-name>.md`. Once a maintainer marks it `Approved`, the
   `implementing` skill executes it.
4. Make scoped changes that follow the existing conventions above.
5. Verify: `yarn lint`, `yarn build`, and `yarn storybook` for the affected stories.
6. Commit `src/` changes, then commit the regenerated `dist/` **separately**.
7. Open a pull request using `.github/PULL_REQUEST_TEMPLATE.md`, apply exactly one release
   label (`release-no` | `release-auto` | `release-patch` | `release-minor` |
   `release-major`), and record the command output.

## Safety guardrails

- **NEVER** run `npm` — `engines` blocks it. Yarn Classic only.
- **NEVER** hand-edit `dist/`, `CHANGELOG.md`, the `package.json` version, or release
  tags. All generated.
- **NEVER** merge a `src/` change that consumers need without a committed `dist/` rebuild.
- **NEVER** commit credentials. Algolia keys, GitHub tokens, and portal secrets live in
  the consuming portal's environment and arrive via `SearchConfig` or props.
- **NEVER** remove or rename a `src/index.ts` export, a prop, or a prop type without the
  `release-major` label — two production portals install from this repository directly.
- **NEVER** introduce Tailwind. `postcss.config.js` loads the plugin, but there is no
  config and no directive in `src/`; it is vestigial.
- **NEVER** introduce a second styling system, package manager, bundler, or test runner
  without a maintainer decision.
- **NEVER** bulk-format the repository or run `eslint --fix` across `src/`.
- **NEVER** change `.github/workflows/` as a side effect of a component change.
- **NEVER** mix infrastructure and behavior in one pull request.
- `AGENTS.md` and `CLAUDE.md` are byte-identical mirrors. Edit both, or neither.

# VTEX Docs Component Library Constitution

This document governs `@vtexdocs/components`, the shared React component library
consumed by the [Developers Portal](https://github.com/vtexdocs/devportal) and the
[Help Center](https://github.com/vtexdocs/helpcenter). It is the top-level source of
truth for how code in this repository is structured, styled, typed, documented, and
released.

Every rule below is derived from a convention that already exists in this repository.
Where a rule sets a floor the repository has not yet reached, that gap is marked
explicitly with a `TODO(team)` rather than presented as current practice.

## Core Principles

### I. The Public API Is a Contract

This repository publishes a package. Anything reachable by a consumer is API, and API
changes are breaking changes until proven otherwise.

- Every public component, helper, and type MUST be exported from the single barrel at
  `src/index.ts`. A component that is not in the barrel is private to the library, and
  consumers MUST NOT be told to deep-import from `dist/` or `src/`.
- Public types MUST be exported explicitly with `export type` from the barrel, next to
  the component they describe (e.g. `type FooterProps`, `type TagColor`).
- Component props MUST be a named, exported `type` (`<Component>Props`) declared beside
  the component — never an inline anonymous shape.
- The entry points declared in `package.json` `exports` (`.`, `./styles`,
  `./styles.css`, `./dist/index.css`) are part of the contract. Adding, removing, or
  repointing an entry is a MAJOR change.
- `peerDependencies` (`next`, `react`, `react-dom`, `react-share`) define the consumer
  environment. Widening or narrowing a peer range is a release-visible decision and
  MUST be called out in the PR description.
- Removing an export, renaming a prop, changing a prop's type, or changing a default
  value is a breaking change and MUST carry the `release-major` label. Adding an
  optional prop or a new export is `release-minor`. Internal-only changes are
  `release-patch`.

Rationale: Two production portals install this library straight from git. There is no
deprecation window and no staging consumer, so the barrel plus the `exports` map is the
only place a reviewer can see the whole blast radius of a change.

### II. One Component, One Folder

A component is a self-contained, kebab-case folder. Its shape is predictable enough that
any contributor can navigate the library by convention alone.

- Folder name: `kebab-case` (`troubleshooting-card/`, `chip-filter/`). Component name and
  story title: `PascalCase`.
- The folder contains, in this order of necessity:
  - `index.tsx` — the component and its exported props type (the near-universal case:
    42 of them today), or `index.ts` as a barrel when the component lives in a
    `<Component>.tsx` file of its own.
  - `styles.ts` — the style object (see Principle III).
  - `<Component>.stories.tsx` — the Storybook entry (see Principle V).
  - `<Component>.types.ts` — only when the types are shared beyond the component or are
    large enough to obscure the component file.
  - `functions.ts` — pure helpers used only by this component.
- One component, one concern. Logic reused by more than one component MUST be lifted to
  `src/utils/` (helpers, hooks, typings, context) rather than duplicated or imported
  sideways between component folders.
- Private subcomponents belong in the same folder as a sibling file
  (e.g. `header/dropdown-menu.tsx`, `feedback-modal/modal.tsx`), not in a new top-level
  folder, and MUST NOT be added to the barrel unless consumers need them.
- Imports MUST use the `baseUrl: src` aliases (`components/tag`, `lib/contributors`,
  `utils/typings/types`) rather than relative traversal (`../../utils/...`). Within a
  single component folder, `./styles` and `./functions` are correct.

Rationale: 48 component folders already follow this shape; the value is that it is
uniform, so review effort goes to behavior instead of layout. Mixed alias and relative
imports for the same target (present today in `troubleshooting-card`) make the same
module look like two different modules in review.

### III. Styling Flows Through brand-ui

`@vtex/brand-ui` is the design system. It is not one styling option among several.

- Layout and visual primitives MUST come from `@vtex/brand-ui` (`Box`, `Flex`, `Text`,
  `Link`, …). Do not hand-roll an element that the design system already provides.
- Styles MUST be declared as typed `SxStyleProp` constants in the component's
  `styles.ts`, grouped under a single default export, and applied via the `sx` prop:

  ```ts
  import type { SxStyleProp } from '@vtex/brand-ui'

  const container: SxStyleProp = { alignItems: 'center', columnGap: '16px' }

  export default { container }
  ```

- Inline `sx` objects in JSX are permitted only for a handful of trivial, single-use
  declarations. Anything reused, responsive, or longer than a few properties belongs in
  `styles.ts`.
- Consumers MUST wrap the library in the `@vtex/brand-ui` `ThemeProvider`; every story
  MUST therefore use the `ThemeProvider` decorator so Storybook renders what production
  renders.
- CSS Modules are a deliberate exception, not an alternative. The one file in the library
  (`src/lib/markdown-renderer/styles.module.css`) exists because MDX output cannot be
  reached with `sx`. New CSS Modules require the same justification in the PR.
- Tailwind MUST NOT be introduced. `postcss.config.js` loads it, but there is no
  `tailwind.config.js` and no `@tailwind`/`@apply` directive anywhere in `src/` — the
  plugin is vestigial and MUST NOT be treated as a sanctioned styling path.

Rationale: 44 `styles.ts` files make styling greppable, diffable, and type-checked. The
moment styling scatters across inline `sx`, CSS Modules, and Tailwind, the two consuming
portals stop looking like one product.

### IV. Type Safety and Lint Are Merge Blockers

The library is typed strictly and the linter is configured to fail, not to warn.

- TypeScript runs in `strict` mode and MUST compile with zero errors. The build emits
  declarations (`emitDeclarationOnly`, `dts: true`), so a type error is a shipped defect.
- `@typescript-eslint/no-explicit-any` and `@typescript-eslint/no-unused-vars` are
  `error`. `any` is prohibited. The existing `eslint-disable` escapes for `any` in
  `src/utils/context/libraryContext.tsx` are legacy debt, not precedent: every new
  suppression MUST carry a comment justifying it and MUST be raised in the PR.
- Formatting is `@vtex/prettier-config` via `prettier/prettier: error`. `yarn lint` MUST
  report **zero errors in the files a change touches**.
- The repository-wide baseline is **not** clean: `yarn lint` currently reports 930 errors
  on `main` (929 `prettier/prettier`, 1 `@typescript-eslint/no-unused-vars`). This is
  pre-existing formatting debt — a Prettier baseline that was configured but never
  applied — and it is the reason the gate is scoped to touched files rather than the whole
  tree.
- **Do NOT bulk-format the repository.** Running `eslint --fix` across `src/` would
  rewrite most of the library in one unreviewable diff and, because `dist/` is committed
  (Principle VII), force a full rebuild on top of it. Clearing the baseline is a
  maintainer decision with its own PR, not a side effect of a feature change.
- No `console.log` or other debug output in committed code.
- Use `yarn`, never `npm` — `engines` declares `npm: please-use-yarn` and
  `yarn: >= 1.22.18` (Yarn Classic). Do not commit `package-lock.json` changes.

<!-- TODO(team): this repository has no automated verification, and its lint baseline is
     already red. `.github/workflows/` only verifies release labels and runs
     standard-version on merge, so `yarn lint` and `yarn build` never run on a pull
     request; `yarn lint` reports 930 pre-existing errors on `main`; and there is no test
     runner and no test in the repository, though `.npmignore` already excludes
     `__tests__`. Three decisions, in this order: (a) clear the Prettier baseline in one
     dedicated PR (`eslint --fix` plus the single unused-var fix, with the matching
     `dist/` rebuild) — until this lands, a repository-wide lint gate is impossible;
     (b) add a PR quality-gate workflow running lint and build; (c) choose a test runner
     and starting scope — Vitest + Testing Library is the VTEX default — then add a
     Testing principle with a coverage floor. Until all three land, Principle V
     (Storybook) carries the entire verification burden. -->

Rationale: With `dist/` published straight to two portals and no test suite behind it,
the compiler and the linter are the only automated defense this library has.

### V. Storybook Is the Component's Specification

Storybook is where a component is designed, reviewed, and demonstrated. It is the
library's documentation and, absent a test runner, its executable check.

- Every new or materially changed component MUST have a `<Component>.stories.tsx` with:
  - `title: 'Example/<ComponentName>'`, the `component` reference, and
    `tags: ['autodocs']` (the `docs.autodocs: 'tag'` setting makes this the opt-in).
  - a `ThemeProvider` decorator (Principle III).
  - a `Default` story, plus a story per meaningful variant, boundary, and empty or error
    state — e.g. `author/Author.stories.tsx` covers the long-name overflow case.
  - `satisfies Meta<typeof Component>` and `StoryObj<typeof meta>` for typed args.
- Story fixtures MUST be self-contained and deterministic. Inline the data (as
  `Author.stories.tsx` does with data-URI avatars) or use a checked-in fixture under the
  component's folder. Stories MUST NOT depend on live network calls.
- Responsive behavior MUST be verified against the viewports declared in
  `.storybook/preview.ts` (360px through 2560px) before requesting review.
- Props MUST carry JSDoc comments (`/** … */`) so `autodocs` renders a usable prop table,
  as `libraryContext.tsx` already does.

<!-- TODO(team): 17 of 48 component folders still ship without a story (`code-block`,
     `documentation-card`, `lightbox`, `search-*`, `sidebar-*`, `steps`, `tooltip`,
     `youtube-frame`, …), and `yarn build-storybook` is documented as broken in
     README.md. Decide on a backfill order and fix the static build, then tighten this
     principle from "new or changed" to "every component". -->

Rationale: There is no test suite. Stories are the only place a reviewer can see a
component actually render across states and screen sizes.

### VI. User-Facing Text Is Localized, Never Hardcoded

The portals ship in English, Portuguese, and Spanish. A hardcoded string is a bug in two
of the three.

- Every user-visible string MUST come from the catalogs in `src/messages/`
  (`en.json`, `es.json`, `pt.json`), read through the established pattern:

  ```tsx
  const { locale } = useContext(LibraryContext)
  const label = messages[locale]['component_name.thing'] ?? messages.en['component_name.thing']
  ```

- Keys are flat and dot-namespaced by component (`feedback_section.question`,
  `heading_link.copy`). A key MUST be added to **all three** catalogs in the same commit;
  an English-only key is an incomplete change.
- Accessible text is user-facing text: `alt`, `aria-label`, and `title` MUST be localized
  by the same rule.
- Locale is supplied by the consumer through `LibraryContextProvider`. Components MUST
  read it from `LibraryContext` and MUST NOT detect locale themselves or accept a
  competing locale prop.
- A fallback to `messages.en` (or to a literal, as `copy-heading-link` does) is required
  so a missing key degrades instead of rendering `undefined`.

Rationale: The catalogs and the `LibraryContext` locale already exist and are used by
ten-plus components. Bypassing them ships English into the Brazilian and Spanish portals.

### VII. The Built Artifact Ships With the Source

`dist/` is committed to this repository. This is unusual and it is deliberate: consumers
install the library by git reference, so the branch content *is* the package.

- Any change to `src/` that consumers must receive MUST be followed by `yarn build` and a
  commit of the regenerated `dist/`. A source-only PR silently does nothing for a portal
  pinned to that branch.
- `dist/` MUST NOT be hand-edited. It is generated output; the only valid way to change it
  is to change `src/` and rebuild.
- `dist/` changes MUST be a separate commit from the `src/` changes that produced them, so
  reviewers can read the real diff without wading through bundled output.
- Versioning is automated. `standard-version` runs on merge and is driven by the PR label
  (`release-no` | `release-auto` | `release-patch` | `release-minor` | `release-major`);
  with no label it defaults to `auto` and derives the bump from commit messages. Commits
  MUST therefore follow Conventional Commits (`feat:`, `fix:`, `chore:`, `styles:` …).
- `CHANGELOG.md`, the version in `package.json`, and release tags are generated. Never
  edit them by hand.

Rationale: The git-reference install flow documented in `README.md` means a forgotten
`yarn build` produces a PR that looks merged and correct while changing nothing
downstream — the single most confusing failure mode in this repository.

## Technology Stack

These are the sanctioned technologies, at the versions currently declared. Same-major
upgrades are expected; a different library or a major-version migration requires
justification in the PR and reviewer approval.

**Language & runtime**

- TypeScript `^5.0.4`, `strict`, target `ESNext`, `moduleResolution: node`,
  `baseUrl: src`.
- React `^18.2.0` / React DOM `18.2.0`, Next.js `13.2.4` — all declared as
  `peerDependencies` and supplied by the consuming portal.
- Yarn Classic `>= 1.22.18`. `npm` is blocked via `engines`. No Node floor is declared in
  `engines`; the Babel targets (`chrome 100`, `safari 15`, `firefox 91`) define the
  browser floor.

**Build & bundling**

- `tsup` `^7.2.0` → a single ESM bundle from `src/index.ts`, with sourcemaps, declaration
  files, and CSS emitted through the `local-css` loader. Output: `dist/index.mjs`,
  `dist/index.d.mts`, `dist/index.css`.
- Babel (`@babel/preset-env`, `-typescript`, `-react`) and PostCSS (`autoprefixer`) serve
  Storybook and the CSS pipeline.

**UI & design system**

- `@vtex/brand-ui` `^0.46.1` — components, theme, and `SxStyleProp` typing.
- Content and interaction: `next-mdx-remote` + `@code-hike/mdx` (MDX rendering),
  `mermaid` `^10.1.0` (diagrams), `html-react-parser`, `react-animate-height`,
  `react-intersection-observer`, `react-svg-pan-zoom`, `react-share`,
  `react-cookie-consent`.

**Search**

- Algolia via `react-instantsearch-dom` `^6.37.0`, `algoliasearch`, and
  `search-insights`. Credentials (`appId`, `apiKey`, `index`) are injected by the
  consumer through `SearchConfig`; they MUST NOT be committed.

**Documentation & quality**

- Storybook `^7.5.2` with the `@storybook/nextjs` framework and the `essentials`,
  `links`, `interactions`, and `onboarding` addons.
- ESLint `^7.32.0` (`@next/next`, `@typescript-eslint`, `prettier`, `storybook` configs)
  and Prettier `^2.5.1` with `@vtex/prettier-config`.
- `standard-version` `^9.5.0` for releases.

**Testing**

- None declared. There is no test runner and no test file in the repository — see the
  open decision recorded in Principle IV.

## Architectural Boundaries

The library has four layers. Dependencies flow in one direction only.

| Layer | Location | MAY import | MUST NOT import |
|---|---|---|---|
| Barrel | `src/index.ts` | `components/*`, `lib/*`, `utils/*` | — |
| Composed features | `src/lib/*` | `components/*`, `utils/*` | `src/index.ts` |
| Components | `src/components/*` | `components/*` (siblings), `utils/*` | `src/index.ts`, `lib/*` |
| Shared utilities | `src/utils/*` | `utils/*` | `components/*`, `lib/*`, `src/index.ts` |

- `src/components/` holds presentational, reusable building blocks (`tag`, `breadcrumb`,
  `author`, `chip-filter`). `src/lib/` holds the composed, portal-level features that
  orchestrate them (`markdown-renderer`, `sidebar`, `search`, `table-of-contents`,
  `on-this-page`, `contributors`, `cookie-bar`, `hamburger-menu`).
- A component MUST NOT import from `src/lib/` — that inverts the layering. A component
  needing feature-level context MUST receive it via props or `LibraryContext`.
- `src/utils/` MUST stay leaf-level: helpers, hooks, typings, config, and the React
  contexts. The one intentional exception is `src/utils/context/libraryContext.tsx`,
  which imports a type from `lib/table-of-contents`; type-only imports across this
  boundary are tolerated, value imports are not.
- Nothing may import from `src/index.ts` internally. Doing so creates a cycle through
  the barrel and breaks tree-shaking for consumers.
- Nothing in `src/` may import from `dist/`.

<!-- TODO(team): the `components/` vs `lib/` split is real but has never been written
     down, and the boundary has drifted (`search-*` components in `components/` versus
     `search` in `lib/`). Confirm the criterion above or decide to unify the two
     directories, then amend this section. -->

## Project Structure & Folder Organization

```text
src/
├── index.ts                  # THE public API — single barrel, value + type exports
├── global.d.ts               # Ambient declarations
├── components/               # Presentational building blocks (kebab-case folders)
│   └── <component-name>/
│       ├── index.tsx             # Component + exported <Component>Props
│       ├── styles.ts             # SxStyleProp constants, single default export
│       ├── <Component>.stories.tsx
│       ├── <Component>.types.ts  # Optional — only when shared or large
│       └── functions.ts          # Optional — pure helpers local to the component
├── components/icons/         # Icon components + their own `index.ts` barrel
├── lib/                      # Composed portal-level features
│   ├── index.ts                  # Internal barrel for lib
│   └── <feature-name>/           # Same folder shape; may add fixtures/
├── messages/                 # i18n catalogs — en.json, es.json, pt.json
└── utils/                    # Leaf-level shared code
    ├── config/                   # search-config.ts
    ├── context/                  # libraryContext.tsx, search.tsx
    ├── hooks/                    # useClickOutside.ts
    ├── typings/                  # types.ts, messages-types.ts
    ├── troubleshooting/          # Domain helpers + types
    └── *.ts                      # get-message, get-url, *-utils, mermaidInit
```

Rules:

- A new presentational component goes in `src/components/<kebab-case>/`; a new composed
  feature goes in `src/lib/<kebab-case>/`. Both follow the folder shape in Principle II.
- New shared code goes in the matching `src/utils/` subfolder. Do not create new
  top-level directories under `src/` without amending this constitution.
- `src/lib/sidebar/fixtures/` is excluded from `tsconfig.json`. Fixtures MUST stay inside
  their feature folder and MUST NOT be imported by production code paths.
- Repository root holds only configuration, `README.md`, `CHANGELOG.md`, the generated
  `dist/`, and the governance files (`AGENTS.md`, `CLAUDE.md`, `.agents/`, `.specify/`,
  `specs/`).

## Development Workflow & Quality Gates

Contributor workflow:

1. `yarn` to install.
2. `yarn storybook` (port 6006) to develop and visually verify against the declared
   viewports.
3. `yarn lint` — no new errors in the files you touched.
4. `yarn build` — must succeed; commit the regenerated `dist/` separately (Principle VII).
5. For anything larger than a contained fix, write a spec first — see the SDD workflow in
   `AGENTS.md` and the `specification` skill in `.agents/skills/`.
6. Open a PR using `.github/PULL_REQUEST_TEMPLATE.md` and apply exactly one release label.

All gates MUST pass before merge:

1. **Type check** — TypeScript compiles with zero errors.
2. **Lint & format** — `yarn lint` reports zero errors *in the files the change touches*
   (the repository-wide baseline is red — see Principle IV); no `any`, no unused vars, no
   debug output; no opportunistic reformatting of untouched code.
3. **Build** — `yarn build` succeeds and `dist/` is committed when consumers need the
   change.
4. **Storybook** — new or changed components have stories covering their states; the
   affected stories render correctly across the viewports in `.storybook/preview.ts`.
5. **Localization** — no new hardcoded user-facing string; new keys present in all three
   catalogs.
6. **Public API** — barrel exports and `<Component>Props` types are updated; the release
   label matches the actual severity of the API change.
7. **Review** — at least one approving review.

**Evidence before claims.** A change is not done because it looks done. The PR
description MUST record the commands that were run and their outcome, or state the exact
blocker. Because steps 1–4 are not enforced by CI today, a PR that asserts them without
evidence is treated as unverified.

**Infrastructure is separate from behavior.** Changes to documentation, tooling, CI,
editor config, and the SDD/agent artifacts (`AGENTS.md`, `CLAUDE.md`, `.agents/`,
`.specify/`, `specs/`) MUST NOT alter component behavior unless an approved spec says so.
Conversely, a behavior change MUST NOT smuggle in a toolchain migration.

**Secrets stay out of git.** Algolia keys, GitHub tokens, and any other credential belong
in the consuming portal's environment and are passed in through `SearchConfig` or props.
Documentation lists variable names and purpose only, never values.

## Governance

- This constitution supersedes ad-hoc convention. On conflict, the constitution wins: the
  practice is fixed, or the constitution is amended. It is never silently ignored.
- Amendments are proposed as a PR that edits this file, states the rationale, and updates
  the version and dates below. Amendments require maintainer approval.
- Governance versioning:
  - **MAJOR** — a principle or gate is removed or redefined in a backward-incompatible
    way.
  - **MINOR** — a new principle or section, or materially expanded guidance.
  - **PATCH** — clarification and wording that does not change an obligation.
- Compliance is verified at review time against the Quality Gates above. An approved
  exception MUST be documented in the PR with its scope and rationale; a standing
  exception belongs in this document.
- `TODO(team)` markers are open decisions, not permanent state. Each one names the gap and
  what to decide. Resolving one is an amendment.
- If a principle here conflicts with an explicit maintainer decision, follow the
  maintainer, document the drift in the PR, and amend this constitution to match.

**Version**: 1.0.0 | **Ratified**: 2026-09-02 | **Last Amended**: 2026-09-02

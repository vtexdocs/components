---
name: component-authoring
description: Create, change, or review a component in the @vtexdocs/components library. Use when the user mentions adding a component, editing a component, a new story, styles.ts, the src/index.ts barrel, brand-ui SxStyleProp, localizing a string, or asks for component best practices, conventions, or a component review in this repository.
license: MIT
metadata:
  author: VTEX Docs
  version: "1.0.0"
---

# Component Authoring — `@vtexdocs/components`

The operational companion to `.specify/memory/constitution.md`. The constitution says
what the rules are and why; this skill is the order you do things in and the exact shape
each file takes.

Read this before creating or materially changing a component. For a contained fix inside
an existing component, jump to [Step 7](#step-7--verify) and the
[PR checklist](references/checklist.md).

**Hard rule up front:** this library is installed by git reference from two production
portals. A `src/` change without a committed `yarn build` output does nothing for
consumers. See Step 8.

## Step 0 — Decide where it goes

| It is… | Goes in | Examples |
|---|---|---|
| A presentational building block: renders props, owns no portal-level orchestration | `src/components/<kebab-case>/` | `tag`, `author`, `breadcrumb`, `chip-filter`, `copy-button` |
| A composed feature: orchestrates several components, reads `LibraryContext`, owns a slice of portal behavior | `src/lib/<kebab-case>/` | `markdown-renderer`, `sidebar`, `search`, `table-of-contents` |
| An icon | `src/components/icons/<name>-icon.tsx` + its `index.ts` barrel | `check-icon`, `github-icon` |
| A pure helper, hook, typing, or context used by more than one component | `src/utils/<subfolder>/` | `get-message.ts`, `hooks/useClickOutside.ts` |

Two checks before you commit to a location:

- **Is it already there?** 48 component folders exist. Grep the barrel (`src/index.ts`)
  and `src/components/` before adding anything — a near-duplicate with a new prop is
  almost always better than a new component.
- **Does it respect the layering?** A `components/*` file MUST NOT import from `lib/*`.
  If your building block needs feature context, take it as a prop instead. (The
  `components/` vs `lib/` boundary has known drift — see the `TODO(team)` in the
  constitution's Architectural Boundaries. When genuinely ambiguous, ask the maintainer
  rather than guessing.)

## Step 1 — Scaffold the folder

```text
src/components/<kebab-case>/
├── index.tsx                    # Component + exported <Component>Props
├── styles.ts                    # SxStyleProp constants
├── <Component>.stories.tsx      # Storybook entry
├── <Component>.types.ts         # Only if types are shared or large
└── functions.ts                 # Only if there are pure local helpers
```

Naming: folder `kebab-case`, component and files that carry the component name
`PascalCase`, props type `<Component>Props`, boolean props read as predicates
(`isOpen`, `hasError`, `shouldRender`).

Full copy-paste templates: [references/templates.md](references/templates.md).

## Step 2 — Write the component

```tsx
import { Box, Flex, Text } from '@vtex/brand-ui'

import type { ContributorsType } from 'lib/contributors'
import styles from './styles'

export type AuthorProps = {
  /** The contributor rendered in the byline. */
  contributor: ContributorsType
}

const Author = ({ contributor }: AuthorProps) => {
  return (
    <Flex sx={styles.container}>
      <Box sx={styles.photo}>{/* … */}</Box>
      <Text>{contributor?.name}</Text>
    </Flex>
  )
}

export default Author
```

Rules:

- **Named, exported props type.** `export type <Component>Props = { … }` beside the
  component. Never an inline anonymous shape. JSDoc each prop — `autodocs` renders it
  into the prop table.
- **Default export** of the component, matching every existing folder.
- **Primitives from `@vtex/brand-ui`** (`Box`, `Flex`, `Text`, `Link`, …). Do not
  hand-roll what the design system provides.
- **Alias imports**, not relative traversal: `components/tag`, `lib/contributors`,
  `utils/typings/types` (`baseUrl: src`). Only `./styles`, `./functions`, and
  `./<Component>.types` stay relative.
- **No `any`.** `@typescript-eslint/no-explicit-any` is `error`. If you truly cannot
  type something, the suppression needs a justifying comment and a mention in the PR.
- **Give variants a union type**, don't multiply booleans:
  `variant?: 'devportal' | 'helpcenter'` with a default in the destructure, as
  `troubleshooting-card` does.
- **No data fetching in a presentational component.** Take data as props. Search access
  goes through the existing Algolia setup in `src/utils/config/` and
  `src/utils/context/search.tsx`.

## Step 3 — Write `styles.ts`

```ts
import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  alignItems: 'center',
  columnGap: '16px',
  pt: '14px',
}

const photo: SxStyleProp = {
  width: '32px',
  height: '32px',
  img: { borderRadius: '100%' },
}

export default {
  container,
  photo,
}
```

Rules:

- One `SxStyleProp` constant per element, collected in a single default export. Applied
  as `sx={styles.container}`.
- Inline `sx` in JSX only for a trivial, single-use declaration. Anything reused,
  responsive, or more than a few properties belongs here.
- Responsive values use the brand-ui array syntax (`px: ['16px', '24px']`), and must be
  checked against the viewports in `.storybook/preview.ts`.
- **No new CSS Modules** without justification in the PR. The library has exactly one
  (`src/lib/markdown-renderer/styles.module.css`) and it exists only because MDX output
  is unreachable via `sx`.
- **No Tailwind.** `postcss.config.js` loads the plugin but there is no config and no
  directive in `src/`. It is vestigial; do not build on it.
- Multiple visual variants: a `styles.ts` constant per variant (`helpcenterContainer`,
  `devportalContainer`), selected in the component — not conditional style objects
  assembled inline.

## Step 4 — Localize every user-facing string

```tsx
import { useContext } from 'react'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

const { locale } = useContext(LibraryContext)
const label = messages[locale]['my_component.label'] ?? messages.en['my_component.label']
```

Rules:

- Add the key to **all three** catalogs — `src/messages/en.json`, `es.json`, `pt.json` —
  in the same commit. English-only is an incomplete change.
- Keys are flat and dot-namespaced by component: `feedback_section.question`,
  `heading_link.copy`.
- Always provide a fallback (`?? messages.en[key]`, or a literal as `copy-heading-link`
  does) so a missing key degrades instead of rendering `undefined`.
- `alt`, `aria-label`, and `title` are user-facing text and follow the same rule.
- Never accept a locale prop or detect locale yourself — it comes from `LibraryContext`,
  supplied by the consuming portal.

## Step 5 — Write the story

Storybook is this library's documentation and, with no test runner in the repository,
its only executable check. It is not optional for a new or materially changed component.

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'
import Author from './index'

const meta = {
  title: 'Example/Author',
  component: Author,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { contributor: sampleContributor },
  decorators: [(Story) => (<ThemeProvider><Story /></ThemeProvider>)],
} satisfies Meta<typeof Author>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const LongName: Story = { args: { /* … */ } }
```

Rules:

- `title: 'Example/<ComponentName>'`, `tags: ['autodocs']` (required — `docs.autodocs`
  is `'tag'`, so no tag means no generated docs), and the `ThemeProvider` decorator
  (consumers wrap the library in it; without it Storybook lies to you).
- `satisfies Meta<typeof Component>` + `StoryObj<typeof meta>` so args are type-checked.
- A `Default` story, plus one per meaningful variant, boundary, and empty or error state.
  `Author.stories.tsx` covers the long-name overflow; `troubleshooting-card` needs one
  story per `variant`.
- **Deterministic, self-contained fixtures.** Inline the data (`Author.stories.tsx` uses
  data-URI SVG avatars) or check a fixture into the component folder. No live network.
- Run `yarn storybook` and look at the component across the declared viewports —
  360px, 640px, 832px, 1024px, 1280px, 1920px, 2560px — before requesting review.

## Step 6 — Export from the barrel

`src/index.ts` is the entire public API. A component absent from it is private.

Add both the value and its types, keeping them adjacent to related exports:

```ts
export {
  // …
  Author,
  type AuthorProps,
}
```

This is a **release-visible** step. Match the label to the actual severity:

| Change | Label |
|---|---|
| New export, new optional prop | `release-minor` |
| Removed export, renamed prop, changed prop type, changed default | `release-major` |
| Internal fix, no API surface change | `release-patch` |
| Docs, tooling, governance only | `release-no` |

## Step 7 — Verify

```bash
yarn lint
```

```bash
yarn build
```

```bash
yarn storybook
```

`yarn build` must succeed. `yarn lint` must report **zero errors in the files you
touched** — the repository-wide baseline is already red (930 pre-existing errors on
`main`: 929 `prettier/prettier`, 1 unused var), so grep the output for your own paths:

```bash
yarn lint 2>&1 | grep -A3 'src/components/my-component'
```

**Never** run `eslint --fix` across `src/` to make the output quiet. It would rewrite most
of the library in one unreviewable diff and force a full `dist/` rebuild on top. Clearing
the baseline is a maintainer decision with its own PR.

**Neither command runs in CI** — the only pull-request workflow validates release labels —
so running them locally *is* the gate, and the PR description must record that you did.

## Step 8 — Commit, build output, and PR

1. Commit the `src/` change with a Conventional Commit message (`feat:`, `fix:`,
   `chore:`, `styles:`) — `standard-version` derives the version from it.
2. Run `yarn build` and commit the regenerated `dist/` **as a separate commit**, so
   reviewers can read the real diff without wading through bundled output. Skipping this
   is the most common failure in this repository: consumers install by git reference, so
   a source-only PR ships nothing.
3. Never hand-edit `dist/`, `CHANGELOG.md`, or the version in `package.json` — all
   generated.
4. Open the PR with `.github/PULL_REQUEST_TEMPLATE.md`, apply exactly one release label,
   and record the command output from Step 7.

Full pre-review checklist: [references/checklist.md](references/checklist.md).

## Anti-patterns

Each of these exists somewhere in the repository today. Do not extend them.

| Anti-pattern | Do instead |
|---|---|
| Mixing alias and relative imports for the same target (`troubleshooting-card` uses both `components/tag` and `../../utils/troubleshooting/types`) | Alias everything outside the component folder |
| `eslint-disable @typescript-eslint/no-explicit-any` (legacy in `utils/context/libraryContext.tsx`) | Type it; if impossible, justify in a comment and in the PR |
| Long inline `sx={{ … }}` blocks in JSX (`troubleshooting-card`) | Move to `styles.ts` |
| Shipping a component with no story (17 of 48 folders) | Write the story in the same PR |
| Running `eslint --fix` over `src/` to silence the red lint baseline | Fix only the files you touched |
| Reformatting untouched code that happened to be nearby | Leave it; the baseline is a separate maintainer PR |
| Hardcoded English string with no catalog key | Add the key to all three catalogs |
| Adding a top-level folder under `src/` | Use `components/`, `lib/`, `utils/`, or amend the constitution |
| `src/` change merged without rebuilding `dist/` | Separate `dist/` commit in the same PR |
| Reaching for Tailwind because `postcss.config.js` mentions it | brand-ui `sx` |

## Reviewing someone else's component

Walk the same steps as a rubric, in this order — it front-loads the expensive problems:

1. **Layering** (Step 0) — is it in the right directory, and does it import downward only?
2. **Public API** (Step 6) — barrel updated, props type exported, release label matching
   the real severity?
3. **Localization** (Step 4) — any hardcoded user-facing string? All three catalogs?
4. **Stories** (Step 5) — do they cover the variants and boundaries actually implemented?
5. **Styles** (Step 3) — in `styles.ts`, brand-ui primitives, no stray CSS Module?
6. **Build output** (Step 8) — is there a `dist/` commit if consumers need the change?
7. **Evidence** — does the PR record `yarn lint` and `yarn build` output, and is the lint
   diff confined to files the change actually touched?

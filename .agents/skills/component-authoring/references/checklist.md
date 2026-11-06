# Pre-review checklist

Run this before requesting review on any component change in `@vtexdocs/components`.
Every box maps to a Quality Gate in `.specify/memory/constitution.md`.

## Placement & layering

- [ ] The component lives in the right directory: `src/components/` for a presentational
      building block, `src/lib/` for a composed portal-level feature.
- [ ] I checked `src/index.ts` and `src/components/` first — this is not a near-duplicate
      of something that already exists.
- [ ] Nothing in `src/components/` imports from `src/lib/`.
- [ ] Nothing in `src/utils/` imports from `src/components/` or `src/lib/` (a type-only
      import is tolerated; a value import is not).
- [ ] Nothing imports from `src/index.ts` internally, and nothing imports from `dist/`.
- [ ] No new top-level directory under `src/`.

## Structure & naming

- [ ] Folder is `kebab-case`; component, story, and `.types.ts` files are `PascalCase`.
- [ ] `index.tsx` default-exports the component.
- [ ] Props are a named, exported `type <Component>Props`, declared beside the component.
- [ ] Every prop has a JSDoc comment.
- [ ] Boolean props read as predicates (`isOpen`, `hasError`, `shouldRender`).
- [ ] Variants use a union type with a default, not stacked booleans.
- [ ] Imports outside the component folder use `baseUrl: src` aliases, not `../../`.

## Styling

- [ ] Layout and visual primitives come from `@vtex/brand-ui`.
- [ ] Styles are typed `SxStyleProp` constants in `styles.ts` under one default export.
- [ ] No long inline `sx={{ … }}` block in JSX.
- [ ] No new CSS Module (or: it is justified in the PR description).
- [ ] No Tailwind class or directive.
- [ ] Responsive values were checked at the `.storybook/preview.ts` viewports —
      360, 640, 832, 1024, 1280, 1920, 2560px.

## Localization

- [ ] No hardcoded user-facing string, including `alt`, `aria-label`, and `title`.
- [ ] Every new key exists in **all three** catalogs: `en.json`, `es.json`, `pt.json`.
- [ ] Keys are flat and dot-namespaced by component.
- [ ] Every lookup has a fallback (`?? messages.en[key]` or a literal).
- [ ] Locale is read from `LibraryContext` — not detected, not taken as a prop.

## Storybook

- [ ] A `<Component>.stories.tsx` exists for a new or materially changed component.
- [ ] `title: 'Example/<ComponentName>'`, `tags: ['autodocs']`, `ThemeProvider` decorator.
- [ ] `satisfies Meta<typeof Component>` and `StoryObj<typeof meta>`.
- [ ] Stories cover: default, each variant, the empty/absent-data case, and a boundary
      case (long text, overflow).
- [ ] Fixtures are inline or checked in — no live network call.
- [ ] I actually opened `yarn storybook` and looked at it.

## Type safety & lint

- [ ] `yarn lint` reports zero errors **in the files I touched** (the repository-wide
      baseline is 930 pre-existing errors — do not try to make the whole tree clean).
- [ ] I did **not** run `eslint --fix` across `src/`, and did not reformat untouched code.
- [ ] No `any`; no new `eslint-disable` (or: it carries a justifying comment and is
      called out in the PR).
- [ ] No `console.log` or other debug output.
- [ ] Used `yarn`, not `npm`; `package-lock.json` is untouched.

## Public API & release

- [ ] The component and its types are exported from `src/index.ts` (if public).
- [ ] `package.json` `exports` entries are unchanged, or the change is flagged as MAJOR.
- [ ] `peerDependencies` are unchanged, or the change is called out in the PR.
- [ ] Exactly one release label, matching the real severity:
      `release-major` for a removed export / renamed prop / changed prop type / changed
      default; `release-minor` for a new export or new optional prop; `release-patch` for
      an internal fix; `release-no` for docs, tooling, or governance only.
- [ ] Commit messages follow Conventional Commits.
- [ ] `CHANGELOG.md`, the `package.json` version, and tags are untouched (all generated).

## Build output

- [ ] `yarn build` succeeds.
- [ ] If consumers need this change, the regenerated `dist/` is committed — as a
      **separate commit** from the `src/` change.
- [ ] `dist/` was not hand-edited.

## Evidence

- [ ] The PR description records the `yarn lint` and `yarn build` output, or names the
      exact blocker. Neither runs in CI, so an unevidenced claim is unverified.
- [ ] The PR uses `.github/PULL_REQUEST_TEMPLATE.md` and its type-of-change boxes are
      accurate.
- [ ] This PR changes either behavior or infrastructure — not both.

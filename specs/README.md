# Specs

Spec-Driven Development artifacts for `@vtexdocs/components`. One file per feature,
`kebab-case`, at `specs/<feature-name>.md`.

## Why a spec

This library is installed straight from git by two production portals, has no test suite,
and has no CI quality gate. Design decisions therefore have to be legible *before* code
exists, not reconstructed from a diff afterwards.

Write a spec for anything larger than a contained fix: a new component, a change to an
exported prop or type, a change to the `components/` ↔ `lib/` boundary, a new dependency,
or anything that touches the `package.json` `exports` map.

A contained bug fix inside one existing component does not need a spec. Go straight to
the `component-authoring` skill.

## Workflow

```
specification skill  →  specs/<feature>.md (Draft)
                            ↓  maintainer review
                        Approved
                            ↓  implementing skill
                        Done  +  feat/<feature> pull request
```

1. **Write** — invoke the `specification` skill (`.agents/skills/specification/`). It
   produces the three required sections: Business Context, Arch Decisions, Technical
   Contract. It opens a pull request containing **only** the spec file, on branch
   `spec/<feature-name>`.
2. **Review** — a maintainer reviews the spec, not the code. Once accepted, the header
   `Status` moves from `Draft` to `Approved`.
3. **Implement** — invoke the `implementing` skill. It refuses to run on a spec that is
   not `Approved`, implements story by story, and opens a `feat/<feature-name>` pull
   request. On success it sets `Status` to `Done`.

The spec is the single handoff contract. There is no intermediate plan document.

## Status lifecycle

| Status | Meaning |
|---|---|
| `Draft` | Written, awaiting maintainer review |
| `Approved` | Accepted for implementation |
| `Done` | Fully implemented and merged |

## Repository-specific requirements

Beyond the template, a spec here MUST state:

- **Public API impact** — which `src/index.ts` exports are added, changed, or removed, and
  the resulting release label (`release-patch` | `release-minor` | `release-major`).
- **Consumer impact** — whether [devportal](https://github.com/vtexdocs/devportal) or
  [helpcenter](https://github.com/vtexdocs/helpcenter) need a coordinated change.
- **Placement** — `src/components/` or `src/lib/`, with the reasoning from Step 0 of the
  `component-authoring` skill.
- **Localization** — which message keys are added to `src/messages/{en,es,pt}.json`.
- **Verification** — which stories will prove each acceptance criterion, since there is
  no test runner.

See `.specify/memory/constitution.md` for the governing principles the Arch Decisions
section must respect.

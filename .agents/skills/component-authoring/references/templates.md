# Canonical file templates

Copy-paste starting points for a component in `@vtexdocs/components`. Replace
`MyComponent` / `my-component` / `my_component` throughout. These match the shape used by
the existing 48 component folders — see `src/components/author/` for the smallest
complete example and `src/components/troubleshooting-card/` for a variant-driven one.

---

## `src/components/my-component/index.tsx`

```tsx
import { Box, Flex, Text } from '@vtex/brand-ui'

import styles from './styles'

export type MyComponentVariant = 'devportal' | 'helpcenter'

export type MyComponentProps = {
  /** Heading rendered at the top of the card. */
  title: string
  /** Optional supporting copy. Hidden when absent. */
  description?: string
  /** Which portal this renders in. Defaults to `devportal`. */
  variant?: MyComponentVariant
}

const MyComponent = ({
  title,
  description,
  variant = 'devportal',
}: MyComponentProps) => {
  const container =
    variant === 'helpcenter' ? styles.helpcenterContainer : styles.container

  return (
    <Flex sx={container}>
      <Text sx={styles.title}>{title}</Text>
      {description ? <Box sx={styles.description}>{description}</Box> : null}
    </Flex>
  )
}

export default MyComponent
```

Notes:

- Default export; named exported props type; JSDoc on every prop.
- Variants are a union type with a default in the destructure — not a pile of booleans.
- Conditional rendering with `? … : null`, not `&&`, so a falsy value never leaks into
  the output.

---

## `src/components/my-component/styles.ts`

```ts
import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: '8px',
  px: ['16px', '24px'],
}

const helpcenterContainer: SxStyleProp = {
  ...container,
  border: '1px solid',
  borderColor: 'muted.3',
}

const title: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '600',
}

const description: SxStyleProp = {
  color: 'muted.0',
}

export default {
  container,
  helpcenterContainer,
  title,
  description,
}
```

Notes:

- One constant per element, single default export, every constant typed `SxStyleProp`.
- Responsive values use the array syntax (`px: ['16px', '24px']`).
- Variant styles spread the base rather than duplicating it.
- Prefer theme scale values (`muted.0`, `muted.3`) over raw hex where brand-ui provides
  them.

---

## `src/components/my-component/MyComponent.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@vtex/brand-ui'

import MyComponent from './index'

const meta = {
  title: 'Example/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Configure your first store',
    description: 'A short supporting line that explains the card.',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const HelpCenter: Story = {
  args: { variant: 'helpcenter' },
}

export const WithoutDescription: Story = {
  args: { description: undefined },
}

export const LongTitle: Story = {
  args: {
    title:
      'A deliberately long title used to verify wrapping and overflow at narrow viewports',
  },
}
```

Notes:

- `tags: ['autodocs']` is required — `docs.autodocs` is `'tag'` in `.storybook/main.ts`.
- The `ThemeProvider` decorator is required; consumers wrap the library in it.
- `satisfies Meta<typeof …>` + `StoryObj<typeof meta>` type-check the args.
- Cover: default, each variant, the empty/absent-data case, and a boundary case.

---

## `src/components/my-component/MyComponent.types.ts` (optional)

Only when the types are shared beyond this component or large enough to obscure the
component file. Otherwise keep them in `index.tsx`.

```ts
export type MyComponentItem = {
  id: string
  label: string
  href?: string
}

export type MyComponentGroup = {
  title: string
  items: MyComponentItem[]
}
```

---

## `src/components/my-component/functions.ts` (optional)

Pure helpers used only by this component. No React, no side effects, individually
testable.

```ts
import type { MyComponentItem } from './MyComponent.types'

export function buildHref(item: MyComponentItem, basePath = '/docs') {
  if (item.href) return item.href

  const normalized = basePath.replace(/\/$/, '')
  return `${normalized}/${item.id}`
}
```

If a helper becomes useful to a second component, move it to `src/utils/` rather than
importing across component folders.

---

## `src/components/icons/my-icon.tsx`

```tsx
import type { SVGProps } from 'react'

const MyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="…" fill="currentColor" />
  </svg>
)

export default MyIcon
```

Then add it to `src/components/icons/index.ts`. Use `currentColor` so the icon inherits
from its `sx` context instead of hardcoding a fill.

---

## `src/index.ts` — barrel entry

Add the value and its types together, next to related exports:

```ts
export {
  // …
  MyComponent,
  // …
  type MyComponentProps,
  type MyComponentVariant,
}
```

A component missing from this file is private to the library, regardless of what it
exports. This edit is what makes the change release-visible — pick the label accordingly.

---

## `src/messages/{en,es,pt}.json` — message keys

All three files, same commit, flat and dot-namespaced by component:

```json
{
  "my_component.title": "Configure your first store",
  "my_component.empty": "Nothing here yet"
}
```

Consumed as:

```tsx
import { useContext } from 'react'
import { LibraryContext } from 'utils/context/libraryContext'
import { messages } from 'utils/get-message'

const { locale } = useContext(LibraryContext)
const emptyLabel =
  messages[locale]['my_component.empty'] ?? messages.en['my_component.empty']
```

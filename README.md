# VTEX Documentation - Component Library

## Summary 

- [About](#about)
- [Included Components](#included-components)
- [Development](#development)
  - [Installation](#installation)
  - [Run Storybook](#run-storybook)
  - [Styling](#styling)
  - [Context](#context)
  - [Search](#search)

## About

This collection of components has been specifically crafted for integration with the [Developers Portal](https://github.com/vtexdocs/devportal) and the [Help Center](https://github.com/vtexdocs/helpcenter).

## Included Components

- Was this helpful?
- Hamburger Menu
- Markdown Renderer
- Search Input
- Detailed Search
- Table Of Contents

## Development

### Installation

To get started, install the required dependencies using Yarn:

```bash
yarn
```

Build the library with the following command:

```bash
yarn run build
```

The generated files can be found in the ./dist folder.

### Run Storybook

Explore and interact with the components using Storybook:

```bash
yarn storybook
```

⚠️ Please note that the `yarn build-storybook` command is currently not working as expected.

### Styling

The library utilizes components from the [@vtex/brand-ui library](https://www.npmjs.com/package/@vtex/brand-ui). When using the Component Library, wrap all components in the @vtex/brand-ui `ThemeProvider` to ensure consistent styling. The Storybook documentation uses the ThemeProvider to show the expected styling.

### Context

To use the library, wrap it in the `LibraryContextProvider`. This provider requires the following props: `sections`, `isPreview`, `fallback`, `sectionSelected`, and `locale`.

Example usage:

```tsx
<ThemeProvider>
    <LibraryContextProvider
        sections={sections}
        isPreview={isPreview}
        fallback={sidebarfallback}
        sectionSelected={sectionSelected}
    >
        <Header />
        <Content /> {/* Where all the components are used */}
        <Footer />
    </LibraryContextProvider>
</ThemeProvider>
```

### Search

For search functionality, pass the `appId`, `apiKey`, and `index` for the search client. Create a configuration file and use the `SearchConfig` function:

```typescript
import { SearchConfig } from '@vtexdocs/components'

const libraryConfig = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  apiKey: process.env.NEXT_PUBLIC_ALGOLIA_WRITE_KEY || '',
  index: process.env.NEXT_PUBLIC_INDEX || '',
}

export default SearchConfig(libraryConfig)
```

Feel free to explore and integrate these components into your project. If you encounter any issues, please refer to the documentation or reach out to our community for assistance.

# Component Library (@allsetlabs/reusable)

Shared, reusable component library used across all frontend modules. Built with React, TypeScript, Tailwind CSS, and shadcn/ui patterns. This is a library package — not a standalone application. No build step required; consumers import directly from source.

## Code Structure

```
src/
├── components/
│   ├── ui/                  # shadcn/ui components (Button, Dialog, Card, etc.)
│   ├── ai-elements/         # AI SDK element components (@ai-elements registry)
│   └── auth-login/          # Authentication/login components
├── statefulComponents/      # Components with internal state (auth, theme, audio, cursor)
├── hooks/                   # Custom React hooks
├── icons/                   # Custom icon components
├── lib/                     # Utility functions (cn(), resume generator, etc.)
├── styles/                  # Global styles, CSS variables, theme system
├── types/                   # TypeScript type definitions
└── InitializeReusableChunks.tsx  # Required root wrapper — sets up providers and styles
```

## How Other Modules Use This Library

### Installation

```bash
npm install github:subbiah2806/component
```

### Setup in a consuming module

1. **TypeScript paths** — add to `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@allsetlabs/reusable/*": ["./node_modules/@allsetlabs/reusable/src/*"]
       }
     }
   }
   ```

2. **Tailwind config** — extend the library's base config:
   ```js
   import baseConfig from '@allsetlabs/reusable/tailwind.config';
   export default { ...baseConfig };
   ```

3. **Root wrapper** — wrap the app with `InitializeReusableChunks` (auto-imports styles and initializes all providers):
   ```tsx
   import { InitializeReusableChunks } from '@allsetlabs/reusable/InitializeReusableChunks';

   function App() {
     return (
       <InitializeReusableChunks>
         <YourApp />
       </InitializeReusableChunks>
     );
   }
   ```

### Importing components

```tsx
import { Button } from '@allsetlabs/reusable/components/ui/button';
import type { ButtonProps } from '@allsetlabs/reusable/components/ui/button';
```

## Working on Components

### Where things live

Each component has its own `.tsx` file and a co-located `.md` doc file. When modifying or creating a component, update both. Every UI component doc is linked from `how_to_use_this_library.md` — keep that index current.

### Component categories

- **UI components** (`components/ui/`) — shadcn/ui primitives built on Radix UI. These are the building blocks all modules use for buttons, inputs, dialogs, cards, etc.
- **AI element components** (`components/ai-elements/`) — components from the [@ai-elements registry](https://elements.ai-sdk.dev) for AI-powered interfaces (chat, code blocks, reasoning, terminals, etc.)
- **Stateful components** (`statefulComponents/`) — components with built-in state management: auth, theme, audio, cursor, extension auth. These are auto-initialized by `InitializeReusableChunks`.
- **Utility components** (`components/`) — DataFetchWrapper, BackgroundGradient, ErrorBoundary.

### Adding new components

1. Create the `.tsx` file in the appropriate directory
2. Create a co-located `.md` doc with usage examples
3. Add the component to the `how_to_use_this_library.md` index
4. Follow shadcn/ui patterns: use CVA for variants, Radix UI for headless behavior, `cn()` for class merging

### Adding components from external registries

shadcn/ui CLI can install from multiple registries configured in `components.json`:

```bash
# Default shadcn registry
npx shadcn@latest add button

# Namespaced registries
npx shadcn@latest add @ai-elements/message
npx shadcn@latest add @magicui/animated-beam

# ReactBits
npx shadcn@latest add https://reactbits.dev/r/[component-name]

# 8StarLabs
npx shadcn@latest add https://ui.8starlabs.com/r/{name}.json
```

After installing external components: convert to TypeScript if needed, adapt imports to library path structure, ensure Tailwind compatibility, and add documentation.

### Styles and theming

All colors and theme variables are defined in `src/styles/`. See [styles.md](./src/styles/styles.md) for the full CSS variable reference.

### Updating documentation

Run `/update-docs sync-changes` after making changes (if the command is available), or manually update the component's `.md` file and the `how_to_use_this_library.md` index.

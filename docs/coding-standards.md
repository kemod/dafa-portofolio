# Coding Standards

## General

- Use TypeScript for all source files.
- Prefer functional React components.
- Avoid unnecessary abstractions.
- Keep components focused on a single responsibility.

---

## Folder Structure

Follow the established project architecture.

Do not create folders or files without a clear purpose.

---

## Components

- Reusable components belong in `components/common`.
- Generated Base UI components belong in `components/ui`.
- Feature-specific components stay inside their feature directory.

---

## Imports

Always use absolute imports.

```ts
import { Button } from "@/components/ui/button";
```

---

## Naming

Components

```text
PascalCase
```

Functions

```text
camelCase
```

Directories

```text
kebab-case
```

---

## Git

- Follow Conventional Commits.
- Keep commits focused on a single purpose.
- Ensure the project builds before committing.
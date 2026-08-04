# Architecture

## Overview

This portfolio is built using a feature-based architecture designed to support long-term scalability and maintainability.

The project separates application concerns into dedicated layers, allowing features, reusable components, and content to evolve independently.

---

## Project Structure

```text
src/
├── app/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── features/
├── content/
├── config/
├── constants/
├── hooks/
├── lib/
├── types/
```

---

## Layer Responsibilities

### app/

Contains routing, layouts, metadata, and global providers.

### components/

Contains reusable UI components shared across multiple features.

### features/

Contains feature-specific UI and business logic.

### content/

Stores structured portfolio content as the application's data source.

### config/

Application configuration.

### constants/

Shared constant values.

### hooks/

Reusable React hooks.

### lib/

Utilities and helper functions.

### types/

Shared TypeScript definitions.

---

## Architecture Principles

- Feature-first organization
- Separation of concerns
- Reusable components
- Configuration-driven content
- Type-safe development
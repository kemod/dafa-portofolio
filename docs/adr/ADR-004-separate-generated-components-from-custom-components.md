# ADR-004: Separate Generated Components from Custom Components

## Sprint

Sprint 2 — Design System Foundation

## Status

Accepted

## Date

2026-08-04

## Context

The project uses generated UI components provided by Base UI while also requiring reusable components tailored specifically for the portfolio.

Mixing generated components with application-specific components would increase maintenance complexity and make future updates more difficult.

## Decision

Generated components and application components are separated into dedicated directories.

```text
src/components/
├── ui/
├── common/
└── layout/
```

Responsibilities:

- `components/ui` contains generated Base UI components.
- `components/common` contains reusable application components.
- `components/layout` contains reusable layout components.

Feature-specific components remain colocated inside their respective feature directories.

## Consequences

### Positive

- Clear component ownership.
- Better maintainability.
- Easier Base UI upgrades.
- Reduced coupling.
- Cleaner project structure.

### Negative

- Slightly deeper folder hierarchy.
- Developers must understand the responsibility of each component layer.

## References

- ADR-002
- docs/architecture.md
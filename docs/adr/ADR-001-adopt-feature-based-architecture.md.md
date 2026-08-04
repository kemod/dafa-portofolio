# ADR-001: Adopt Feature-Based Architecture

## Status

Accepted

## Date

2026-08-04

## Context

The portfolio is expected to grow over time with additional sections, reusable components, and multiple project detail pages. A flat folder structure would become increasingly difficult to maintain as the codebase expands.

The project also aims to separate application logic, UI components, and content to improve maintainability and scalability.

## Decision

The project will adopt a feature-based architecture combined with a configuration-driven content layer.

- Feature-specific code will be colocated under the `features/` directory.
- Shared UI components will live in `components/common/`.
- Generated UI components from Base UI will remain in `components/ui/`.
- Portfolio content will be managed through the `content/` directory as the single source of truth.

## Consequences

### Positive

- Better scalability as new sections and features are introduced.
- Clear separation of concerns.
- Easier maintenance and refactoring.
- Improved code discoverability.
- Reduced coupling between features.

### Negative

- Slightly more folders compared to a simple page-based structure.
- Requires consistent architectural discipline as the project evolves.
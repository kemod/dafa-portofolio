# Design System

## Overview

This document defines the visual language and reusable UI principles used throughout the portfolio.

The goal is to maintain consistency, accessibility, and scalability across every feature and page.

---

# Design Principles

- Consistency over creativity
- Accessibility by default
- Simplicity over complexity
- Reusability first
- Mobile-first approach

---

# Typography

## Primary Font

Geist Sans

## Font Scale

| Usage | Class |
|--------|-------|
| Hero Title | text-5xl md:text-7xl |
| Section Title | text-3xl md:text-4xl |
| Subtitle | text-lg |
| Body | text-base |
| Caption | text-sm |

---

# Color Palette

The project follows the semantic color system provided by Base UI.

| Purpose | Token |
|----------|-------|
| Background | background |
| Foreground | foreground |
| Primary | primary |
| Muted | muted |
| Border | border |

---

# Layout

## Container

max-w-7xl

## Horizontal Padding

px-6

Desktop

lg:px-8

---

# Spacing

Desktop Sections

py-24

Mobile Sections

py-16

Default Grid Gap

gap-6

---

# Border Radius

Cards

rounded-2xl

Badges

rounded-full

Buttons

Use Base UI defaults.

---

# Motion

Animation Duration

200–300ms

Animation Style

Ease Out

Animations should support usability instead of drawing unnecessary attention.

---

# Components

| Component | Responsibility |
|-----------|----------------|
| Container | Controls content width and horizontal padding. |
| Section | Controls vertical spacing and semantic structure. |
| SectionHeader | Displays section title and description. |
| TechnologyPill | Displays technology metadata. |

# Components

## Container

### Responsibility

Controls content width and horizontal padding.

### Usage

```tsx
<Container>
  ...
</Container>
```

### Rules

- Controls maximum content width.
- Applies horizontal padding.
- Does not control vertical spacing.
- Accepts additional HTML attributes.

---

## Section

### Responsibility

Defines a semantic page section and controls vertical spacing.

### Usage

```tsx
<Section id="about">
  <Container>
    ...
  </Container>
</Section>
```

### Rules

- Uses semantic `<section>` element.
- Controls vertical spacing.
- Does not control content width.
- Supports additional HTML attributes.

---

## SectionHeader

### Responsibility

Displays section titles and descriptions while maintaining consistent typography.

### Usage

```tsx
<SectionHeader
  title="Projects"
  description="A collection of selected projects."
/>
```

### Rules

- Supports `left` and `center` alignment.
- Description is optional.
- Does not control layout spacing.
- Parent components control spacing.

## Common Components

- Container
- Section
- SectionHeader
- TechnologyPill

---

## Generated Components

Located in:

src/components/ui

---

## Custom Components

Located in:

src/components/common

---

# Accessibility

- Semantic HTML
- Keyboard Navigation
- Visible Focus States
- Sufficient Color Contrast

---

# Responsive Design

The project follows a mobile-first development approach.

Every reusable component must support:

- Mobile
- Tablet
- Desktop

---

# Naming Convention

Components

PascalCase

Hooks

camelCase

Directories

kebab-case
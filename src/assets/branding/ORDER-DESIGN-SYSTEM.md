# ORDER DESIGN SYSTEM

**Project:** Heroes or Henchmens

**Codename:** Codex Vaticinarum

**Version:** 1.0.0

**Status:** FOUNDATION FROZEN

---

# 1. Purpose

The Order Design System defines every visual, structural and architectural rule used throughout the Heroes or Henchmens project.

Its purpose is to guarantee:

* visual consistency;
* reusable assets;
* predictable component composition;
* scalability;
* long-term maintainability.

Every new asset, component or visual element must follow this document.

---

# 2. Design Philosophy

The visual language of The Order is based on five principles.

## Precision

Everything has a purpose.

Nothing is decorative.

---

## Geometry

Simple geometric construction.

Straight lines.

Perfect symmetry.

Clean proportions.

---

## Hierarchy

Every symbol has a different importance.

Not every screen deserves the Primordial Prism.

---

## Modularity

Every asset is independent.

Assets are combined.

They are never duplicated.

---

## Reusability

Every SVG must be reusable.

Every component must be reusable.

Every visual pattern must be reusable.

---

# 3. Folder Structure

branding/

backgrounds/

brand-guide/

glyphs/

artifacts/

icons/

logos/

order/

patterns/

---

# 4. Glyph Library

The Glyph Library represents the alphabet of the visual language.

Current version:

* prism.svg
* ring.svg
* node.svg
* beam.svg
* edge.svg
* hexagon.svg
* pentagon.svg
* spark.svg

Status:

FROZEN

Glyphs must not receive visual changes unless a real defect is found.

---

# 5. Artifact Library

Artifact assets are built using Glyph Library concepts.

Structure:

artifact-frame.svg

artifact-core.svg

artifact-slot.svg

artifact-lock.svg

artifact-shield.svg

artifact-sigil.svg

artifact-aura.svg

Each file has a single responsibility.

---

# 6. Layer Hierarchy

Background

↓

Artifact Frame

↓

Artifact Core

↓

Glyph

↓

Aura

↓

Content

No layer may visually compete with a higher priority layer.

---

# 7. SVG Rules

Every SVG must:

be standalone

contain its own style

use currentColor

avoid gradients

avoid filters

avoid animations

avoid embedded colors

use fill="none" by default

---

# 8. Code Style

XML declaration required.

Title required.

Description required.

Defs block required.

Style block required.

Consistent indentation.

One property per line.

Semantic class names.

---

# 9. Composition Rules

Complex symbols are built from existing assets.

Never redraw an existing concept.

Compose.

Do not duplicate.

---

# 10. Angular Philosophy

SVGs are assets.

Angular components are compositions.

Business logic never belongs inside SVG assets.

---

# 11. Frozen Architecture

The following libraries are frozen:

Brand Guide

Design Tokens

Glyph Library

Artifact Architecture

Changes require architectural justification.

---

# 12. Future Roadmap

Artifact Library

Composition Library

Angular Components

Codex Vaticinarum

Hero System

Achievement System

Inventory System

Guardian Interface

---

# 13. Golden Rule

When a new visual requirement appears:

DO NOT create a new symbol immediately.

First verify whether the existing library can solve the problem through composition.

Only create a new asset when composition is insufficient.

---

END OF DOCUMENT
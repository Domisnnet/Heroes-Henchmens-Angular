# 📚 Documentation

**Project:** Heroes or Henchmens  
**Codename:** Codex Vaticinarum  
**Version:** 1.0.0  
**Status:** FOUNDATION FROZEN

---

## Purpose

This directory contains the canonical documentation that defines the foundation, visual identity, architecture and structural rules of the **Heroes or Henchmens** project and its **Codex Vaticinarum** subsystem.

The documentation is the authoritative reference for implementation.

Implementation may evolve.

The Foundation does not.

---

## Canonical Documents

| Document | Purpose |
|---|---|
| `ARCHITECTURE.md` | Defines software architecture, project layers, dependencies, services and rendering pipeline. |
| `BRAND-GUIDE.md` | Defines the visual identity, personality, voice and branding principles of The Order. |
| `CHANGELOG.md` | Records foundation milestones, frozen elements and planned future versions. |
| `CODEX-DOCUMENT-SPECIFICATION.md` | Defines the editorial anatomy, hierarchy and institutional rules of Codex records. |
| `CODEX-LAYOUT-GRID-SPECIFICATION.md` | Defines the canonical geometry and spatial grid of Codex documents. |
| `ORDER-DESIGN-SYSTEM.md` | Defines the reusable visual language, asset rules and composition principles of The Order. |
| `FRAME-LIBRARY.md` | Defines the modular SVG Frame Library and the responsibility of each visual layer. |

---

## Documentation Hierarchy

```text
PROJECT
    │
    ▼
DOCUMENTATION
    │
    ├── Brand
    ├── Architecture
    ├── Design System
    ├── Codex Structure
    ├── Codex Geometry
    └── Frame Library
```

Each document has a defined responsibility.

No document should duplicate the complete responsibility of another.

---

## Source of Truth

When implementation conflicts with canonical documentation, the documentation takes precedence.

When two documents appear to conflict, the conflict must be resolved before implementation continues.

No implementation should silently redefine a frozen rule.

---

## Frozen Foundation

The following areas are considered frozen in Version 1.0.0:

- Project architecture
- Folder structure
- Renderer pipeline
- SVG responsibilities
- Composition rules
- Document anatomy
- Document geometry
- Visual hierarchy
- Design system foundations
- Brand identity

Changes require explicit architectural or canonical review.

---

## Extension Principle

New functionality should extend the existing foundation without breaking its established identity.

Prefer:

```text
Composition
    over
Duplication
```

Prefer:

```text
Extension
    over
Reconstruction
```

Prefer:

```text
Reuse
    over
Redrawing
```

---

## Golden Rule

Before introducing a new feature, asset, visual element or document structure, ask:

> **"Does this strengthen the identity of The Order and the Prisma da Escolha?"**

If the answer is no, the proposal does not belong in the Foundation.

If the answer is yes, it must still respect the frozen architecture and Canon.

---

## Status

🔒 **FOUNDATION FROZEN**

The Foundation is closed.

Future work should focus on implementation, extension and the development of the universe without unnecessarily reopening the foundation.

---

**End of Documentation Index.**

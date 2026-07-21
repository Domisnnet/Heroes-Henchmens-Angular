# ARCHITECTURE

**Project:** Heroes or Henchmens

**Subsystem:** Codex Vaticinarum

**Version:** 1.0.0

**Status:** FOUNDATION FROZEN

---

# 1. Purpose

This document defines the software architecture of Codex Vaticinarum.

It establishes the responsibilities of every directory, component, service and asset.

Business rules.

Visual rules.

Composition rules.

Rendering rules.

Everything described here is considered architectural.

---

# 2. Architectural Philosophy

The architecture follows five principles.

Single Responsibility

Composition over Duplication

Data Driven

Stateless Rendering

Frozen Assets

---

# 3. Project Layers

Application

↓

Features

↓

Shared

↓

Assets

↓

Documentation

---

# 4. Folder Structure

src/

app/

core/

features/

shared/

assets/

docs/

---

# 5. Core Layer

The Core layer owns global application concerns.

Examples

Application Configuration

Routing

Environment

Global Providers

Theme

Authentication

No Codex implementation belongs here.

---

# 6. Features Layer

Features represent business modules.

Examples

Heroes

Villains

Inventory

Achievements

Codex

Guardian

Every Feature is independent.

Features communicate through Shared.

Never directly.

---

# 7. Shared Layer

Shared contains reusable building blocks.

Shared owns

Components

Services

Models

Types

Utilities

Pipes

Directives

Design Tokens

Data

Every Feature depends on Shared.

Shared depends on nothing inside Features.

---

# 8. Asset Layer

Assets never contain business logic.

Assets include

SVG

Images

Fonts

Audio

Video

Patterns

Glyphs

Artifacts

Assets are immutable resources.

---

# 9. Documentation Layer

Documentation defines the project.

Documentation never depends on implementation.

Implementation depends on documentation.

---

# 10. Codex Architecture

Codex is composed from independent layers.

Frame

↓

Ornaments

↓

Details

↓

Seals

↓

Final Overlay

↓

Angular Content

Every layer has exactly one responsibility.

---

# 11. SVG Library

Every SVG is standalone.

Every SVG contains

Title

Description

Defs

Style

Reusable Groups

No SVG references another SVG.

Composition happens outside.

---

# 12. Services

CodexLoaderService

Loads SVG assets.

Only responsibility:

Asset loading.

---

CodexCacheService

Caches SVG files.

Only responsibility:

Memory cache.

---

CodexComposerService

Composes SVG layers.

Only responsibility:

SVG composition.

---

CodexRendererService

Renders complete Codex.

Only responsibility:

Rendering.

Never layout.

Never business.

---

# 13. Renderer Flow

Loader

↓

Cache

↓

Composer

↓

Renderer

↓

Angular Component

---

# 14. Component Hierarchy

Codex

↓

Header

↓

Body

↓

Timeline

↓

Tags

↓

Footer

Children never communicate directly.

Everything flows through Codex.

---

# 15. Data Flow

CodexRecord

↓

CodexComponent

↓

Child Components

↓

Renderer

↓

View

Data always flows downward.

---

# 16. Layout Ownership

Geometry belongs to

CODEX-LAYOUT-GRID-SPECIFICATION

Components never invent spacing.

Renderer never invents positioning.

SVG never defines layout.

---

# 17. Asset Ownership

Frame

owns borders.

Ornaments

own decoration.

Details

own editorial guides.

Seals

own security.

Final

owns finishing layer.

No overlap of responsibilities.

---

# 18. Composition Rules

Compose.

Never redraw.

Never duplicate.

Every new visual element must first reuse existing assets.

---

# 19. Dependency Rules

Allowed

Feature

↓

Shared

↓

Assets

Forbidden

Shared

↓

Feature

Assets

↓

Angular

SVG

↓

Business Logic

---

# 20. Extension Rules

New glyphs

extend Glyph Library.

New artifacts

extend Artifact Library.

New documents

reuse existing layout.

Architecture must grow horizontally.

Never vertically.

---

# 21. Frozen Architecture

Frozen

Folder Structure

Renderer Pipeline

SVG Responsibilities

Composition Rules

Service Responsibilities

Changes require architectural justification.

---

END OF DOCUMENT.
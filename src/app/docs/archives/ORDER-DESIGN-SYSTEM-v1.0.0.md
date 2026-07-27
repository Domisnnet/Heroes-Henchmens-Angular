# ORDER DESIGN SYSTEM

**Project:** Heroes or Henchmens  
**Organization:** The Order  
**Subsystem:** Codex Vaticinarum  
**Version:** 1.0.0  
**Status:** FOUNDATION FROZEN

---

# 1. Purpose

The Order Design System defines the visual language, construction principles and reusable design rules used throughout the Heroes or Henchmens universe.

It translates the identity established by the Brand Guide into a consistent visual system.

It governs:

- visual foundations;
- color semantics;
- typography;
- iconography;
- glyph construction;
- asset taxonomy;
- visual hierarchy;
- SVG standards;
- composition;
- motion;
- visual states;
- reusable design patterns.

This document defines the system.

It does not define the narrative canon.

It does not define the software architecture.

It does not define the editorial structure of Codex documents.

---

# 2. Design Philosophy

The visual language of The Order is built upon five principles.

## Precision

Every element must have a defined purpose.

Visual decisions must be intentional.

Decoration must never exist without function.

---

## Geometry

The visual language is constructed from controlled geometry.

Preferred characteristics include:

- clear proportions;
- consistent alignment;
- deliberate symmetry;
- repeatable forms;
- measurable relationships.

Geometry should communicate order, not sterility.

---

## Hierarchy

Not every symbol has the same importance.

Visual prominence must reflect conceptual importance.

The institution must remain distinct from the artifacts it preserves.

---

## Modularity

Visual elements are created as independent systems whenever practical.

Complex compositions should emerge from reusable parts.

---

## Reusability

A solution that can be reused should be designed as a reusable asset or component.

Repeated visual concepts should not be recreated independently.

---

# 3. Design System Scope

The Order Design System governs the visual construction of:

- The Order interfaces;
- Codex documents;
- archive records;
- artifact presentations;
- glyphs;
- sigils;
- icons;
- patterns;
- institutional marks;
- interface states;
- motion language.

It applies across the project unless a higher-level canon explicitly establishes a specific exception.

---

# 4. Visual Foundations

The visual language of The Order is based on:

- geometry;
- symmetry;
- controlled contrast;
- institutional hierarchy;
- archival structure;
- restrained illumination;
- precise alignment;
- visual permanence.

The system should feel established rather than improvised.

It should communicate that every element belongs to a larger structure.

---

# 5. Color System

Color is semantic.

Color must communicate meaning before decoration.

## Institutional Colors

Institutional colors represent The Order itself.

They are reserved for:

- official frames;
- institutional marks;
- archive structures;
- primary document elements;
- neutral system states.

Institutional colors must not be confused with personality identities.

---

## Personality Colors

The five official personalities possess their own visual identities.

| Personality | Color |
|---|---|
| Hero | Blue |
| Protector | Green |
| Vigilante | Purple |
| Mercenary | Gold |
| Henchmen | Red |

These colors belong to the Essences.

They do not belong to The Order.

The Order recognizes and preserves them.

It does not claim ownership over them.

---

## Accent Colors

Accent colors highlight important information.

They must be used deliberately.

An accent must never dominate the visual hierarchy without a semantic reason.

---

## Status Colors

Status colors communicate system or archive conditions.

Examples include:

- Verified;
- Restricted;
- Classified;
- Corrupted;
- Archived;
- Warning;
- Unknown.

Status colors must remain distinguishable from personality colors whenever possible.

---

# 6. Typography System

Typography communicates authority, hierarchy and information density.

## Primary Typeface

The primary typeface is responsible for:

- titles;
- headings;
- institutional text;
- document content;
- narrative information.

It must prioritize readability and stability.

---

## Technical Typeface

A monospaced or technical typeface may be used for:

- registry codes;
- metadata;
- coordinates;
- system identifiers;
- timestamps;
- technical annotations;
- classification data.

Technical typography must support the archival character of the interface.

---

## Typography Rules

Typography must:

- establish clear hierarchy;
- preserve readability;
- avoid unnecessary ornamentation;
- remain consistent across documents;
- distinguish narrative content from metadata.

Decorative typefaces must not be used merely for spectacle.

---

# 7. Iconography

Icons represent functions, states or concepts.

They are not illustrations.

Icons should follow:

- simple geometry;
- consistent proportions;
- consistent stroke logic;
- clear silhouettes;
- semantic meaning.

Icons should remain legible at small sizes.

Icons must not compete with primary glyphs or sigils.

---

# 8. Glyph System

Glyphs form the symbolic vocabulary of the visual language.

A glyph represents a concept.

It is not automatically a logo.

It is not automatically an icon.

It is not decorative ornament.

Glyphs may represent concepts such as:

- origin;
- balance;
- containment;
- observation;
- connection;
- memory;
- energy;
- transformation.

Every glyph must possess a clear conceptual purpose.

---

# 9. Sigil System

Sigils represent the five recognized Essences.

Each Essence possesses its own identity.

A Sigil may contain:

- unique geometry;
- symbolic structure;
- rune;
- color;
- illumination;
- visual rhythm;
- conceptual meaning.

The Sigils are not institutional marks.

They represent the Essences recognized by The Order.

The visual system must preserve this distinction.

---

# 10. Artifact Identity

Artifacts possess their own identities.

The interface presents an artifact.

It does not imitate the artifact.

Institutional framing must remain recognizable as belonging to The Order, while the artifact itself retains its independent visual identity.

This distinction is fundamental to the archive language.

---

# 11. Asset Taxonomy

Visual assets are organized according to responsibility.

## Institutional Assets

Represent The Order.

Examples:

- logos;
- official seals;
- institutional frames;
- archive marks.

---

## Glyph Assets

Represent conceptual symbols.

Examples:

- geometric glyphs;
- symbolic marks;
- runic elements.

---

## Sigil Assets

Represent recognized Essences.

Examples:

- Essence Sigils;
- Essence runes;
- Essence-specific marks.

---

## Artifact Assets

Represent preserved or documented objects.

Examples:

- artifact cores;
- artifact frames;
- artifact seals;
- artifact interfaces.

---

## Decorative Assets

Support composition without becoming the primary subject.

Examples:

- patterns;
- ornaments;
- registration marks;
- corner details.

Decorative assets must never compete with information.

---

# 12. Layer Hierarchy

Visual composition follows this conceptual hierarchy:

Background

↓

Institutional Frame

↓

Artifact Structure

↓

Primary Symbol

↓

Glyph or Sigil

↓

Illumination

↓

Information

The exact implementation may vary by context.

The hierarchy itself must remain coherent.

No lower-priority layer should visually overpower a higher-priority layer without a defined reason.

---

# 13. SVG Standards

SVG assets are first-class visual resources.

Every reusable SVG should be:

- standalone;
- semantically named;
- independently maintainable;
- reusable;
- free of business logic.

Where appropriate, SVG assets should contain:

- XML declaration;
- title;
- description;
- defs;
- style definitions;
- semantic class names.

SVG assets should prefer:

- `currentColor`;
- explicit geometry;
- controlled stroke logic;
- reusable groups.

SVG assets should avoid unnecessary:

- embedded business logic;
- duplicated geometry;
- uncontrolled hardcoded colors;
- layout responsibilities;
- references to unrelated application features.

---

# 14. Composition Rules

Complex visual systems should be composed from reusable assets.

The preferred rule is:

**Compose. Do not duplicate.**

Before creating a new visual asset, verify whether an existing asset can be reused or combined.

Create a new asset only when:

- the concept is genuinely new;
- composition cannot adequately represent it;
- the new asset has a clear responsibility;
- its existence strengthens the visual system.

---

# 15. Layout Responsibility

The Design System defines visual principles.

The Codex Layout Grid defines document geometry.

Components define content composition.

SVG assets define visual representation.

No visual asset should silently redefine the layout system.

No decorative element should determine the position of editorial content.

Geometry must remain predictable.

---

# 16. Motion Language

Motion is functional.

Animation should communicate:

- activation;
- scanning;
- discovery;
- classification;
- confirmation;
- containment;
- transition.

Motion should be:

- subtle;
- deliberate;
- controlled;
- purposeful.

Motion must never exist solely to demonstrate technical capability.

The user should understand what changed and why.

---

# 17. Visual States

Visual states communicate system conditions.

Examples:

- dormant;
- active;
- scanning;
- resonating;
- classified;
- verified;
- restricted;
- archived;
- unknown;
- corrupted.

States should be visually distinguishable without relying exclusively on color.

Where appropriate, combine:

- typography;
- iconography;
- geometry;
- illumination;
- motion;
- metadata.

---

# 18. Angular Integration Principles

Angular components are responsible for composition and behavior.

Visual assets are responsible for visual representation.

Business logic must not be embedded inside SVG assets.

Reusable visual rules should be expressed through shared design tokens and reusable components.

Components should consume the Design System.

They should not redefine it independently.

The Design System is the visual grammar.

Components are sentences written with that grammar.

---

# 19. Asset Library

The project may maintain dedicated libraries for:

- institutional marks;
- glyphs;
- sigils;
- runes;
- artifacts;
- icons;
- patterns;
- frames;
- ornaments.

Each asset should have one primary responsibility.

An asset may be composed into multiple contexts without changing its conceptual identity.

---

# 20. Frozen Systems

The following are frozen at the level of principles and construction rules:

- visual hierarchy;
- institutional identity;
- color semantics;
- typography principles;
- glyph philosophy;
- sigil distinction;
- artifact identity;
- asset taxonomy;
- composition rules;
- SVG standards;
- motion principles.

Individual visual assets remain subject to the active creative phase until formally canonized.

The system is frozen.

The library may continue to grow.

---

# 21. Extension Rules

When a new visual requirement appears:

1. Search the existing system.
2. Determine whether an existing asset can be reused.
3. Determine whether composition can solve the requirement.
4. If not, define the conceptual responsibility of the new asset.
5. Create the asset according to the Design System.
6. Document its purpose.
7. Canonize it only when formally approved.

The system must grow horizontally.

New concepts should extend the vocabulary.

They should not silently redefine existing concepts.

---

# 22. Validation Rules

A new visual element is considered valid only if:

- its purpose is clear;
- its conceptual ownership is defined;
- it follows the visual hierarchy;
- it respects color semantics;
- it does not duplicate an existing concept;
- it can coexist with existing assets;
- it strengthens the identity of The Order;
- it does not contradict the established canon.

---

# 23. Foundation Status

Version 1.0.0 establishes the visual grammar of The Order.

It does not freeze every future symbol.

It does not freeze every future artifact.

It does not prevent creative expansion.

It establishes the rules by which future visual elements must be created.

---

# 24. Golden Rule

Before creating or introducing any new visual element, ask:

> **"Does this strengthen the identity of The Order?"**

If the answer is no,

the element must be reconsidered.

If the answer is yes,

it may be evaluated within the established system.

The Design System exists to preserve identity while allowing the universe to grow.

---

**END OF DOCUMENT**
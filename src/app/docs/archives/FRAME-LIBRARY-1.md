# FRAME-LIBRARY.md

**Project:** Heroes or Henchmens  
**Organization:** The Order  
**Subsystem:** Codex Vaticinarum  
**Library:** Frame Library  
**Version:** 1.0.0  
**Status:** FOUNDATION FROZEN  

---

# 1. Purpose

The Frame Library is the collection of vector assets responsible for the visual composition of official records belonging to the Codex Vaticinarum.

Each SVG asset possesses a single defined responsibility, allowing independent reuse, maintenance and evolution.

The Frame Library exists to guarantee:

- modular composition;
- asset reuse;
- visual consistency;
- independent maintenance;
- predictable rendering;
- architectural scalability.

The Frame Library does not contain business logic.

The Frame Library does not define document content.

The Frame Library does not define Angular behavior.

It provides the visual layers used by the Codex composition and rendering system.

---

# 2. Architectural Position

The Frame Library belongs to the Asset Layer of the project.

The architectural dependency direction is:

    Feature
        ↓
    Shared
        ↓
    Assets

Assets never depend on Features.

Assets never depend on Angular.

Assets never contain business logic.

The Frame Library is therefore an immutable visual resource consumed by the Codex composition and rendering pipeline.

---

# 3. Library Structure

    codex/
    │
    ├── codex-frame.svg
    ├── codex-ornaments.svg
    ├── codex-details.svg
    ├── codex-seals.svg
    ├── codex-frame-final.svg
    └── README.md

The library is composed of five primary visual layers.

Each layer is independent.

Each layer has exactly one responsibility.

---

# 4. Composition Order

The assets must be rendered exactly in the following sequence:

    codex-frame.svg
            │
            ▼
    codex-ornaments.svg
            │
            ▼
    codex-details.svg
            │
            ▼
    codex-seals.svg
            │
            ▼
    codex-frame-final.svg

The composition follows the principle:

    Base
      ↓
    Ornament
      ↓
    Function
      ↓
    Institution
      ↓
    Finishing

Each layer adds information to the composition.

No layer may replace the responsibility of another.

---

# 5. Asset Responsibilities

## 5.1 codex-frame.svg

### Responsibility

Defines the structural foundation of the Codex document.

### Contains

- Outer frame
- Inner frame
- Structural rails
- Corners
- Structural markers

### Does Not Contain

- Decorative ornaments
- Institutional seals
- Security badges
- Document content
- Business logic

The Frame establishes the physical identity of the document.

It belongs to The Order.

It does not belong to the archived object.

---

## 5.2 codex-ornaments.svg

### Responsibility

Defines the ornamental visual layer.

### Contains

- Flourishes
- Arabesques
- Decorative diamonds
- Decorative circles
- Lateral ornamentation

### Does Not Contain

- Content dividers
- Functional guides
- Timeline structures
- Institutional seals
- Security classifications

Ornaments exist to reinforce the historical and institutional character of the Codex.

They must never compete with information.

---

## 5.3 codex-details.svg

### Responsibility

Defines functional visual guides inside the document.

### Contains

- Dividers
- Internal lines
- Section separators
- Timeline guides
- Visual guides
- Content boundaries

### Does Not Contain

- Decorative ornamentation
- Institutional seals
- Security classifications
- Business logic

The Details layer provides visual organization without defining document content.

---

## 5.4 codex-seals.svg

### Responsibility

Defines institutional and archival authentication elements.

### Contains

- Security Levels
- Classification Badges
- Registration Marks
- Validation Seals

### Security Hierarchy

The complete security hierarchy of the Codex is:

    PUBLIC
        ↓
    RESTRICTED
        ↓
    CLASSIFIED
        ↓
    ORDER ONLY
        ↓
    OMEGA

The Frame Library provides the visual representation of these states.

The document data determines which security level is displayed.

The SVG itself does not contain business rules.

---

## 5.5 codex-frame-final.svg

### Responsibility

Defines the final visual finishing layer.

### Contains

- Finishing elements
- Visual highlights
- Final glyphs
- Registration highlights
- Overlay elements

The Final layer is rendered above all previous layers.

It must never replace structural elements belonging to the Frame.

It must never redefine document geometry.

It must never reposition document content.

---

# 6. Layer Ownership

Each asset owns a single visual responsibility.

    Frame
        ↓
    Structural Identity

    Ornaments
        ↓
    Historical Ornamentation

    Details
        ↓
    Functional Visual Guides

    Seals
        ↓
    Institutional Authentication

    Final
        ↓
    Finishing Layer

No asset may assume the responsibility of another layer.

---

# 7. Layout Ownership

The Frame Library does not own document geometry.

All geometry belongs exclusively to:

**CODEX-LAYOUT-GRID-SPECIFICATION**

Therefore:

- SVGs do not define content positioning.
- SVGs do not define component spacing.
- SVGs do not define responsive behavior.
- SVGs do not define document hierarchy.

The Grid defines where information exists.

The Frame Library defines how the document visually surrounds and supports that information.

---

# 8. SVG Independence

Every SVG must be standalone.

No SVG may reference another SVG directly.

Composition occurs outside the individual assets.

The rendering pipeline is responsible for assembling the layers.

The intended flow is:

    SVG Assets
        ↓
    Loader
        ↓
    Cache
        ↓
    Composer
        ↓
    Renderer
        ↓
    Angular Component
        ↓
    View

The Frame Library provides assets.

The Composer combines assets.

The Renderer renders the resulting composition.

Angular presents the final view.

---

# 9. SVG Header Convention

Every SVG asset must contain the standard project header.

The canonical header format is:

    <?xml version="1.0" encoding="UTF-8"?>
    <!-- ===================================================== -->
    <!-- Frame Library                                         -->
    <!-- Asset   : codex-xxxx.svg                              -->
    <!-- Version : 1.0.0                                       -->
    <!-- Status  : FOUNDATION FROZEN                           -->
    <!-- Order Design System                                   -->
    <!-- ===================================================== -->

The asset name must correspond to the actual SVG file.

The version must follow project versioning.

The status must reflect the canonical architectural state of the asset.

---

# 10. Naming Conventions

All CSS classes must use semantic names.

All classes must be prefixed according to their owning asset.

Examples:

    codex-frame__border

    codex-details__line

    codex-seals__outline

    codex-ornaments__primary

    codex-frame-final__center-glyph

Generic class names are forbidden.

Examples of forbidden names:

    .container

    .line

    .border

    .top

    .icon

    .element

The purpose of the prefix is to prevent collisions and preserve asset ownership.

---

# 11. ID Conventions

All SVG IDs must use the same ownership convention.

Examples:

    codex-frame__corner-accent

    codex-details__section-divider

    codex-seals__public

    codex-frame-final__center-glyph

IDs must be unique within the SVG.

IDs must clearly identify their owning layer.

---

# 12. Accessibility

Every SVG intended to be rendered as an image must provide accessible identification.

Required attributes:

    role="img"

    aria-labelledby="asset__title asset__desc"

The SVG must contain:

    <title id="asset__title">
    </title>

    <desc id="asset__desc">
    </desc>

IDs must be unique to the asset.

The title identifies the asset.

The description explains its visual purpose.

Accessibility metadata must not contain business logic.

---

# 13. SVG Style Rules

All Frame Library assets must follow the Order Design System.

The canonical visual conventions are:

- currentColor;
- fill="none" by default;
- vector-effect="non-scaling-stroke";
- stroke-linecap="round";
- stroke-linejoin="round".

Assets should avoid:

- embedded colors;
- unnecessary gradients;
- unnecessary filters;
- embedded animations;
- duplicated visual logic.

The visual appearance must remain controllable by the consuming system whenever possible.

---

# 14. Composition Rules

The fundamental rule of the Frame Library is:

> COMPOSE. DO NOT DUPLICATE.

Before creating a new SVG element, verify whether an existing asset can provide the required visual function.

Existing assets must be reused whenever possible.

Complex visual structures should be constructed through composition.

A new asset is justified only when the existing library cannot fulfill the requirement without violating an existing responsibility.

---

# 15. Responsibility Boundaries

The Frame Library owns:

- structural frame assets;
- decorative frame assets;
- functional visual guides;
- institutional seals;
- final visual overlays.

The Frame Library does not own:

- document data;
- business logic;
- document classification rules;
- security rules;
- layout geometry;
- Angular components;
- application routing;
- user state;
- quiz logic.

These responsibilities belong to their respective architectural layers.

---

# 16. Relationship With the Codex

The Frame Library provides the visual container.

The Codex Document Specification defines the document anatomy.

The Codex Layout Grid defines geometry.

The Renderer defines composition.

Angular defines presentation.

The relationship is:

    Codex Document Specification
                │
                ▼
        Document Structure
                │
                ▼
        Codex Layout Grid
                │
                ▼
            Frame Library
                │
                ▼
        Composition Pipeline
                │
                ▼
              Renderer
                │
                ▼
            Angular View

No single layer should assume the responsibility of another.

---

# 17. Foundation Frozen Assets

The following Frame Library assets are part of the FOUNDATION FROZEN architecture:

- codex-frame.svg
- codex-ornaments.svg
- codex-details.svg
- codex-seals.svg
- codex-frame-final.svg

The following principles are also frozen:

- One responsibility per SVG.
- No direct SVG-to-SVG dependency.
- Composition occurs outside individual assets.
- Geometry belongs to the Layout Grid.
- Business logic never belongs inside SVG.
- Existing assets must be reused before creating new assets.
- The Frame represents The Order.
- The archived object never replaces institutional identity.

Changes require architectural justification.

---

# 18. Extension Rules

Future visual requirements must follow this decision process:

    New visual requirement
            │
            ▼
    Can an existing asset solve it?
            │
          YES
            │
            ▼
    Reuse or compose
            │
          NO
            │
            ▼
    Does it belong to an existing responsibility?
            │
          YES
            │
            ▼
    Extend the appropriate asset
            │
          NO
            │
            ▼
    Is a new responsibility architecturally justified?
            │
          YES
            │
            ▼
    Propose a new asset
            │
          NO
            │
            ▼
          Reject

Architecture must grow horizontally.

Never vertically through unnecessary duplication.

---

# 19. Validation Checklist

A Frame Library asset is considered valid only if:

- [ ] It has a single responsibility.
- [ ] It belongs to a clearly defined layer.
- [ ] It does not duplicate another asset.
- [ ] It does not contain business logic.
- [ ] It does not define document geometry.
- [ ] It follows the naming conventions.
- [ ] It contains required accessibility metadata.
- [ ] It follows SVG style conventions.
- [ ] It can be composed independently.
- [ ] It respects the Codex Layout Grid.
- [ ] It preserves the institutional identity of The Order.

---

# 20. Golden Rule

Before creating or modifying any Frame Library asset, ask:

> "Does this asset strengthen the identity of The Order while preserving the responsibility of its layer?"

If the answer is no,

the asset must not be created or modified.

---

# 21. Final Principle

The Frame Library is not a collection of decorative SVGs.

It is the visual skeleton of the Codex.

Each layer has a purpose.

Each purpose has a boundary.

Each boundary protects the integrity of the whole.

The Frame establishes identity.

The Ornaments preserve character.

The Details establish order.

The Seals establish authority.

The Final layer completes the artifact.

Together, they form the visual foundation upon which the Codex Vaticinarum is rendered.

---

END OF DOCUMENT.

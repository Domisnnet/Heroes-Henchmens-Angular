# 📜 MOVIMENTO IV
# CANON BOUNDARY
## `CANON-AND-FOUNDATION.md`

**Project:** Heroes or Henchmens  
**Universe:** The Order  
**Subsystem:** Codex Vaticinarum  
**Version:** 1.0.0  
**Status:** 🔒 CANONICAL  
**Classification:** FOUNDATION DOCUMENT  
**Authority:** The Order  

---

# 1. Purpose

This document establishes the boundaries between the different layers that constitute the **Heroes or Henchmens** project.

Its purpose is to prevent contradictions between:

- the fictional universe;
- the official canon;
- the creative direction;
- the visual identity;
- the document specifications;
- the software architecture;
- the final implementation.

This document defines **what each layer governs**, **what may change**, and **what must remain consistent**.

No implementation decision may contradict the Canon.

No visual decision may contradict the Creative Direction.

No architectural decision may contradict the established Specifications.

---

# 2. The Foundation Hierarchy

The project follows the hierarchy below:

```text
                         CANON
                           │
                 Defines what is true
                           │
                           ▼
                 CREATIVE DIRECTION
                           │
              Defines how it is expressed
                           │
                           ▼
                   DESIGN SYSTEM
                           │
               Defines how it is designed
                           │
                           ▼
              DOCUMENT SPECIFICATION
                           │
              Defines how it is structured
                           │
                           ▼
                    ARCHITECTURE
                           │
              Defines how it is constructed
                           │
                           ▼
                  IMPLEMENTATION
                           │
              Defines the running software
```

Each layer inherits the authority of the layer above it.

No lower layer may redefine a higher layer.

---

# 3. Layer I — CANON

The Canon defines what is true within the universe of **Heroes or Henchmens**.

It governs:

- The Order;
- the Prisma da Escolha;
- the Guardião;
- the five Personalities;
- the five Sigilos;
- the fundamental principles of the universe;
- established historical events;
- established artifacts;
- established relationships;
- official terminology;
- official narrative facts.

The Canon is the highest authority.

If a new idea contradicts the Canon, the new idea does not become official unless the Canon itself is formally revised.

---

# 4. Canonical Principles

The following principles are foundational.

## The Order

The Order exists to guard, preserve and document knowledge related to the Prisma da Escolha and the phenomena surrounding it.

The Order does not create the essences it observes.

The Order recognizes, records and preserves.

---

## The Prisma da Escolha

The Prisma is the central artifact of the universe.

Its purpose is to reveal essence.

It does not create destiny.

It does not impose identity.

It does not judge.

It reveals.

---

## The Five Personalities

The five official Personalities are:

- Hero
- Protector
- Vigilante
- Mercenary
- Henchmen

None is inherently good.

None is inherently evil.

Each represents a different expression of choice, instinct, morality and action.

---

## The Sigils

The five Sigils belong to the Essences they represent.

They were not created by The Order.

They were discovered.

The Order recognizes and preserves them.

---

## The Guardião

The Guardião is an established figure within the universe.

The identity, origin and nature of the Guardião remain undisclosed.

The Canon does not currently establish whether the Guardião is:

- human;
- non-human;
- ancient;
- contemporary;
- singular;
- or something else entirely.

This uncertainty is intentional.

No future document may resolve this question without explicit canonical revision.

---

## The Codex Vaticinarum

The Codex is an official archival object within the universe.

Its exact origin remains unknown.

The Codex was found.

Its first scribe remains unknown.

The circumstances surrounding its creation are not currently established.

The Codex documents knowledge preserved by The Order.

It does not necessarily contain the complete truth.

---

# 5. Canon Authority

Canon has authority over all other layers.

Therefore:

```text
Canon
  ↓
Creative Direction
  ↓
Design
  ↓
Specification
  ↓
Architecture
  ↓
Implementation
```

A lower layer may interpret the Canon.

It may not contradict it.

---

# 6. Layer II — CREATIVE DIRECTION

Creative Direction defines how the Canon should be experienced.

The world of The Order should feel:

- ancient;
- intelligent;
- mysterious;
- institutional;
- precise;
- restrained;
- observant;
- permanent.

The experience may contain an atmosphere of uncertainty and conspiracy.

However, mystery must never become meaningless confusion.

The audience should feel that there is more to discover.

---

# 7. The Principle of Revelation

Information within the universe should be revealed progressively.

Not everything must be explained immediately.

Not every question requires an answer.

Not every mystery requires resolution.

The project should preserve deliberate unknowns.

The absence of information may itself be part of the experience.

---

# 8. The Voice of The Order

The Order communicates with:

- authority;
- precision;
- restraint;
- objectivity.

The Order does not communicate with:

- promotional language;
- exaggerated enthusiasm;
- casual humor;
- emotional manipulation.

The Order documents.

The Order observes.

The Order preserves.

---

# 9. The Role of Mystery

Mystery is a narrative instrument.

It must create curiosity.

It must not exist solely to obscure information.

Every mystery should suggest the possibility of a deeper truth.

The project should encourage the question:

> "What else does The Order know?"

---

# 10. Layer III — DESIGN SYSTEM

The Design System translates Creative Direction into visual rules.

It governs:

- typography;
- color;
- geometry;
- spacing;
- iconography;
- glyphs;
- visual hierarchy;
- motion;
- asset composition.

The Design System is defined primarily by:

`ORDER-DESIGN-SYSTEM.md`

and supported by:

`BRAND-GUIDE.md`

Visual decisions must reinforce the identity of The Order.

---

# 11. Layer IV — DOCUMENT SPECIFICATION

The Document Specification defines the structure of official Codex records.

It governs:

- document anatomy;
- section hierarchy;
- metadata;
- classification;
- security levels;
- archive structure;
- authentication;
- information hierarchy.

The primary authority is:

`CODEX-DOCUMENT-SPECIFICATION.md`

The Document Specification defines **what a document contains**.

It does not define how the software renders it.

---

# 12. Layer V — LAYOUT SPECIFICATION

The Layout Specification defines the geometry of Codex documents.

It governs:

- canvas dimensions;
- safe areas;
- zones;
- margins;
- alignment;
- positioning;
- proportions;
- responsive scaling.

The primary authority is:

`CODEX-LAYOUT-GRID-SPECIFICATION.md`

The Layout Specification defines **where information exists**.

It does not define the information itself.

---

# 13. Layer VI — ARCHITECTURE

Architecture defines how the Codex is constructed as software.

It governs:

- folder structure;
- component responsibilities;
- service responsibilities;
- data flow;
- SVG composition;
- rendering;
- caching;
- dependency rules.

The primary authority is:

`ARCHITECTURE.md`

Architecture must implement the Specifications.

It must never redefine them.

---

# 14. Layer VII — IMPLEMENTATION

Implementation is the executable expression of all previous layers.

It includes:

- Angular components;
- services;
- TypeScript;
- SCSS;
- HTML;
- SVG;
- assets;
- routing;
- application logic.

Implementation is the lowest layer of authority.

If implementation conflicts with the documentation, the implementation is considered incorrect.

The documentation does not adapt automatically to implementation errors.

---

# 15. Frozen and Evolvable Layers

## Frozen

The following are currently considered foundational:

- Core Canon;
- The Order;
- Prisma da Escolha;
- Five Personalities;
- Five Sigils;
- Guardião;
- Codex Vaticinarum;
- fundamental narrative principles;
- visual identity foundation;
- document anatomy;
- layout grid;
- architectural foundation.

---

## Evolvable

The following may evolve without breaking the foundation:

- animation;
- microinteractions;
- sound;
- particles;
- transitions;
- additional artifacts;
- additional records;
- new glyphs;
- new document instances;
- additional archive classifications;
- future systems;
- implementation details.

Evolution must remain compatible with the higher layers.

---

# 16. Canon Revision

Canon may be revised only when a change is intentional and formally recognized.

A revision must:

1. identify the affected canonical element;
2. explain the reason for revision;
3. identify dependent documents;
4. update affected documentation;
5. record the change in `CHANGELOG.md`.

No implementation change automatically changes Canon.

---

# 17. The Golden Boundary

Before introducing a new idea, determine its layer.

Ask:

```text
Is this a Canon fact?

Is this Creative Direction?

Is this a Design rule?

Is this a Document rule?

Is this a Layout rule?

Is this Architecture?

Or is this only Implementation?
```

If the layer cannot be identified, the idea must not yet be implemented.

First determine where it belongs.

---

# 18. The Golden Rule

No lower layer may silently redefine a higher layer.

```text
Implementation
    cannot redefine
Architecture

Architecture
    cannot redefine
Specifications

Specifications
    cannot redefine
Design

Design
    cannot redefine
Creative Direction

Creative Direction
    cannot redefine
Canon
```

The foundation remains coherent because every layer knows its place.

---

# 19. The Order of Creation

All future development should follow this sequence:

```text
CANON
   ↓
CREATIVE DIRECTION
   ↓
DESIGN
   ↓
SPECIFICATION
   ↓
ARCHITECTURE
   ↓
IMPLEMENTATION
```

When introducing a major new concept, creation begins at the highest relevant layer.

Never begin with implementation merely because implementation is convenient.

---

# 20. Final Declaration

The foundation of **Heroes or Henchmens** is not defined by its code alone.

The code is the final expression of a larger system.

The universe defines the truth.

The Creative Direction defines its atmosphere.

The Design System defines its language.

The Specifications define its structure.

The Architecture defines its construction.

The Implementation gives it existence.

Together, these layers form the foundation upon which the Order may continue to expand.

No future artifact, personality, faction, achievement, document or system exists in isolation.

Everything belongs somewhere.

Everything has a place.

Everything must preserve the integrity of what came before.

---

# 🔒 CANON STATUS

**Foundation:** ESTABLISHED

**Authority Model:** DEFINED

**Layer Boundaries:** CANONIZED

**Canon:** PROTECTED

**Creative Direction:** ESTABLISHED

**Design Foundation:** FROZEN

**Document Foundation:** FROZEN

**Architecture Foundation:** FROZEN

**Implementation:** EVOLVING

---

```text
THE FOUNDATION STANDS.

THE ORDER PRESERVES.

THE CODEX RECORDS.

THE PRISMA REVEALS.

THE REST REMAINS TO BE DISCOVERED.
```

---

**END OF DOCUMENT**

**CANON-AND-FOUNDATION.md**  
**Version 1.0.0**  
**Status: CANONICAL**  
**Movement IV: COMPLETE**

# CODEX DOCUMENT SPECIFICATION

**Project:** Heroes or Henchmens  
**Organization:** The Order  
**Codename:** Codex Vaticinarum  
**Version:** 1.0.0  
**Status:** FOUNDATION FROZEN

---

# 1. Purpose

The Codex Document Specification defines the editorial structure, hierarchy and institutional language of official records produced by The Order.

It establishes how knowledge is represented as an official archive record.

This document defines:

- document identity;
- information hierarchy;
- record anatomy;
- classification;
- security levels;
- editorial responsibilities;
- validation rules;
- future document extensions.

It does not define:

- visual branding;
- design tokens;
- physical layout geometry;
- software architecture;
- application routing;
- business logic.

Those responsibilities belong to their respective Foundation documents.

---

# 2. Document Philosophy

Every official Codex record follows five principles.

## Institutional

Every record belongs to The Order.

The document must feel official, preserved and authenticated.

It must never feel like an informal note or personal journal.

---

## Information First

Information is always more important than ornament.

Visual elements exist to reinforce comprehension, hierarchy and institutional identity.

---

## Hierarchy

Every section has a defined responsibility.

Readers must be able to distinguish:

- what the document is;
- what it represents;
- what is known;
- what has been recorded;
- how it is classified;
- whether it is authentic.

---

## Consistency

Different records may contain different knowledge.

They must still speak the same institutional language.

Different contents.

One archive system.

---

## Permanence

A Codex record must feel timeless.

It should remain believable regardless of when it is accessed.

The record is preserved.

The interface is only the current means of observing it.

---

# 3. The Codex Record

A Codex Record is an official archive entry maintained by The Order.

Every record exists to preserve knowledge.

The record may describe:

- an artifact;
- an entity;
- a location;
- an event;
- a phenomenon;
- a protocol;
- a mission;
- a technological object;
- an institutional subject;
- an unknown occurrence.

The Codex records what is known.

It does not manufacture certainty where none exists.

Unknown information must remain unknown.

---

# 4. Document Identity

Every Codex Record possesses four fundamental pillars:

1. Identity
2. Representation
3. Information
4. Authentication

These pillars define the existence of the archive entry.

## Identity

Establishes what the record is.

Examples:

- registry code;
- classification;
- title;
- subtitle;
- security level.

---

## Representation

Provides the primary symbolic representation of the archived subject.

This may be:

- a glyph;
- a sigil;
- an institutional mark;
- an approved visual identifier.

The representation belongs to the subject being documented.

It does not replace the institutional identity of The Order.

---

## Information

Contains the knowledge preserved by the record.

Information may include:

- summary;
- description;
- origin;
- characteristics;
- properties;
- observations;
- known behavior;
- relationships;
- historical events;
- warnings.

---

## Authentication

Confirms the institutional origin and integrity of the record.

Authentication may include:

- registry identifier;
- archive branch;
- revision;
- verification state;
- official signature.

---

# 5. Document Anatomy

Every Codex Record follows the canonical structure:

```text
┌──────────────────────────────────────┐
│ HEADER                               │
├──────────────────────────────────────┤
│                                      │
│              GLYPH                   │
│                                      │
├──────────────────────────────────────┤
│ SUMMARY                              │
├──────────────────────────────────────┤
│ BODY                                 │
│                                      │
│                                      │
├──────────────────────────────────────┤
│ TIMELINE                             │
├──────────────────────────────────────┤
│ TAGS                                 │
├──────────────────────────────────────┤
│ FOOTER                               │
└──────────────────────────────────────┘
```

The canonical order is:

Header

↓

Glyph

↓

Summary

↓

Body

↓

Timeline

↓

Tags

↓

Footer

The core anatomy is immutable.

Optional sections may remain empty or be omitted according to the record type, without changing the order of the canonical structure.

---

# 6. Header

The Header identifies the archive record.

It does not explain the archived subject.

The Header may contain:

- Registry Code;
- Classification;
- Security Level;
- Title;
- Subtitle.

The Header establishes immediate document identity.

---

# 7. Glyph or Primary Representation

The primary representation identifies the archived subject.

It may be a Glyph, Sigil or other approved symbolic representation.

Rules:

- one primary representation per record;
- visually centered within its reserved region;
- conceptually associated with the archived subject;
- never used as institutional decoration;
- never allowed to replace the document's institutional identity.

The representation must communicate identity, not merely occupy space.

---

# 8. Summary

The Summary answers one question:

> **What is this?**

It provides a concise introduction to the archived subject.

The Summary should establish the essential context before the reader enters the detailed record.

It should remain concise.

Recommended maximum:

Two paragraphs.

---

# 9. Body

The Body contains the principal archive information.

Depending on the record, it may contain:

- Description;
- Origin;
- Characteristics;
- Properties;
- Known Behaviour;
- Warnings;
- Observations;
- Relationships;
- Historical Context.

Not every record requires every section.

The Body must contain only information relevant to the subject.

---

# 10. Timeline

The Timeline records significant historical events associated with the subject.

Possible events include:

- Discovery;
- Recovery;
- Classification;
- Containment;
- Relocation;
- Incident;
- Observation;
- Revision.

Timeline entries are chronological.

When an event's date is unknown, the record must preserve that uncertainty rather than inventing a precise date.

---

# 11. Tags

Tags provide metadata for indexing and discovery.

They support classification but do not replace it.

Examples:

- Ancient;
- Stable;
- Organic;
- Mechanical;
- Unknown Origin;
- Energy;
- Relic;
- Phenomenon.

Tags may evolve as knowledge expands.

---

# 12. Footer

The Footer authenticates the archive record.

It may contain:

- Registry Identifier;
- Archive Branch;
- Revision;
- Verification;
- Official Signature.

The Footer is institutional.

It does not contain narrative decoration.

---

# 13. Classification System

Every Codex Record belongs to one primary classification.

Current classifications:

- Artifact;
- Entity;
- Location;
- Archive;
- Protocol;
- Mission;
- Order;
- Phenomenon;
- Technology;
- Unknown.

A record may contain secondary tags, but its primary classification remains singular.

---

# 14. Security Levels

Every archive record possesses one security level.

The current hierarchy is:

```text
PUBLIC

↓

RESTRICTED

↓

CLASSIFIED

↓

ORDER ONLY

↓

OMEGA
```

Security level communicates access authority.

It does not change the canonical document anatomy.

A restricted record remains structurally recognizable as a Codex record.

---

# 15. Information Hierarchy

The conceptual priority of the document is:

Document

↓

Information

↓

Primary Representation

↓

Institutional Frame

↓

Decorative Assets

Information must remain dominant.

Decorative elements must never obscure or compete with essential knowledge.

---

# 16. Institutional Frame

The Frame belongs to The Order.

It identifies the institution responsible for preserving the record.

The Frame does not belong to the archived subject.

Every official Codex record shares the institutional frame language.

The archived subject may possess its own visual identity, but it must remain visually distinct from the institution that documents it.

---

# 17. Representation Philosophy

The primary representation is a symbolic abstraction.

It is not automatically:

- an illustration;
- a logo;
- an icon;
- decorative ornament.

Its purpose is to establish conceptual identity.

The representation must be appropriate to the subject and consistent with the Order Design System.

---

# 18. Editorial Language

Codex records use an institutional voice.

The language should be:

- objective;
- formal;
- concise;
- observational;
- precise;
- restrained.

The record should distinguish between:

- verified information;
- observed information;
- historical accounts;
- hypotheses;
- unknown information.

Certainty must never be implied where evidence does not support it.

---

# 19. Knowledge and Uncertainty

The Codex preserves what The Order knows.

It also preserves what The Order does not know.

Unknown information is valid information.

When the origin, purpose or nature of a subject remains uncertain, the record may explicitly identify it as:

- Unknown;
- Unverified;
- Inconclusive;
- Hypothetical;
- Disputed.

The archive must never invent certainty for the sake of completeness.

---

# 20. Composition Responsibilities

Each section has one primary responsibility.

Header

→ Identifies.

Glyph

→ Represents.

Summary

→ Introduces.

Body

→ Documents.

Timeline

→ Records.

Tags

→ Classifies.

Footer

→ Authenticates.

Responsibilities must not overlap unnecessarily.

---

# 21. Validation Rules

A Codex Record is structurally valid when it contains:

- Header;
- Primary Representation;
- Summary;
- Body;
- Footer.

Timeline and Tags are optional according to record type.

Every valid record must also possess:

- a primary classification;
- a security level;
- an identifiable institutional origin.

---

# 22. Future Extensions

Future document modules may include:

- Cross References;
- Related Records;
- Personnel;
- Recovered Objects;
- Mission Reports;
- Expedition Logs;
- Incident Files;
- Attachments;
- Evidence;
- Witness Accounts;
- Revision History.

Extensions must preserve the canonical anatomy.

New modules may expand the information contained in a record.

They must not redefine the identity of the Codex.

---

# 23. Canonical Boundaries

The Codex Document Specification defines the structure of knowledge.

It does not define:

- how the document is rendered;
- where elements are positioned;
- how SVG assets are composed;
- how Angular components communicate;
- how records are loaded;
- how the user navigates the application.

Those responsibilities belong to:

- Order Design System;
- Codex Layout Grid Specification;
- Architecture Specification.

---

# 24. Foundation Status

Version 1.0.0 establishes the canonical anatomy and editorial rules of Codex Vaticinarum records.

The document structure is frozen.

The content of future records is not.

New knowledge may be added.

New archive subjects may be discovered.

New classifications may be proposed through formal revision.

The archive may grow.

Its fundamental language remains stable.

---

# 25. Golden Rule

Before introducing a new document element, ask:

> **"Would The Order include this in an official archive?"**

If the answer is no,

it does not belong in the Codex.

If the answer is yes,

its purpose, classification and responsibility must be clearly defined before implementation.

---

**END OF DOCUMENT**

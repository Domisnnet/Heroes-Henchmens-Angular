# Project: Heroes or Henchmens

## Document: Codex Vaticinarum Specification

**Version:** 1.0.0  
**Status:** FOUNDATION FROZEN

## 1. Purpose

The Codex Vaticinarum is the official archive of The Order.

It is not a card.

It is not a UI component.

It is an institutional document produced by The Order for cataloguing artifacts, entities, locations, technologies, phenomena and historical records.

Every Codex page represents one official archive record.

## 2. Design Principles

Every Codex document follows five immutable principles.

### Authority

The document must feel official.

Nothing should resemble a game UI.

Nothing should resemble a dashboard.

Everything should resemble institutional documentation.

### Information First

Information is always more important than decoration.

Visual elements exist only to reinforce the document.

Never to compete with it.

### Hierarchy

Every section has a clear importance.

Readers must understand the document without effort.

### Consistency

Every Codex page follows exactly the same structural language.

No record invents its own layout.

### Timelessness

The Codex should feel centuries old while simultaneously appearing technologically advanced.

## 3. Document Anatomy

Every Codex record is divided into fixed sections.

- HEADER
- GLYPH
- SUMMARY
- CONTENT
- TIMELINE
- TAGS
- FOOTER

No additional primary sections are allowed.

## 4. Header

The Header identifies the document.

It never explains the artifact.

It identifies it.

The Header contains:

- Classification
- Security Level
- Registry Code
- Title
- Subtitle

The Header occupies the upper portion of the document.

## 5. Glyph

The Glyph is the visual representation of the archived object.

It is never decorative.

It never replaces textual information.

It exists only to help recognition.

Each record owns exactly one primary Glyph.

## 6. Summary

The Summary is the first textual description.

It answers one question:

What is this?

The Summary should never exceed two paragraphs.

## 7. Content

The Content contains the complete archive.

Possible sections include:

- Description
- Characteristics
- Origin
- Behaviour
- Observations
- Warnings
- Relationships
- Known Records

Not every document must contain every section.

## 8. Timeline

The Timeline records historical events.

Each event represents a significant moment in the archive history.

Examples:

- Discovery
- Recovery
- Classification
- Incident
- Containment
- Relocation

Timeline entries are always chronological.

## 9. Tags

Tags classify the archive.

They are metadata.

They never replace classifications.

Examples:

- Energy
- Ancient
- Relic
- Stable
- Unknown Origin

## 10. Footer

The Footer authenticates the document.

Possible information:

- Registry Identifier
- Version
- Last Revision
- Archive Branch
- Verification Code
- Official Signature

The Footer is never decorative.

## 11. Classification System

Every document belongs to exactly one primary classification.

Current classifications:

- Artifact
- Entity
- Location
- Archive
- Protocol
- Mission
- Order
- Phenomenon
- Technology
- Unknown

Additional classifications require architectural approval.

## 12. Security Levels

Every record possesses exactly one security level.

Current hierarchy:

- PUBLIC
- RESTRICTED
- CLASSIFIED
- ORDER ONLY
- OMEGA

Security determines presentation but never changes document structure.

## 13. Layout Rules

The layout is fixed.

Sections never swap positions.

The visual rhythm must remain constant across every record.

The user must immediately recognize a Codex document regardless of its contents.

## 14. Visual Hierarchy

The visual priority is immutable.

Document

↓

Information

↓

Glyph

↓

Frame

↓

Decorative Elements

Decoration must never overpower information.

## 15. Glyph Philosophy

A Glyph represents the essence of the archived object.

It is not an illustration.

It is not an icon.

It is a symbolic abstraction.

Glyphs follow the visual language defined by the Order Design System.

## 16. Frame Philosophy

The frame represents the physical archive.

It is constant.

It does not identify the artifact.

It identifies the institution.

## 17. Document States

A record may exist in different states.

Examples:

- Draft
- Under Investigation
- Archived
- Verified
- Lost
- Corrupted

Document state is independent from classification.

## 18. Future Extensions

Future sections may include:

- Related Records
- Cross References
- Personnel
- Expeditions
- Incident Reports
- Attachments
- Recovery Logs

These extensions must never alter the core document anatomy.

## 19. Golden Rule

Every new feature must answer one question before implementation:

> "Would The Order include this information in an official archive?"

If the answer is no, it does not belong in the Codex.

END OF DOCUMENT.

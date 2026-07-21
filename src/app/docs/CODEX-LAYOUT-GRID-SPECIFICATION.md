# CODEX LAYOUT GRID SPECIFICATION

**Project:** Heroes or Henchmens

**Codename:** Codex Vaticinarum

**Version:** 1.0.0

**Status:** FOUNDATION FROZEN

---

# 1. Purpose

The Codex Layout Grid defines the geometric structure of every Codex Vaticinarum document.

Unlike the Document Specification, which defines editorial hierarchy, this document defines physical positioning.

Every SVG asset.

Every Angular component.

Every renderer.

Every future document export.

Must follow this specification.

---

# 2. Design Philosophy

The layout grid is based on one principle:

Every visual element must occupy a predictable location.

Nothing is manually positioned.

Nothing is positioned by visual approximation.

Everything belongs to the Grid.

---

# 3. Reference Canvas

All measurements are based on the canonical document.

```

Width

400 units

Height

600 units

Coordinate Origin

(0,0)

Top Left

```

Every implementation must preserve the aspect ratio.

---

# 4. Safe Area

The frame defines an internal working area.

```

Left

24

Top

24

Right

376

Bottom

576

```

Nothing may overflow this region.

Except frame ornaments.

---

# 5. Primary Vertical Zones

```
┌──────────────────────────────┐
│ Header                       │
├──────────────────────────────┤
│ Glyph                        │
├──────────────────────────────┤
│ Summary                      │
├──────────────────────────────┤
│ Body                         │
├──────────────────────────────┤
│ Timeline                     │
├──────────────────────────────┤
│ Tags                         │
├──────────────────────────────┤
│ Footer                       │
└──────────────────────────────┘
```

These zones never change order.

---

# 6. Zone Dimensions

## Header

```

Top

24

Bottom

80

Height

56

```

---

## Glyph

```

Top

80

Bottom

200

Height

120

```

---

## Summary

```

Top

200

Bottom

240

Height

40

```

---

## Body

```

Top

240

Bottom

420

Height

180

```

---

## Timeline

```

Top

420

Bottom

500

Height

80

```

---

## Tags

```

Top

500

Bottom

540

Height

40

```

---

## Footer

```

Top

540

Bottom

576

Height

36

```

---

# 7. Horizontal Grid

Internal working width

```

352 units

```

Margins

```

Left

24

Right

24

```

Content is always centered.

---

# 8. Alignment Rules

Titles

Center

Glyph

Center

Timeline

Left aligned

Paragraphs

Left aligned

Footer

Center

Tags

Flow Layout

---

# 9. Header Specification

The Header contains:

Registry

Classification

Security

Title

Subtitle

Reserved Area

```

X

24 → 376

Y

24 → 80

```

---

# 10. Glyph Specification

Reserved Area

```

X

80 → 320

Y

90 → 190

```

Center

```

X = 200

Y = 140

```

Maximum Size

```

100 × 100

```

The Glyph never exceeds its reserved area.

---

# 11. Summary Specification

Reserved Area

```

Left

40

Right

360

Top

200

Bottom

240

```

Maximum

Two paragraphs.

---

# 12. Body Specification

Reserved Area

```

Left

40

Right

360

Top

240

Bottom

420

```

Paragraph spacing

```

8 units

```

Section spacing

```

16 units

```

---

# 13. Timeline Specification

Reserved Area

```

Left

48

Right

352

Top

420

Bottom

500

```

Vertical Item Gap

```

24 units

```

Marker Column

```

X = 50

```

Content Column

```

X = 72

```

---

# 14. Tags Specification

Reserved Area

```

Left

40

Right

360

Top

500

Bottom

540

```

Layout

Horizontal Flow

Gap

```

8 units

```

Wrap

Enabled

---

# 15. Footer Specification

Reserved Area

```

Left

24

Right

376

Top

540

Bottom

576

```

Content

Registry

Revision

Verification

Signature

Center aligned.

---

# 16. Decorative Assets

Decorative assets never define layout.

They adapt to the Grid.

Includes:

Frame

Ornaments

Corner Accents

Registration Marks

Highlights

Decorative assets must never determine content position.

---

# 17. SVG Integration

The following SVG assets must respect the Grid.

```

codex-frame.svg

codex-details.svg

codex-ornaments.svg

codex-seals.svg

codex-frame-final.svg

```

No SVG is allowed to redefine content positioning.

SVG assets only visualize the layout.

---

# 18. Angular Integration

Angular components inherit the Grid.

Components never create their own spacing rules.

```

CodexHeader

↓

Header Zone

CodexBody

↓

Body Zone

CodexTimeline

↓

Timeline Zone

CodexFooter

↓

Footer Zone

```

Layout belongs to the Grid.

Not to Components.

---

# 19. Renderer Integration

The Renderer is responsible only for composition.

It never defines geometry.

Geometry belongs exclusively to this specification.

---

# 20. Responsive Behaviour

Scaling is proportional.

The aspect ratio must remain:

```

2 : 3

```

No zone changes its relative position.

No element changes hierarchy.

---

# 21. Validation Rules

A layout is considered valid only if:

✓ Every component stays inside its reserved zone.

✓ No content overlaps another zone.

✓ The Glyph remains centered.

✓ Timeline never exceeds its area.

✓ Footer remains visible.

---

# 22. Frozen Geometry

The following values are frozen.

Document Size

Safe Area

Zone Order

Glyph Center

Margins

Primary Spacing

Future revisions may extend the document.

They must never invalidate the Grid.

---

# 23. Golden Rule

Every visual element must answer one question before being positioned.

"Which Grid Zone owns this information?"

If no zone exists,

the document structure must be reviewed before implementation.

---

END OF DOCUMENT.
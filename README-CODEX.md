# Codex Vaticinarum — Frame Library

## Overview

A **Frame Library** é o conjunto de assets vetoriais responsáveis pela composição visual dos registros do **Codex Vaticinarum**.

Cada SVG possui uma única responsabilidade, permitindo reutilização, manutenção e evolução independente.

---

## Estrutura

```text
codex/
│
├── codex-frame.svg
├── codex-ornaments.svg
├── codex-details.svg
├── codex-seals.svg
├── codex-frame-final.svg
└── README.md
```

---

# Ordem de composição

Os arquivos devem ser renderizados exatamente nesta sequência:

```text
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
```

Cada camada adiciona novos elementos sem substituir a anterior.

---

# Responsabilidades

## codex-frame.svg

Estrutura principal do artefato.

Responsável por:

- Moldura externa
- Moldura interna
- Trilhos
- Cantos
- Marcadores estruturais

Não deve conter elementos decorativos.

---

## codex-ornaments.svg

Camada ornamental.

Responsável por:

- Flourishes
- Arabescos
- Diamantes
- Círculos decorativos
- Ornamentação lateral

Não deve conter divisórias ou selos.

---

## codex-details.svg

Camada funcional.

Responsável por:

- Divisórias
- Linhas internas
- Separadores
- Timeline
- Guias visuais
- Área de conteúdo

Não deve conter decoração.

---

## codex-seals.svg

Camada institucional.

Responsável por:

- Security Levels
- Classification Badges
- Registration Marks
- Validation Seals

Níveis disponíveis:

- Public
- Restricted
- Classified

---

## codex-frame-final.svg

Camada superior.

Responsável por:

- Acabamentos
- Realces
- Glifos finais
- Registration Highlights
- Overlay

Nunca deve substituir elementos do frame principal.

---

# Convenções

Todos os assets seguem exatamente o mesmo padrão.

## Cabeçalho

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- ===================================================== -->
<!-- Frame Library                                         -->
<!-- Asset   : codex-xxxx.svg                              -->
<!-- Version : 1.0.0                                       -->
<!-- Status  : Construction                                -->
<!-- Order Design System                                   -->
<!-- ===================================================== -->
```

---

## Classes

Sempre prefixadas.

Exemplo:

```text
codex-frame__border

codex-details__line

codex-seals__outline

codex-ornaments__primary
```

Nunca utilizar nomes genéricos.

---

## IDs

Sempre prefixados.

Exemplo:

```text
codex-frame__corner-accent

codex-details__section-divider

codex-seals__public

codex-frame-final__center-glyph
```

---

## Acessibilidade

Todos os SVGs devem possuir:

```xml
role="img"

aria-labelledby="asset__title asset__desc"
```

e

```xml
<title/>

<desc/>
```

com IDs exclusivos.

---

## Estilo

Todos os SVGs utilizam:

- currentColor
- fill:none
- vector-effect:non-scaling-stroke
- stroke-linecap:round
- stroke-linejoin:round

---

## Responsabilidade

Cada SVG deve possuir apenas uma responsabilidade.

Não duplicar elementos existentes em outro asset.

---

# Objetivo

A Frame Library foi desenvolvida para permitir composição modular dos registros do **Codex Vaticinarum**, mantendo consistência visual, reutilização dos assets e facilidade de manutenção.

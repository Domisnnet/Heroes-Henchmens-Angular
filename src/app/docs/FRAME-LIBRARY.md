# Codex Vaticinarum — Frame Library

**Project:** Heroes or Henchmens  
**Subsystem:** Codex Vaticinarum  
**Version:** 1.0.0  
**Status:** FOUNDATION FROZEN

---

## Overview

A **Frame Library** é o conjunto de assets vetoriais responsáveis pela composição visual dos registros do **Codex Vaticinarum**.

Cada SVG possui uma única responsabilidade, permitindo reutilização, manutenção e evolução independente.

A Frame Library pertence à camada de Assets e não contém lógica de negócio, regras editoriais ou posicionamento de conteúdo.

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

# Ordem de Composição

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

A composição acontece externamente aos SVGs.

---

# Responsabilidades

## `codex-frame.svg`

Estrutura principal do artefato.

Responsável por:

- Moldura externa
- Moldura interna
- Trilhos
- Cantos
- Marcadores estruturais

Não deve conter elementos decorativos.

---

## `codex-ornaments.svg`

Camada ornamental.

Responsável por:

- Flourishes
- Arabescos
- Diamantes
- Círculos decorativos
- Ornamentação lateral

Não deve conter divisórias ou selos.

---

## `codex-details.svg`

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

## `codex-seals.svg`

Camada institucional.

Responsável por:

- Security Levels
- Classification Badges
- Registration Marks
- Validation Seals

Níveis disponíveis:

- `PUBLIC`
- `RESTRICTED`
- `CLASSIFIED`
- `ORDER ONLY`
- `OMEGA`

A camada de Seals representa o estado institucional do documento.

---

## `codex-frame-final.svg`

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
<!-- Status  : FOUNDATION FROZEN                           -->
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

IDs devem ser exclusivos dentro do asset.

---

## Acessibilidade

Todos os SVGs devem possuir:

```xml
role="img"

aria-labelledby="asset__title asset__desc"
```

e:

```xml
<title id="asset__title"></title>

<desc id="asset__desc"></desc>
```

Os IDs utilizados para acessibilidade devem ser exclusivos no contexto do asset.

---

## Estilo

Todos os SVGs utilizam, quando aplicável:

- `currentColor`
- `fill="none"`
- `vector-effect="non-scaling-stroke"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`

Os assets não devem incorporar cores fixas quando a identidade visual puder ser controlada pela composição.

---

## Responsabilidade

Cada SVG deve possuir apenas uma responsabilidade.

Não duplicar elementos existentes em outro asset.

Não transferir regras de negócio para SVGs.

Não utilizar SVGs para definir o posicionamento estrutural do conteúdo.

A geometria do documento pertence ao:

`CODEX-LAYOUT-GRID-SPECIFICATION.md`

---

# Composição

A Frame Library segue o princípio:

> **Compose. Never Redraw.**

Quando um novo elemento visual puder ser construído pela combinação de assets existentes, a composição deve ser priorizada.

Um novo asset somente deve ser criado quando a composição dos elementos existentes for insuficiente.

---

# Relação com o Codex

A Frame Library fornece a estrutura visual institucional dos registros.

Ela não define:

- O conteúdo do documento
- A classificação editorial
- A hierarquia textual
- As regras de negócio
- O posicionamento geométrico final
- A lógica Angular

Essas responsabilidades pertencem às respectivas especificações canônicas.

---

# Pipeline

A Frame Library participa do pipeline visual do Codex:

```text
Loader
    │
    ▼
Cache
    │
    ▼
Composer
    │
    ▼
Renderer
    │
    ▼
Angular Component
    │
    ▼
View
```

A Frame Library fornece os assets utilizados durante a composição.

---

# Objetivo

A Frame Library foi desenvolvida para permitir composição modular dos registros do **Codex Vaticinarum**, mantendo:

- consistência visual;
- reutilização dos assets;
- separação de responsabilidades;
- facilidade de manutenção;
- expansão controlada;
- compatibilidade com a arquitetura congelada.

---

# Status

🔒 **FOUNDATION FROZEN**

A estrutura e as responsabilidades da Frame Library são consideradas canônicas na versão 1.0.0.

Novos assets podem ser adicionados por extensão da biblioteca, desde que respeitem a arquitetura, o Design System e as regras de composição existentes.

---

**End of Document.**

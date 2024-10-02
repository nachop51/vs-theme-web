---
title: ColorScheme
description: The ColorScheme type represents the colors of a theme.
---

```ts
export interface ColorScheme {
  editor: {
    bg: string
    fg: string
  }

  ui: {
    bg: string
    fg: string
  }

  cursor: string
  gutter: string

  border: string

  primary: string
  primaryContent: string
  accent: string

  keyword: string
  variables: string
  string: string

  const: string
  macros: string
  punctuation: string
  comment: string
  class: string
  numeric: string
  regexp: string

  func?: {
    name?: string
    param?: string
  }

  success?: string
  info?: string
  warn?: string
  error?: string

  shadow?: string

  brackets?: {
    1?: string
    2?: string
    3?: string
  }
}
```

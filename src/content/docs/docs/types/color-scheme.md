---
title: ColorScheme
description: The ColorScheme type represents the colors of a theme.
---

```ts
export interface ColorScheme {
  editor: {
    bg: string
    fg: string
    cursor: string
    lineNumber?: string
  }

  ui: {
    bg: string
    fg: string
    border: string
    shadow?: string
  }

  primary: string
  primaryContent: string
  accent: string

  success?: string
  info?: string
  warn?: string
  error?: string
  misc?: string

  syntax: {
    keyword: string
    variables: string
    string: string

    punctuation: string
    numeric: string
    class: string

    const?: string
    comment?: string
    regexp?: string
    macros?: string

    func?: {
      name?: string
      param?: string
    }

    brackets?: {
      1?: string
      2?: string
      3?: string
    }
  }
}
```

:::info
The `ColorScheme` type is used to represent the colors of a theme. It uses just RGB colors in hexadecimal format.
:::

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| `editor` | [`EditorColors`](#editorcolors) | Editor related colors |
| `ui` | [`UiColors`](#uicolors) | User Interface related colors |
| `primary` | `string` | The primary color of the theme. |
| `primaryContent` | `string` | The color of the content that will be inside the primary color |
| `accent` | `string` | Color for details |
| `success` | `string?` | Success |
| `info` | `string?` | Information color |
| `warn` | `string?` | Warning color |
| `error` | `string?` | Error color |
| `misc` | `string?` | A miscellaneous color of the theme. |
| `syntax` | [`SyntaxColors`](#syntaxcolors) | Code syntax related colors |

### EditorColors

| Name | Type | Description |
| ---- | ---- | ----------- |
| `bg` | `string` | Background color |
| `fg` | `string` | Foreground color |
| `cursor` | `string` | Cursor color |
| `lineNumber` | `string?` | Line number color |

### UiColors

| Name | Type | Description |
| ---- | ---- | ----------- |
| `bg` | `string` | Background color |
| `fg` | `string` | Foreground color |
| `border` | `string` | Border color |
| `shadow` | `string?` | Shadow color |

### SyntaxColors

| Name | Type | Description |
| ---- | ---- | ----------- |
| `keyword` | `string` | Keyword color |
| `variables` | `string` | Variables color |
| `string` | `string` | String color |
| `punctuation` | `string` | Punctuation color |
| `numeric` | `string` | Numeric color |
| `class` | `string` | Class color |
| `const` | `string?` | Constant color |
| `comment` | `string?` | Comment color |
| `regexp` | `string?` | Regular expression color |
| `macros` | `string?` | Macros color |
| `func` | [`FunctionColors?`](#functioncolors) | Function related colors |
| `brackets` | [`BracketsColors?`](#bracketscolors) | Bracket related colors |

#### FunctionColors

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string?` | Function name color |
| `param` | `string?` | Function parameter color |

#### BracketsColors

| Name | Type | Description |
| ---- | ---- | ----------- |
| `1` | `string?` | First level bracket color |
| `2` | `string?` | Second level bracket color |
| `3` | `string?` | Third level bracket color |

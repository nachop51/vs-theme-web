---
title: FullTheme
description: The FullTheme interface represents the configuration needed to build a theme.
---

```ts
export interface FullTheme {
  type: 'dark' | 'light'
  syntax: Syntax
  editor: Editor
  ui: UserInterface
  common: Common
  git: Git
  terminal: Terminal
}
```

:::note
`FullTheme` is an interface that uses the `Color` type of the `chroma-js` library.
:::

### Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| `type` | `'dark' \| 'light'` | The type of the theme. |
| `syntax` | [Syntax](#syntax) | Syntax colors of the theme. |
| `editor` | [Editor](#editor) | Editor colors of the theme. |
| `ui` | [UserInterface](#userinterface) | User interface colors of the theme. |
| `common` | [Common](#common) | Common colors of the theme. |
| `git` | [Git](#git) | Git colors of the theme. |
| `terminal` | [Terminal](#terminal) | Terminal colors of the theme. |

### Example

```ts
import { Syntax, Editor, UserInterface, Git, Common, Terminal, FullTheme, ColorScheme } from 'vs-theme-builder';

const colors: ColorScheme = {
  editor: {
    bg: '#242936',
    fg: '#dcdfeb'
  },
  ui: {
    bg: '#1f2430',
    fg: '#6c739a'
  },

  cursor: '#ff00e4',
  gutter: '#495162',

  border: '#171b24',

  primary: '#aeaaff',
  primaryContent: '#fff',
  accent: '#6c51e2',

  // Misc colors
  success: '#99cc99',
  info: '#79b6ff',
  warn: '#e0b494',
  error: '#e04a7e',

  keyword: '#ad72f3',
  variables: '#ee6584',
  string: '#cae790',
  func: {
    name: '#79b9ee',
    param: '#e0bdf2'
  },

  const: '#f5dd87',
  macros: '#f29e74',
  punctuation: '#9899c5',
  comment: '#546e7a',
  class: '#ffcb6b',
  numeric: '#c9adff',
  regexp: '#95e6cb',

  shadow: '#00000050',

  brackets: {
    1: '#f3a84d',
    2: '#e68aff',
    3: '#49d9e8'
  }
}

const syntax: Syntax = {
  keyword: color(colors.keyword),

  func: {
    name: color(colors.func!.name!),
    param: color(colors.func!.param!)
  },

  class: {
    name: color(colors.class)
  },

  langs: {
    html: {
      tag: color(colors.punctuation),
      tagName: color(colors.variables),
      attributes: color(colors.macros).luminance(0.35).brighten(0.3)
    },
    css: {
      class: color(colors.class),
      id: color(colors.regexp),
      pseudo: color(colors.punctuation),
      properties: color(colors.func!.name!).brighten(0.75),
      units: color(colors.numeric)
    },
    markup: {
      heading: color(colors.primary),
      punctuation: color(colors.macros)
    }
  },

  punctuation: color(colors.punctuation),
  comment: color(colors.comment),
  string: color(colors.string),
  numeric: color(colors.numeric),
  operator: color(colors.info!),

  variables: color(colors.variables),
  constant: color(colors.const),
  macros: color(colors.macros),

  regexp: color(colors.regexp),
  special: color(colors.warn!),
  misc: color(colors.accent)
}

const editor: Editor = {
  bg: color(colors.editor.bg),
  fg: color(colors.editor.fg),
  cursor: color(colors.cursor),
  selection: {
    active: color(colors.accent).alpha(0.25),
    inactive: color(colors.accent).alpha(0.15)
  },
  findMatch: {
    active: color(colors.accent).brighten(0.5).alpha(0.5),
    inactive: color(colors.accent).alpha(0.25)
  },
  gutter: {
    active: color(colors.gutter),
    normal: color(colors.gutter).alpha(0.8)
  },
  indentGuide: {
    active: color(colors.primary).alpha(0.6),
    normal: color(colors.primary).alpha(0.1)
  }
}

const ui: UserInterface = {
  fg: color(colors.ui.fg),
  bg: color(colors.ui.bg),
  border: color(colors.border),
  borderActive: color(colors.primary),
  selection: {
    active: color(colors.accent).alpha(0.4),
    hover: color(colors.accent).alpha(0.1),
    normal: color(colors.accent).alpha(0.3)
  },
  panel: {
    bg: color(colors.editor.bg),
    shadow: color(colors.shadow!)
  }
}

const common: Common = {
  primary: color(colors.primary),
  primaryContent: color(colors.primaryContent),
  accent: color(colors.accent),
  info: color(colors.info!),
  warn: color(colors.warn!),
  success: color(colors.success!),
  error: color(colors.error!),
  brackets1: color(colors.brackets![1]!),
  brackets2: color(colors.brackets![2]!),
  brackets3: color(colors.brackets![3]!)
}

const git: Git = {
  added: color(colors.success!),
  modified: color(colors.info!).alpha(0.7),
  deleted: color(colors.error!).alpha(0.7),
  ignored: color(colors.ui.fg).alpha(0.5)
}

const terminal: Terminal = {
  ansiBlack: color('#3f4451'),
  ansiBrightBlack: color('#4f5666'),
  ansiBlue: color('#4aa5f0'),
  ansiBrightBlue: color('#4dc4ff'),
  ansiCyan: color('#42b3c2'),
  ansiBrightCyan: color('#4cd1e0'),
  ansiGreen: color('#8cc265'),
  ansiBrightGreen: color('#a5e075'),
  ansiRed: color('#e05561'),
  ansiBrightRed: color('#ff616e'),
  ansiMagenta: color('#c162de'),
  ansiBrightMagenta: color('#de73ff'),
  ansiYellow: color('#f0c758'),
  ansiBrightYellow: color('#ffec80'),
  ansiWhite: color('#d7dae0'),
  ansiBrightWhite: color('#e6e6e6'),
  background: color(colors.ui.bg),
  border: color(colors.border),
  foreground: color(colors.editor.fg).darken(0.3),
  selectionBackground: color(colors.accent).darken(0.5).alpha(0.6)
}

const theme: FullTheme = {
  type: 'dark',
  syntax,
  git,
  ui,
  terminal,
  common,
  editor
}
```

### Syntax

```ts
export interface Syntax {
  keyword: Color
  func: {
    name: Color
    param: Color
  }

  class: {
    name: Color
  }

  langs?: {
    html?: {
      tag?: Color
      tagName?: Color
      attributes?: Color
    }
    css?: {
      class?: Color
      id?: Color
      pseudo?: Color
      properties?: Color
      units?: Color
    }
    markup?: {
      heading?: Color
      punctuation?: Color
    }
  }

  punctuation: Color
  comment: Color
  string: Color
  numeric: Color
  operator: Color

  variables: Color
  constant: Color
  macros: Color

  regexp: Color
  special: Color
  misc: Color
}
```

### Editor

```ts
export interface Editor {
  bg: Color
  fg: Color
  cursor: Color
  selection: {
    active: Color
    inactive: Color
  }
  findMatch: {
    active: Color
    inactive: Color
  }
  gutter: {
    active: Color
    normal: Color
  }
  indentGuide: {
    active: Color
    normal: Color
  }
}
```

### UserInterface

```ts
export interface UserInterface {
  fg: Color
  bg: Color
  border: Color
  borderActive: Color
  selection: {
    active: Color
    hover: Color
    normal: Color
  }
  panel: {
    bg: Color
    shadow: Color
  }
}
```

### Common

```ts
export interface Common {
  primary: Color
  primaryContent: Color
  accent: Color
  info: Color
  warn: Color
  success: Color
  error: Color
  brackets1: Color
  brackets2: Color
  brackets3: Color
}
```

### Git

```ts
export interface Git {
  added: Color
  modified: Color
  deleted: Color
  ignored: Color
}
```

### Terminal

```ts
export interface Terminal {
  ansiBlack: Color
  ansiBrightBlack: Color
  ansiBlue: Color
  ansiBrightBlue: Color
  ansiCyan: Color
  ansiBrightCyan: Color
  ansiGreen: Color
  ansiBrightGreen: Color
  ansiRed: Color
  ansiBrightRed: Color
  ansiMagenta: Color
  ansiBrightMagenta: Color
  ansiYellow: Color
  ansiBrightYellow: Color
  ansiWhite: Color
  ansiBrightWhite: Color
  background: Color
  border: Color
  foreground: Color
  selectionBackground: Color
}
```

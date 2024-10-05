---
title: buildThemeFromScheme
description: Build a theme from a scheme configuration
---

The purpose of this function is to build a theme object, ready to be used in a theme file, from a scheme configuration.

```ts
buildThemeFromScheme(config: BuildThemeFromSchemeOptions): object
```

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `config` | [`BuildThemeFromSchemeOptions`](#buildthemefromschemeoptions) | The configuration object for the theme. |

### BuildThemeFromSchemeOptions

```ts
interface BuildThemeFromSchemeOptions {
  name: string
  scheme: FullTheme
  isBordered?: boolean
}
```

:::note
See the [FullTheme](/docs/types/full-theme) interface for more information.
:::

## Returns

An object representing the theme.
(The object is very large, so it is not practical to show it here.)

## Example

```js
import { buildThemeFromScheme, createSchemeFromColors, exampleTheme } from 'vs-theme-builder';

const name = 'My Theme';

const scheme = createSchemeFromColors({ colors: exampleTheme });

const theme = buildThemeFromScheme({
  scheme,
  name,
  isBordered: false
})
```

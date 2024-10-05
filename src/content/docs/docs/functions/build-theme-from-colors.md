---
title: buildThemeFromColors
description: Build a theme from a colors object
---

This function is a shorthand for creating a theme from a set of colors in a single step. It is useful if you are not willing to modify the scheme object directly.

```ts
buildThemeFromColors(config: BuildThemeFromColorsOptions): object
```

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `config` | [`BuildThemeFromColorsOptions`](#buildthemefromcolorsoptions) | The configuration object for the theme. |

### BuildThemeFromColorsOptions

```ts
interface BuildThemeFromColorsOptions {
  name: string
  colors: ColorScheme
  isBordered?: boolean
}
```

:::note
See the [ColorScheme](/docs/types/color-scheme) interface for more information.
:::

## Returns

An object representing the theme.
(The object is very large, so it is not practical to show it here.)

## Example

```js
import { buildThemeFromColors, exampleColors } from 'vs-theme-builder';

const name = 'My Theme';

const theme = buildThemeFromColors({
  name,
  colors: exampleColors,
  isBordered: false
})
```

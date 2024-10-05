---
title: createSchemeFromColors
description: Create a scheme configuration from a colors object
---

This function is designed to create a scheme object from a set of colors. You can use this function to further modify the scheme object before building a theme. By default, the scheme object is created with decisions that I considered to be the most appropriate, but you can change them as needed.

This scheme can then be used to build a theme.

```ts
createSchemeFromColors(config: CreateSchemeFromColorsOptions): FullTheme
```

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `config` | [`CreateSchemeFromColorsOptions`](#createschemefromcolorsoptions) | The configuration object for the scheme. |

## Returns

A scheme of colors that represents the theme.

### CreateSchemeFromColorsOptions

```ts
interface CreateSchemeFromColorsOptions {
  colors: ColorScheme
  type?: 'dark' | 'light'
}
```

:::note
See the [ColorScheme](/docs/types/color-scheme) type for more information.
:::

## Example

```js
import { createSchemeFromColors, exampleColors } from 'vs-theme-builder';

const scheme = createSchemeFromColors({
  colors: exampleColors,
  type: 'dark'
})
```

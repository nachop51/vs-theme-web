---
title: createSchemeFromColors
description: Create a scheme configuration from a colors object
---

This function is designed to create a scheme object from a set of colors. This scheme can then be used to build a theme.

```ts
createSchemeFromColors(config: createSchemeFromColorsProps): FullTheme
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| `config` | [`createSchemeFromColorsProps`](#createschemefromcolorsprops) | The configuration object for the scheme. |

### Returns

A scheme of colors that represents the theme.

#### createSchemeFromColorsProps

```ts
interface createSchemeFromColorsProps {
  colors: ColorScheme
  type?: 'dark' | 'light'
}
```

:::note
See the [ColorScheme](/docs/types/color-scheme) type for more information.
:::

### Example

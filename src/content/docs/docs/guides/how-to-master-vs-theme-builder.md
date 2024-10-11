---
title: How to master VS Theme Builder
description: Learn how to master VS Theme Builder and create your own custom themes.
---

There is a few approaches that you can take to use the package. It goes from the most basic usage to the most elaborated one, not necessarily increasing in difficulty, but rather in complexity.

## Build process

To understand these approaches, it is essential to understand the build process that the package goes through to generate a theme.

I like to think of the build process as a three-step process, each step represents a different level of abstraction.

### 1. ColorScheme

The first step is to define the colors that will be used in the theme. These colors are defined in a [`ColorScheme`](/docs/types/color-scheme) object. This object contains the colors for the editor, UI, primary, accent, and syntax.

This is the most abstract representation of the theme, because it only contains a few colors that you would like to use in the theme.

:::note
Refer to the [ColorScheme](/docs/types/color-scheme) type.
:::

### 2. FullTheme (Theme Schema)

After defining the colors, the next step is to build a [`FullTheme`](/docs/types/full-theme) object.

This object represents the theme itself in a less abstract way, but still lacks from the final structure that the theme will have.

The purpose of this object is to define a more detailed structure of the theme based on the colors defined in the `ColorScheme` object. The package achieves this by using the `chroma.js` library, basically is a magic library that lets you manipulate colors in a very easy way. Using that, the package generates different shades of the colors or even new colors based on the ones defined in the `ColorScheme` object.

So, instead of having just 20 something colors, you will have something like a hundred colors, each one representing a specific part of vscode, like the editor, ui, syntax, terminal, git, etc.

This level of abstraction is useful to modify more specific parts of the theme without having to deal with the entire structure.

:::note
Refer to the [FullTheme](/docs/types/full-theme) type.
:::

### 3. Theme

Lastly, the final step is to use the `FullTheme` object to generate the final object that will represent the theme itself, but this time in its most detailed form.

This object is the one that you will use in the theme file that will be used in Visual Studio Code.

:::note
[Here you have an example of this object](https://github.com/nachop51/nachop-theme/blob/main/themes/nachop-dark.json)
:::

## Approaches

With all of this new knowledge, let's see how you can use the package in different ways.

### Most basic usage

The most common way to use the package is by using the function [`buildThemeFromColors`](/docs/functions/build-theme-from-colors) which takes a [`ColorScheme`](/docs/types/color-scheme) object and returns the final representation of the theme.

```js title=main.js
import { buildThemeFromColors } from 'vs-theme-builder';

/**
 * @type {import('vs-theme-builder').ColorScheme}
 */
const draculaColors = {
  editor: {
    bg: '#282a36',
    fg: '#f8f8f2',
    cursor: '#f474bd',
    lineNumber: '#6272a4',
  },

  ui: {
    bg: '#21222c',
    fg: '#f8f8f2',
    border: '#191a21',
  },

  primary: '#f474bd',
  primaryContent: '#282a36',
  accent: '#50fa7b',

  syntax: {
    comment: '#6272a4',
    keyword: '#f474bd',
    numeric: '#bd93f9',
    const: '#bd93f9',

    variables: '#f8f8f2',
    func: {
      name: '#50fa7b',
      param: '#ffb86c',
    },

    punctuation: '#f8f8f2',

    class: '#8be9fd',
    string: '#f1fa8c',
  },
};

const draculaTheme = buildThemeFromColors(draculaColors);
```

You can use this object in your theme file and you are good to go, but if you want to have more control over the theme, you can use the other functions that the package provides.

### Advanced usage

If you want to have more control over the theme, you can use the `createSchemeFromColors` function to generate a `FullTheme` object.

```js title=main.js
import { createSchemeFromColors } from 'vs-theme-builder';

const scheme = createSchemeFromColors({ colors: draculaColors });
```

This object will allow you to tweak the sections of the theme in a more detailed way, before generating the final theme object.

Then you can use this object to generate the final theme object.

```js title=main.js
import { buildThemeFromScheme } from 'vs-theme-builder';

const draculaTheme = buildThemeFromScheme({
  scheme,
  name: 'Dracula Theme',
});
```

This object is the one that you will use in your theme file.

### Most complex usage

You can use any of the two previous approaches to generate the `theme representation` object. After that, you can tweak that object in any way you want, it will be like creating the theme in a normal way, but using the package to generate the theme object to get a good starting point.

```js title=main.js
import { buildThemeFromScheme } from 'vs-theme-builder';

const draculaTheme = buildThemeFromScheme({
  scheme,
  name: 'Dracula Theme',
  isBordered: false,
});

draculaTheme.semanticTokenColors["parameter.label"] = "#ff79c6";
```

or instead of modifying the object directly there, save it to a file and modify it there.

```js title=main.js
import { writeFileSync } from 'fs';

writeFileSync('dracula-theme.json', JSON.stringify(draculaTheme));
```

## Conclusion

The package provides a lot of flexibility to create themes, you can use it in a very basic way or in a more complex way, depending on your needs. The most important thing is to understand the build process and the different levels of abstraction that the package provides, so you can use it in the best way possible.

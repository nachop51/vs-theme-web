---
title: How Nachop Theme is built
description: Learn how the Nachop theme is built using VS Theme Builder.
---

Nachop Theme is built using VS Theme Builder. It has a really simple build process.

Let's make a list to make it easier to understand:

- 1\. **Define the color scheme.**
- 2\. **Build a schema that represent the theme using the color scheme.**
- 3\. **Build the theme using the theme-schema.**
- 4\. **Save the theme to a file, and configure the package.json file.**
- 5\. **Deploy the theme to a VS Code extension.**

## Color Scheme

First of all, we need to define the color scheme. Here is the color scheme used in the Nachop theme:

```ts
const colors: ColorScheme = {
  editor: {
    bg: '#242936',
    fg: '#dcdfeb',
    cursor: '#ff00e4',
    lineNumber: '#495162'
  },
  ui: {
    bg: '#1f2430',
    fg: '#6c739a',
    border: '#171b24'
  },

  primary: '#6c51e2',
  primaryContent: '#fff',
  accent: '#aeaaff',

  syntax: {
    keyword: '#9e5bff',
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
    regexp: '#95e6cb'
  }
}
```

## Theme Schema

Next, we need to build a schema that represents the theme using the color scheme. Here is the theme schema used in the Nachop theme:

```ts
const scheme = createSchemeFromColors({ colors });
```

## Build Theme

Now that we have the scheme object that represents the theme, we can build the theme using the function `buildThemeFromScheme`.

```ts
const theme = buildThemeFromScheme({
  scheme,
  name: 'Nachop Theme',
  isBordered: false
});
```

## Save Theme

To save the theme to a file, let's do something like this:

```ts
fs.writeFileSync('nachop-theme.json', JSON.stringify(theme));
```

And finally, let's set up the package.json file to include the theme file:

```json title=package.json {3-11}
{
  ...
  "contributes": {
    "themes": [
      {
        "label": "Nachop Theme",
        "uiTheme": "vs-dark",
        "path": "./nachop-theme.json"
      }
    ]
  }
  ...
}
```

## Deploy Theme

To deploy the theme to a VS Code extension, I use the `vsce` package. And I simply run the following command:

```sh
npm run package
```

and then

```sh
npm run publish
```

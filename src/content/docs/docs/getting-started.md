---
title: Getting Started
description: Get started with VS Theme Builder
---

VS Theme Builder is a tool that allows you to create and customize your own Visual Studio Code theme.

It uses chroma.js to generate color schemes from a base color. You can use the generated color schemes to create your own themes.

## Quick Start

### Create a blank project (optional)

Create a new node project with the following command:

```sh title=bash
npm init -y
```

This will create a `package.json` file in your project directory.

Your project directory should look like this:

```plaintext
vs-theme-dir/
├── package.json
```

### Install VS Theme Builder

Install the VS Theme Builder package with the following command:

```sh title=bash
npm install vs-theme-builder
```

Now you can start using VS Theme Builder in your project.

For example, you can create a new file called `main.js` and start building your theme.

```js title=main.js
import { buildThemeFromScheme } from 'vs-theme-builder';

const theme = buildThemeFromScheme({
  // Your scheme configuration here
});
```

### Build a theme using the example scheme

You can explore the example that comes with the package to see how to use it.

```js title=main.js
import { buildThemeFromScheme, createSchemeFromColors, exampleTheme } from 'vs-theme-builder';

const name = 'My Theme';

const scheme = createSchemeFromColors({ colors: exampleTheme });

const theme = buildThemeFromScheme({
  scheme,
  name,
  isBordered: false
})
```

And now you can dump the theme to a file:

```js title=main.js

import fs from 'node:fs'

fs.writeFileSync(filePath(name, true), JSON.stringify(theme))
```

And just like that, you have created a **full theme** using the example scheme.

### Test locally your theme and it deploy your theme to VSCode Marketplace

You can find more information about how to test your theme locally and deploy it to the VSCode Marketplace in the [official vscode documentation](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme).

---

And that's it! You have successfully created your own theme using VS Theme.

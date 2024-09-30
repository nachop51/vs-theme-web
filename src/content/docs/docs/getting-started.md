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

Like this:

```js title=main.js
import { buildThemeFromScheme } from 'vs-theme-builder';

const theme = buildThemeFromScheme({
  // Your scheme configuration here
});
```

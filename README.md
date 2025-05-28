# \:thumbsup: is-unicode-supported

[![github release](https://img.shields.io/github/v/release/flex-development/is-unicode-supported.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/is-unicode-supported/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/is-unicode-supported.svg)](https://npmjs.com/package/@flex-development/is-unicode-supported)
[![codecov](https://codecov.io/gh/flex-development/is-unicode-supported/graph/badge.svg?token=pyoNhzfzKR)](https://codecov.io/gh/flex-development/is-unicode-supported)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/is-unicode-supported.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

check whether [unicode][] is supported in the terminal and browser

## Contents

- [What is this?](#what-is-this)
  - [Features](#features)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`isUnicodeSupported()`](#isunicodesupported)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This is a small, but useful, library for detecting [unicode][] support in the terminal and browser consoles.

### Features

- browser friendly
- no dependencies
- [typescript][] support

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/is-unicode-supported
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { isUnicodeSupported } from 'https://esm.sh/@flex-development/is-unicode-supported'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { isUnicodeSupported } from 'https://esm.sh/@flex-development/is-unicode-supported'
</script>
```

## Use

```ts
import isUnicodeSupported from '@flex-development/is-unicode-supported'

console.log(isUnicodeSupported())
```

## API

This package exports the identifier [`isUnicodeSupported`](#isunicodesupported).

The default export is also `isUnicodeSupported`.

### `isUnicodeSupported()`

Check if [Unicode][] is supported.

This can be useful to decide whether to use Unicode characters or fallback ASCII characters.

> 👉 **Note**: The function assumes all non-Windows terminals support Unicode and checks which Windows terminals have
> unicode support against a hardcoded list.

#### Returns

(`boolean`) `true` if unicode is supported, `false` otherwise

## Types

This package is fully typed with [TypeScript][].

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[unicode]: https://home.unicode.org

[yarn]: https://yarnpkg.com

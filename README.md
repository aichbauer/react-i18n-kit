# react-i18n-kit

[![npm](https://img.shields.io/npm/v/react-i18n-kit.svg?style=flat-square)](https://www.npmjs.com/package/react-i18n-kit)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-i18n-kit.svg?style=flat-square)
[![Travis branch](https://img.shields.io/travis/com/aichbauer/react-i18n-kit/master.svg?style=flat-square)](https://travis-ci.com/aichbauer/react-i18n-kit)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/react-i18n-kit/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/react-i18n-kit)
[![docz](https://img.shields.io/badge/docs%20with-docz-1F2D3D.svg?style=flat-square)](https://aichbauer.github.io/react-i18n-kit)

> I18n for your React Components

## Table of Contents

* [Documentation](https://aichbauer.github.io/react-i18n-kit)
* [Why?](#why)
* [Installation](#installation)
* [Functions](#functions)
  * [withI18n](#withi18n)
    * [Basic Usage](#basic-usage)
    * [Options](#options)
* [License](#license)

## Why?

I needed a simple way to translate my react applications without to much overhead.

## Installation

```sh
$ npm i react-i18n-kit -S
```

or

```sh
$ yarn add react-i18n-kit
```

## Functions

For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-i18n-kit).

### withI18n

This is the enhancer for your Components. If you wrap your Components in this function you get access to a `i18n` and a `translate` property.

#### Syntax

Returns a component which renders the wrapped `Component`.

```js
const i18n = withI18n(Component, data, options);
```

#### Parameters

Parameter | Type | Required | Default | Description
---|---|---|---|---
Component| `Component` | true | | The component that gets rendered
data | `object` | true | | The translations for your `Component`
options | `object` | false | | The options for your translations

##### Component

An example for the `Component` parameter.

This component gets access to 2 exposed properties.

Property| Type | Description
---|---|---
i18n| `object` | The committed `data` object, but only for the corresponding language
translate | `func` | The function for the dynamic translation (e.g. on a button click)

```jsx
const Text = (props) => (
  <div>
    <button onClick={() => props.translate('en')}>
      English
    <button/>
    <button onClick={() => props.translate('de')}>
      Deutsch
    <button/>
    {props.i18n.text}
  </div>
);
```

##### data

An example for the `data` parameter.

```js
const data = {
  de: {
    text: 'Hallo Welt!',
  },
  en: {
    text: 'Hello World!',
  },
};
```

##### options

> If there is no translation for a language it will take the `fallback` which is default to `en`

An example for the `options` parameter.

```js
const options = {
  lang: 'de',
  fallback: 'de',
};
```

## Basic Usage

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-i18n-kit)

Render a text based on the users browser language. If your browsers language is set to `de` it will render `Hallo Welt!` and if the browsers language is set to `en` it will render `Hello World!`.

```jsx
import React from 'react';
import { withI18n } from 'react-i18n-kit';

const data = {
  de: {
    text: 'Hallo Welt!',
  },
  en: {
    text: 'Hello World!',
  },
};

/*
  if language is:
    - en:
      props.i18n.text: "Hello World!"
    - de:
      props.i18n.text: "Hallo Welt!"
*/
const Text = (props) => (
  <div>
    {props.i18n.text}
  </div>
);

const TextI18n = withI18n(Text, data);

export { TextI18n as Text };
```

As you see you get access to a `i18n` property. To make that enhancer work properly we have to pass an object with with keys set to a [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code. Then the enhancer simply passes only the object with the corresponding language to the `i18n` property.

For example your browser language is set to `en-US`, `props.i18n` will be:

```json
{
  "text": "Hello World!"
}
```

You can pass everything you want into these objects, but every language object has to contain the same keys (in this example `text`), which you will use in your enhanced component.

#### Options

If you do not want to deside the language based on the browser language and you want to have a default value you can pass a options object.

If the user is visiting the page with a browser which has its language set to `zh` (chinese) it will automatically fallback to `en` since there is no translation for `zh` right now.

```jsx
import React from 'react';
import { withI18n } from 'react-i18n-kit';

const data = {
  de: {
    text: 'Hallo Welt!',
  },
  en: {
    text: 'Hello World!',
  },
};

const Text = (props) => (
  <div>
    {props.i18n.text}
  </div>
);

const TextI18n = withI18n(Text, data, { fallback: 'en' });

export { TextI18n as Text };
```

## License

MIT © Lukas Aichbauer

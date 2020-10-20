# pancake-components

A library of pancake-themed React components.

#### getting started

`npm install pancake-components`

#### usage

Import pancake components and use them in your react application.

```
import React, { Fragment } from 'react';
import { PancakeButton, PancakeHeader } from 'pancake-components/lib';

function MyComponent() {
  return (
    <Fragment>
      <PancakeHeader>
        This header will render some pancakes
      </PancakeHeader>
      <PancakeButton>
        This button has pancakes too
      </PancakeButton>
    </Fragment>
  )
}
```

##### PancakeHeader

This component renders a `<header>` with pancakes. It accepts an optional `textAlign` prop, which should be set to the desired [CSS text-align value](https://www.w3schools.com/cssref/pr_text_text-align.ASP)

Ex:

```
  <PancakeHeader textAlign="center">
    This text will be centered
  </PancakeHeader>
```

##### PancakeButton

This component renders a `<button>` with pancakes. It accepts an optional `variant` prop, which can be set to "light" or "dark".

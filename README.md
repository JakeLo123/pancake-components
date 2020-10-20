# pancake-components

A library of pancake-themed React components.

#### getting started

`npm install pancake-components`

#### usage

Import pancake components and use them in your react application.

```
import React, { Fragment } from 'react';
import { PancakeButton, PancakeHeader } from 'pancake-components';

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

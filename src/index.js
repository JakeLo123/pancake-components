import React from 'react';
import { css } from '@emotion/core';
import ReactDOM from 'react-dom';

import PancakeHeader from './components/PancakeHeader.component';
import PancakeButton from './components/PancakeButton.component';

function App() {
  return (
    <div>
      <PancakeHeader textAlign="center">
        This is a header with pancakes in it
      </PancakeHeader>
      <PancakeButton variant="dark">Press for pancakes</PancakeButton>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

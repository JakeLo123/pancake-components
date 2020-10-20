/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function PancakeButton({ children, variant = 'light', ...props }) {
  return (
    <button {...props} css={getStyle(variant)}>
      🥞 {children} 🥞
    </button>
  );
}

const getStyle = variant => css`
  background-color: ${variant === 'light' ? 'white' : 'black'};
  border: 1px solid black;
  border-radius: 2rem;
  color: ${variant === 'light' ? 'black' : 'white'};
  cursor: pointer;
  padding: 1.5rem;
`;

export default PancakeButton;

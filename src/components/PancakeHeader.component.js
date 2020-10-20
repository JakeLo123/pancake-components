/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function PancakeHeader({ children, textAlign = 'left', ...props }) {
  return (
    <header {...props} css={getStyle(textAlign)}>
      🥞 {children} 🥞
    </header>
  );
}

const getStyle = textAlign => css`
  background-color: rgba(0, 195, 255, 0.2);
  padding: 1.5rem;
  text-align: ${textAlign};
`;

export default PancakeHeader;

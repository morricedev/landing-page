import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    max-width: 58rem;
    margin: 0 auto;
    overflow-wrap: break-word;
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;

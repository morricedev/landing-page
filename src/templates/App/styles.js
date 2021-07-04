import styled, { css } from 'styled-components';

/* ${(props) => css`
    background: ${props.background};
  `} */
// background: ${(props) => props.background};

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

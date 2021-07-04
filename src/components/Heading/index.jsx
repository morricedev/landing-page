import * as Styled from './styles';

export function Heading({ children, light = false }) {
  return <Styled.Title light={light}>{children}</Styled.Title>;
}

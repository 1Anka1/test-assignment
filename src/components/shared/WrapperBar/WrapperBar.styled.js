import styled from 'styled-components';

export const WrapperBar = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radius.round};
  padding: ${(p) => p.theme.space[3]}px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
`;

export const Title = styled.h2`
  margin-bottom: ${(p) => p.theme.space[2]}px;
  font-size: ${(p) => p.theme.fontSizes.ml}px;
  font-weight: ${(p) => p.theme.fontWeights.normal}px;
`;

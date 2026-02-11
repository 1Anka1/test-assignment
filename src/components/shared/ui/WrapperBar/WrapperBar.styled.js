import styled from 'styled-components';

export const WrapperBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radius.round};
  padding: ${(p) => p.theme.space[3]}px;
  font-size: ${(p) => p.theme.fontSizes.s}px;

  @media (max-width: 1024px) {
    padding: ${(p) => p.theme.space[2]}px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${(p) => p.theme.space[2]}px;
  font-size: ${(p) => p.theme.fontSizes.ml}px;
`;

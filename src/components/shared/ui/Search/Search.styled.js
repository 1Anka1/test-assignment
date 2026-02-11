import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 450px;
  padding: ${(p) => p.theme.space[3]}px;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.background};
  border: none;
  border-radius: ${(p) => p.theme.radius.round};

  &:focus {
    outline: none;
    color: ${(p) => p.theme.colors.light};
    background-color: ${(p) => p.theme.colors.avatarBg};
    transition:
      color 0.3s ${(p) => p.theme.cubic.timingFunction},
      background-color 0.3s ${(p) => p.theme.cubic.timingFunction};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

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
    color: var(--light-color);
    background-color: var(--avatar-bg);
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

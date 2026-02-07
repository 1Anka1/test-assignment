import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

export const HeaderTitle = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.l}px;
  font-weight: ${(p) => p.theme.fontWeights.light};
  letter-spacing: 2px;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
`;

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
`;

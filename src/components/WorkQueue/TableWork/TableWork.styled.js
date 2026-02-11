import styled from 'styled-components';

export const Actions = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]}px;
  margin-bottom: ${(p) => p.theme.space[3]}px;
  flex-wrap: wrap;

  @media (max-width: 520px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SortButton = styled.button`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  padding: 8px 18px;
  border-radius: ${(p) => p.theme.radius.round};
  border: 1px solid ${(p) => p.theme.colors.border};
  white-space: nowrap;
  flex-shrink: 0;

  background-color: ${(p) =>
    p.$active ? p.theme.colors.accentBlue : p.theme.colors.accentBlack};

  color: ${(p) =>
    p.$active ? p.theme.colors.light : p.theme.colors.secondary};

  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.light};
    background-color: ${(p) => p.theme.colors.accentBlue};
  }
`;

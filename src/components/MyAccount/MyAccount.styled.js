import styled from 'styled-components';

export const ActionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.space[2]}px;
  margin-bottom: ${(p) => p.theme.space[3]}px;
`;

export const SearchInput = styled.input`
  width: 400px;
  padding: ${(p) => p.theme.space[2]}px;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.tableColor};
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ActionBtn = styled.button`
  width: 100px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  border: 2px solid ${(p) => p.theme.colors.accentBlue};
  border-radius: ${(p) => p.theme.radius.round};
  color: ${(p) => p.theme.colors.accentBlue};
  background-color: ${(p) => p.theme.colors.background};

  &:last-child {
    color: ${(p) => p.theme.colors.light};
    background-color: ${(p) => p.theme.colors.accentBlue};
  }

  &:hover {
    border: none;
    color: ${(p) => p.theme.colors.light};
    background-color: ${(p) => p.theme.colors.accentBlack};
    transition:
      color 0.3s ${(p) => p.theme.cubic.timingFunction},
      background-color 0.3s ${(p) => p.theme.cubic.timingFunction};
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const EmptyState = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  min-height: 200px;
`;

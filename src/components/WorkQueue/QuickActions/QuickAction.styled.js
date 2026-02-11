import styled from 'styled-components';

export const QuickBtn = styled.button`
  width: 250px;
  padding: 13px 20px;
  color: ${(p) => p.theme.colors.light};
  background-color: ${(p) => p.theme.colors.accentBlue};
  border-radius: ${(p) => p.theme.radius.round};
  border: none;

  &:hover {
    color: ${(p) => p.theme.colors.accentBlue};
    background-color: ${(p) => p.theme.colors.accentBlack};
  }
`;

export const QuickActionslist = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.space[2]}px;
`;

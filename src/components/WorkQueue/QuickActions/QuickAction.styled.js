import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const QuickBtn = styled.button`
  width: 250px;
  padding: 10px 20px;
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
  gap: ${(p) => p.theme.space[2]}px;
`;

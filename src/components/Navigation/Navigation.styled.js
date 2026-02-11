import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  padding: 20px 0;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${(p) => p.theme.space[3]}px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: ${(p) => p.theme.space[2]}px;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinkItems = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[2]}px;
  padding: 10px 20px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.round};
  background-color: ${(p) => p.theme.colors.accentBlack};
  color: ${(p) => p.theme.colors.secondary};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  text-decoration: none;
  cursor: pointer;

  & > svg {
    color: ${(p) => p.theme.colors.accentBlue};
  }

  &.active {
    color: ${(p) => p.theme.colors.light};
    background-color: ${(p) => p.theme.colors.accentBlue};

    & > svg {
      color: ${(p) => p.theme.colors.light};
    }
  }

  @media (max-width: 1024px) {
    padding: 8px 14px;
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
`;

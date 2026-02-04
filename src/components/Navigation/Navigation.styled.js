import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  padding: 20px 0;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  white-space: nowrap;
  background-color: var(--accent-black-color);
  color: ${(props) => props.iconColor || 'var(--accent-blue-color)'};
  transition:
    background-color 0.2s var(--timing-function),
    color 0.2s var(--timing-function);

  &:hover {
    background-color: var(--accent-blue-color);
    color: ${(props) => props.hoverColor || 'white'};
  }

  &.active {
    background-color: ${(props) =>
      props.activeBgColor || 'var(--accent-blue-color)'};
    color: ${(props) => props.activeColor || 'white'};
  }

  & > svg {
    color: inherit;
    transition: color 0.2s var(--timing-function);
  }
`;

export const NavLinkItems = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  color: var(--light-color);
  text-decoration: none;
  cursor: pointer;

  transition:
    color 0.2s,
    background-color 0.2s;
`;

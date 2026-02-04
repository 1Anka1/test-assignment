import { NavLink } from 'react-router-dom';
import navigation from '../../data/navigations.json';
import * as SC from './Navigation.styled';
import { CiHome, CiUser } from 'react-icons/ci';

export const Navigation = () => {
  return (
    <SC.NavBar>
      <SC.NavList>
        {navigation.map(({ id, href, title }) => (
          <SC.NavListItem
            key={id}
            iconColor="var(--accent-blue-color)"
            hoverColor="white"
          >
            <CiHome size={25} />
            <SC.NavLinkItems to={href}>{title}</SC.NavLinkItems>
          </SC.NavListItem>
        ))}
      </SC.NavList>
    </SC.NavBar>
  );
};

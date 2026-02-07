import * as SC from './Navigation.styled';
import { Icons } from '../../helpers/utils/navigations';

export const Navigation = () => {
  return (
    <SC.NavBar>
      <SC.NavList>
        {Icons.map(({ id, href, title, icon }) => (
          <SC.NavListItem key={id}>
            <SC.NavLinkItems to={href}>
              {icon}
              {title}
            </SC.NavLinkItems>
          </SC.NavListItem>
        ))}
      </SC.NavList>
    </SC.NavBar>
  );
};

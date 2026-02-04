import { FaRegUserCircle } from 'react-icons/fa';
import { Navigation } from '../Navigation/Navigation';
import { Container, Section } from '../shared/Layout/Layout.styled';
import * as SC from './Header.styled';
import { BiSearch } from 'react-icons/bi';
import { RiUser3Line } from 'react-icons/ri';

export const Header = () => {
  const userName = 'Anna';
  const tasks = 12;

  return (
    <header>
      <Container>
        <SC.HeaderContent>
          <SC.HeaderTitle>
            Hi, {userName}, welcome! You have {tasks} open tasks.
          </SC.HeaderTitle>

          <SC.SearchWrapper>
            <SC.SearchInput type="text" placeholder="Search" />
            <SC.Avatar>AR</SC.Avatar>
          </SC.SearchWrapper>
        </SC.HeaderContent>

        <Navigation />
      </Container>
    </header>
  );
};

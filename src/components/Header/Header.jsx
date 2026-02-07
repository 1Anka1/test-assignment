import { Navigation } from '../Navigation/Navigation';
import { Container } from '../shared/Layout/Layout.styled';
import * as SC from './Header.styled';
import { Avatar } from '../shared/ui/Avatar/Avatar';

export const Header = () => {
  const userName = 'Artur';
  const lastName = 'Russel';
  const tasks = 12;

  return (
    <header>
      <Container>
        <SC.HeaderContent>
          <SC.HeaderTitle>
            Hi {userName}, welcome! You have {tasks} open tasks.
          </SC.HeaderTitle>

          <SC.SearchWrapper>
            <SC.SearchInput type="text" placeholder="Search" />
            <Avatar name={`${userName} ${lastName}`} />
          </SC.SearchWrapper>
        </SC.HeaderContent>

        <Navigation />
      </Container>
    </header>
  );
};

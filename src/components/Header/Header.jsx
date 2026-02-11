import { Navigation } from '../Navigation/Navigation';
import { Container } from '../shared/Layout/Layout.styled';
import * as SC from './Header.styled';
import { Avatar } from '../shared/ui/Avatar/Avatar';
import { Search } from '../shared/ui/Search/Search';

export const Header = () => {
  const userName = 'Artur';
  const lastName = 'Russel';
  const tasks = 6;

  return (
    <header>
      <Container>
        <SC.HeaderContent>
          <SC.HeaderTitle>
            Hi {userName}, welcome! You have {tasks} open tasks.
          </SC.HeaderTitle>

          <SC.SearchWrapper>
            <Search />
            <Avatar name={`${userName} ${lastName}`} />
          </SC.SearchWrapper>
        </SC.HeaderContent>

        <Navigation />
      </Container>
    </header>
  );
};

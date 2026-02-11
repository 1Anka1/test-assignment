import { MyAccount } from '../../components/MyAccount/MyAccount';
import {
  Container,
  Section,
} from '../../components/shared/Layout/Layout.styled';
import { WorkQueue } from '../../components/WorkQueue/WorkQueue';

export const Dashboard = () => {
  return (
    <Section>
      <Container>
        <WorkQueue />
        <MyAccount />
      </Container>
    </Section>
  );
};

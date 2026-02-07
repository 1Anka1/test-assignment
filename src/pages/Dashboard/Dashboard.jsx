import {
  Container,
  Section,
} from '../../components/shared/Layout/Layout.styled';
import { WorkQueue } from '../../components/WorkQueue/WorkQueue';

export const Dashboard = () => {
  return (
    <Section>
      <Container>
        <div>
          <WorkQueue />
        </div>
      </Container>
    </Section>
  );
};

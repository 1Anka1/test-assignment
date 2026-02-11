import { getClients } from '../../api/clients-api';
import { MyAccount } from '../../components/MyAccount/MyAccount';
import {
  Container,
  Section,
} from '../../components/shared/Layout/Layout.styled';
import { Loader } from '../../components/shared/ui/Loader/Loader';
import { WorkQueue } from '../../components/WorkQueue/WorkQueue';
import { DataContext } from '../../helpers/utils/useContext/useDataContex';
import useDataAPI from '../../hooks/UseDataAPI';

export const Dashboard = () => {
  const { data, isLoading } = useDataAPI(getClients);
  if (isLoading) return <Loader />;

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      <Section>
        <Container>
          <WorkQueue />
          <MyAccount />
        </Container>
      </Section>
    </DataContext.Provider>
  );
};

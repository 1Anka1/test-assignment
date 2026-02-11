import { Section } from '../shared/Layout/Layout.styled';
import { MarketIntel } from './MarketIntel/MarketIntel';
import { Portfolio } from './Portfolio/Portfolio';
import { QuickAction } from './QuickActions/QuickAction';
import { TableWork } from './TableWork/TableWork';
import * as SC from './WorkQueue.styled';

export const WorkQueue = () => {
  return (
    <Section>
      <SC.WorkWrapper>
        <SC.TableArea>
          <TableWork />
        </SC.TableArea>

        <SC.PortfolioArea>
          <Portfolio />
        </SC.PortfolioArea>

        <SC.ContentArea>
          <QuickAction />
          <MarketIntel />
        </SC.ContentArea>
      </SC.WorkWrapper>
    </Section>
  );
};

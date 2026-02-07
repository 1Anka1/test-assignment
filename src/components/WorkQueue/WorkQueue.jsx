import { MarketIntel } from './MarketIntel/MarketIntel';
import { Portfolio } from './Portfolio/Portfolio';
import { QuickAction } from './QuickActions/QuickAction';
import { TableWork } from './TableWork/TableWork';
import * as SC from './WorkQueue.styled';

export const WorkQueue = () => {
  return (
    <SC.WorkWrapper>
      <TableWork />
      <Portfolio />

      <SC.ContentWrapper>
        <QuickAction />
        <MarketIntel />
      </SC.ContentWrapper>
    </SC.WorkWrapper>
  );
};

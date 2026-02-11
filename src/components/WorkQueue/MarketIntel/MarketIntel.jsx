import { WrapperBar } from '../../shared/ui/WrapperBar/WrapperBar';
import * as SC from './MarketIntel.styled';
export const MarketIntel = () => {
  return (
    <WrapperBar title={'Market intelligence'}>
      <SC.Wrapper>
        <SC.DescriptionWrapper>
          <SC.SpanPoint></SC.SpanPoint>
          <p>Rate hardening in Cyber market - +15% YoY</p>
        </SC.DescriptionWrapper>
        <SC.DescriptionWrapper>
          <SC.SpanPoint></SC.SpanPoint>
          <p>New capacity entering Marine market</p>
        </SC.DescriptionWrapper>
        <SC.DescriptionWrapper>
          <SC.SpanPoint></SC.SpanPoint>
          <p>Environmental regulatory changes in CA</p>
        </SC.DescriptionWrapper>
      </SC.Wrapper>
    </WrapperBar>
  );
};

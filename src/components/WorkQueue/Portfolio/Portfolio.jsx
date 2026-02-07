import { WrapperBar } from '../../shared/WrapperBar/WrapperBar';
import { BusinessTarget } from './BusinessTarget/BusinessTarget';
import { LossTarget } from './LossTarget/LossTarget';
import * as SC from './Portfolio.styled';
import { RetentionTarget } from './Retention/Retention';

export const Portfolio = () => {
  return (
    <WrapperBar title={'Portfolio goals'}>
      <SC.Wrapper>
        <LossTarget />
        <RetentionTarget />
        <BusinessTarget title={'NEW BUSINESS TARGET'} />
      </SC.Wrapper>
    </WrapperBar>
  );
};

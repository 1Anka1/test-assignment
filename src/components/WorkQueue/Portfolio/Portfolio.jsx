import { BusinessTarget } from './BusinessTarget/BusinessTarget';
import { businessCharts, portfolioCharts } from './config.js/config';
import { PortfolioTargetChart } from './PortfolioTargetChart/PortfolioTargetChart';
import * as SC from './Portfolio.styled';
import { WrapperBar } from '../../shared/ui/WrapperBar/WrapperBar';

export const Portfolio = () => {
  return (
    <WrapperBar title="Portfolio goals">
      <SC.Wrapper>
        {portfolioCharts.map((chart) => (
          <PortfolioTargetChart key={chart.id} {...chart} />
        ))}

        {businessCharts.map((chart) => (
          <BusinessTarget key={chart.id} {...chart} />
        ))}
      </SC.Wrapper>
    </WrapperBar>
  );
};

import styled from 'styled-components';

export const WorkWrapper = styled.div`
  display: grid;
  gap: ${(p) => p.theme.space[3]}px;
  align-items: stretch;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'table table'
      'portfolio content';
  }

  @media (min-width: 1200px) {
    grid-template-columns: 4fr 300px 1fr;
    grid-template-areas: 'table portfolio content';
  }
`;

export const TableArea = styled.div`
  grid-area: table;
  height: 100%;
`;

export const PortfolioArea = styled.div`
  grid-area: portfolio;
  height: 100%;
`;

export const ContentArea = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[3]}px;
  height: 100%;
`;

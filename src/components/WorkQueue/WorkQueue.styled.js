import styled from 'styled-components';

export const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${(p) => p.theme.space[4]}px;

  & > :nth-child(1) {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  & > :nth-child(2) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  & > :nth-child(3) {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space[4]}px;
`;

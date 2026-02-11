import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${(p) => p.theme.space[3]}px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.l}px;
  font-weight: ${(p) => p.theme.fontWeights.light};
  letter-spacing: 2px;

  @media (max-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[3]}px;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: stretch;
  }
`;

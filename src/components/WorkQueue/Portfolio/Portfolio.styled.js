import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${(p) => p.theme.space[1]}px;
  border-radius: ${(p) => p.theme.radius.round};
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.ml};
  margin-bottom: ${(p) => p.theme.space[1]}px;
`;

export const Label = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs};
  color: ${(p) => p.theme.colors.secondary};
`;

export const ChartWrapper = styled.div`
  width: 100%;
  margin-bottom: ${(p) => p.theme.space[1]}px;
  display: flex;
`;

export const TargetValue = styled.span`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  padding-top: 15px;
`;

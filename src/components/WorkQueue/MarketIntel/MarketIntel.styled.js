import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(p) => p.theme.space[2]}px;
  gap: ${(p) => p.theme.space[2]}px;
`;

export const SpanPoint = styled.span`
  width: ${(p) => p.theme.space[2]}px;
  height: ${(p) => p.theme.space[2]}px;
  background-color: ${(p) => p.theme.colors.green};
  border-radius: ${(p) => p.theme.radius.round};
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: ${(p) => p.theme.space[2]}px;
  gap: ${(p) => p.theme.space[1]}px;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

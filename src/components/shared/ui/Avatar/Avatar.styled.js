import styled from 'styled-components';

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: ${(p) => p.theme.radius.round};
  background-color: ${(p) => p.theme.colors.avatarBg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.m}px;
`;

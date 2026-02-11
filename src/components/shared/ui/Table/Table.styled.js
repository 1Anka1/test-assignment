import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 720px;
  text-align: left;
  border-collapse: collapse;

  @media (max-width: 1024px) {
    min-width: 600px;
  }

  @media (max-width: 768px) {
    min-width: 400px;
  }
`;

export const Th = styled.th`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  color: ${(p) => p.theme.colors.secondary};
  padding: 8px 0;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxs}px;
    padding: 6px 0;
  }
`;

export const TrTitle = styled.tr`
  background-color: ${(p) => p.theme.colors.tableColor};
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${(p) => p.theme.colors.tableColor};
  }
`;

export const Td = styled.td`
  padding: 8px 16px 12px 0px;
  border-top: 1px solid ${(p) => p.theme.colors.border};
  white-space: nowrap;

  @media (max-width: 1024px) {
    padding: 6px 8px 6px 0px;
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }

  @media (max-width: 768px) {
    padding: 4px 4px 4px 0px;
    font-size: ${(p) => p.theme.fontSizes.xxs}px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.space[1]}px;
`;

export const ColorPoint = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${(p) => p.theme.radius.round};
  background-color: ${(p) => {
    console.log(p.$statusQueue);

    const colorMap = {
      New: p.theme.colors.blue,
      'Under review': p.theme.colors.blue,
      Completed: p.theme.colors.green,
      Active: p.theme.colors.green,
      'Pending Rewiew': p.theme.colors.yellow,
    };
    return colorMap[p.$statusQueue] || p.theme.colors.blue;
  }};
`;

export const TdWrapper = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[3]}px;
  align-items: center;
`;

export const Span = styled.span`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  color: ${(p) => p.theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxs}px;
  }
`;

export const LossRatio = styled.span`
  padding: ${(p) => p.theme.space[1]}px ${(p) => p.theme.space[2]}px;
  border-radius: ${(p) => p.theme.radius.round};
  color: ${(p) => p.theme.colors.light};
  background-color: ${(props) => {
    switch (props.color) {
      case 'green':
        return '#3cba7b';
      case 'yellow':
        return '#fcd060';
      case 'red':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  }};
  font-weight: 500;

  @media (max-width: 768px) {
    padding: ${(p) => p.theme.space[1]}px;
  }
`;

export const AppetiteRation = styled.div`
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  padding: ${(p) => p.theme.space[1]}px;
  border-radius: ${(p) => p.theme.radius.round};
  background-color: ${(p) => p.theme.colors.avatarBg};

  @media (max-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxs}px;
  }
`;

export const Triage = styled.div`
  text-align: center;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  border: 2px solid ${(p) => p.theme.colors.accentBlue};
  border-radius: ${(p) => p.theme.radius.round};
  color: ${(p) => p.theme.colors.accentBlue};

  @media (max-width: 768px) {
    border: 1px solid ${(p) => p.theme.colors.accentBlue};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(p) => p.theme.space[3]}px;
  align-items: center;
`;

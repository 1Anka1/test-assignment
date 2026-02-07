import styled from 'styled-components';

export const Actions = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]}px;
  margin-bottom: ${(p) => p.theme.space[3]}px;
`;

export const SortButton = styled.button`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  padding: 8px 18px;
  border-radius: ${(p) => p.theme.radius.round};
  border: 1px solid ${(p) => p.theme.colors.border};

  background-color: ${(p) =>
    p.$active ? p.theme.colors.accentBlue : p.theme.colors.accentBlack};
  color: ${(p) =>
    p.$active ? p.theme.colors.light : p.theme.colors.secondary};
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.light};
    background-color: ${(p) => p.theme.colors.accentBlue};
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
`;

export const Th = styled.th`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  color: ${(p) => p.theme.colors.secondary};
`;

export const Td = styled.td`
  padding-right: 20px;
  border-top: 1px solid ${(p) => p.theme.colors.border};
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
    switch (p.$status) {
      case 'New':
        return p.theme.colors.new;
      case 'Pending Rewiew':
        return p.theme.colors.pending;
      case 'Completed':
        return p.theme.colors.completed;
      default:
        return p.theme.colors.new;
    }
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
`;

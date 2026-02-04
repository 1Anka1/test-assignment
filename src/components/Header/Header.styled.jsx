import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 200;
  letter-spacing: 1px;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SearchInput = styled.input`
  width: 450px;
  padding: 15px;
  font-size: 16px;
  color: var(--text-color);
  background-color: var(--background-color);
  border: none;
  border-radius: 25px;

  &:focus {
    outline: none;
    color: var(--light-color);
    background-color: var(--avatar-bg);
  }
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: var(--avatar-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
`;

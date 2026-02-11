import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  padding: 0 16px;

  @media (max-width: 1024px) {
    padding: 0 12px;
  }
`;

export const Section = styled.section`
  padding-bottom: 30px;
`;

import styled from '@emotion/styled';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 20px;
  margin-top: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
`;

export const Heading = styled.h2`
  font-size: 72px;
  line-height: 80px;
`;

export const Description = styled.p`
  font-size: 30px;
  line-height: 38px;
  color: var(--grey);
`;

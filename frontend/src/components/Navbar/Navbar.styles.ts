import { Link } from 'react-router';
import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

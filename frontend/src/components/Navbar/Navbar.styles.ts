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

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: var(--black);
  }
`;

export const Login = styled(Link)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: var(--black);
    font-weight: 500;
  }
`;

export const Signup = styled(Link)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 12px;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    background-color: var(--green);
  }
`;

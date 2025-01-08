import { Link } from 'react-router';
import styled from '@emotion/styled';
import { ButtonPropTypes } from './Button.types';

export const StyledButton = styled.button<ButtonPropTypes>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  padding: 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: var(--green);
  color: var(--white);
  font-family: var(--font-primary);
  font-weight: 700;
  cursor: pointer;
`;

export const StyledLink = styled(Link)<ButtonPropTypes>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  padding: 16px;
  border-radius: 4px;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: var(--white);
    background-color: var(--green);
  }
`;

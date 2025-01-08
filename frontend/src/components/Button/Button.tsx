import { ButtonProps, Props } from './Button.types';
import { StyledButton, StyledLink } from './Button.styles';

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export const LinkButton = ({ children, to }: Props) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

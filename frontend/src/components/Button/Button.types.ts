import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  fullWidth?: boolean;
};

export type Props = {
  children: ReactNode;
  to: string;
};

export type ButtonPropTypes = {
  isLoading?: boolean;
  fullWidth?: boolean;
};

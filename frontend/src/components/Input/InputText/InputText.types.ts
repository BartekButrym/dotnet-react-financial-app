import { InputHTMLAttributes, ReactNode } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  endIcon?: ReactNode;
}

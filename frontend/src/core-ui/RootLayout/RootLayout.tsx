import { ReactNode } from 'react';
import { Container } from './RootLayout.styles';

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

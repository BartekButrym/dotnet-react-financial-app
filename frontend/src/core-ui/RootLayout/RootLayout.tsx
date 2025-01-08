import { Outlet } from 'react-router';
import { Container } from './RootLayout.styles';

export const RootLayout = () => (
  <Container>
    <Outlet />
  </Container>
);

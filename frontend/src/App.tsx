import { Outlet } from 'react-router';
import { RootLayout } from '@core-ui/RootLayout/RootLayout';
import { Navbar } from '@components/Navbar/Navbar';

function App() {
  return (
    <RootLayout>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </RootLayout>
  );
}

export default App;

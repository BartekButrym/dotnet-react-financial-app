import { LogoIcon } from '@assets/icons';
import { Header, Login, Logo, Signup } from './Navbar.styles';

export const Navbar = () => {
  return (
    <Header>
      <Logo to="/">
        <img src={LogoIcon} width={60} height={60} alt="Stock Wallet" />
        <h1>Stock Wallet</h1>
      </Logo>
      <div>
        <Login to="login">Login</Login>
        <Signup to="signup">Signup</Signup>
      </div>
    </Header>
  );
};

import { Link } from 'react-router';
import { LogoIcon } from '@assets/icons';
import { Image } from '@components/Image/Image';
import { LinkButton } from '@components/Button/Button';
import { Auth, Header, Logo } from './Navbar.styles';

export const Navbar = () => {
  return (
    <Header>
      <Logo to="/">
        <Image
          source={LogoIcon}
          width={60}
          height={60}
          altText="Stock Wallet"
        />
        <h1>Stock Wallet</h1>
      </Logo>
      <Auth>
        <Link to="login">Login</Link>
        <LinkButton to="signup">Signup</LinkButton>
      </Auth>
    </Header>
  );
};

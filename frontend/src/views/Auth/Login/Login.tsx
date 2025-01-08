import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '@hooks/useAuth';
import { useToggle } from '@hooks/useToggle';
import { LogoIcon } from '@assets/icons';
import { Button } from '@components/Button/Button';
import { Image } from '@components/Image/Image';
import { InputText } from '@components/Input/InputText/InputText';
import { PasswordVisibilityToggler } from '@components/PasswordVisibilityToggler/PasswordVisibilityToggler';
import {
  Container,
  CreateAccountLink,
  ImageContainer,
  Layout,
  StyledForm,
} from './Login.styles';

export const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'yomawej428@bnovel.com',
    password: 'Password1!',
  });
  const [isPasswordVisible, toggleIsPasswordVisible] = useToggle();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login('abcd1234');
    navigate('/dashboard/search');
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard/search');
  }, []);

  return (
    <Layout>
      <Container>
        <ImageContainer>
          <Image
            source={LogoIcon}
            width={60}
            height={60}
            altText="Stock Wallet"
          />
        </ImageContainer>
        <StyledForm onSubmit={onSubmit}>
          <InputText
            id="email"
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputText
            id="password"
            name="password"
            label="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={formData.password}
            onChange={handleInputChange}
            endIcon={
              <PasswordVisibilityToggler
                onToggle={toggleIsPasswordVisible}
                isPasswordVisible={isPasswordVisible}
              />
            }
          />
          <Button type="submit" fullWidth>
            Login
          </Button>
        </StyledForm>
        <CreateAccountLink>
          <Link to="/signup">Create an account</Link>
        </CreateAccountLink>
      </Container>
    </Layout>
  );
};

import { HeroImg } from '@assets/images';
import { Button } from '@components/Button/Button';
import { Image } from '@components/Image/Image';
import { Container, Description, Heading, Info } from './Hero.styles';

export const Hero = () => {
  return (
    <Container>
      <Info>
        <Heading>Financial data for every need</Heading>
        <Description>
          Search relevant financial data available on the market. You can get
          historical prices, fundamental data, insider transactions, and much
          more that goes back 30 years in history.
        </Description>
        <Button to="login">Get started</Button>
      </Info>
      <Image source={HeroImg} altText="Financial data for every need" />
    </Container>
  );
};

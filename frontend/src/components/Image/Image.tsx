import { Props } from './Image.types';
import { Img } from './Image.styles';

export const Image = ({ source, altText = '', width, height }: Props) => (
  <Img src={source} alt={altText} width={width} height={height} />
);

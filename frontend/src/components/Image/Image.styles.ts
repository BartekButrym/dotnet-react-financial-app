import styled from '@emotion/styled';

export const Img = styled.img`
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;

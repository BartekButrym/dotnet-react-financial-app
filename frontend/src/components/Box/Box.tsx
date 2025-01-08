import styled from '@emotion/styled';

type BoxProps = {
  position?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  height?: string;
  padding?: string;
  width?: string;
};

export const Box = styled.div<BoxProps>`
  ${({ position }) => position && `position: ${position}`};
  ${({ display }) => display && `display: ${display}`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ height }) => `height: ${height || 'initial'}`};
  ${({ width }) => `width: ${width || '100%'}`};
  ${({ padding }) => padding && `padding: ${padding}`};
`;

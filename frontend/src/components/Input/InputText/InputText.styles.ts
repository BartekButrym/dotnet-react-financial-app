import styled from '@emotion/styled';
import { Props } from './InputText.types';

export const StyledInput = styled.input<Props>`
  width: 100%;
  height: 56px;
  padding-left: 20px;
  border: ${({ error }) =>
    error ? `1px solid var(--red)` : `1px solid var(--black)`};
  border-radius: 4px;
  font-weight: 300;
  background-color: var(--lighter);

  &::placeholder {
    font-size: 18px;
    font-weight: 300;
    font-family: var(--font-primary);
    color: var(--grey);
  }

  &:focus {
    outline: ${({ error }) =>
      error ? `var(--red) solid 2px` : `var(--black) solid 2px`};
  }
`;

export const EndIconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
`;

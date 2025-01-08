import styled from '@emotion/styled';

export const VisibilityToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(50%);
  }
`;

import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20px);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const CreateAccountLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: var(--green);
  }
`;

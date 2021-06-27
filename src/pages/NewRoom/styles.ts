import styled from 'styled-components';

export const PageNewRoom = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;

  background: #835afd;
  color: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`;

export const MainContainer = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: left;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }
`

export const FormCreateNewRoom = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #FFFFFF;
    border: 1px solid #a8a8b3;
  }

  button {
    margin-top: 16px;
  }

  button, input {
    width: 100%;
  }
`
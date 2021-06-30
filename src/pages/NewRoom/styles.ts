import styled from 'styled-components';

export const PageNewRoom = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const MainContainer = styled.main`
  flex: 8;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: left;
    }

    h2 {
      font-size: 1.5rem;
      margin: 4rem 0 1.5rem;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.title};
    }

    p {
      font-size: 0.875rem;
      color: var(--gray-500);
      margin-top: 1rem;

      a {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`

export const FormCreateNewRoom = styled.form`
  input {
    height: 3.125rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background: var(--white);
    border: 1px solid var(--gray-400);
  }

  button {
    margin-top: 1rem;
  }

  button, input {
    width: 100%;
  }
`
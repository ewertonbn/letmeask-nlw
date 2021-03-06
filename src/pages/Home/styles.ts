import styled from 'styled-components';

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  .separator {
    font-size: 0.875rem;
    color: var(--gray-500);

    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--gray-300);
      margin-right: 1rem;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--gray-300);
      margin-left: 1rem;
    }
  }
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
    }

    p {
      font-size: 0.875rem;
      color: var(--gray-500);
      margin-top: 2rem;

      a {
        color: var(--pink-500);
      }
    }
  }
`
export const ButtonCreateRoom = styled.button`
  margin-top: 4rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: var(--red);
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const FormAuth = styled.form`
  input {
    height: 3.125rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background: ${props => props.theme.colors.inputPrimary};
    color: ${props => props.theme.colors.gray400};
    border: 1px solid var(--gray-400);
  }

  button {
    margin-top: 1rem;
  }

  button, input {
    width: 100%;
  }
`
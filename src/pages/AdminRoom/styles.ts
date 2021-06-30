import styled from 'styled-components';

export const PageAdminRoom = styled.div`

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.title};
      }

      span {
        margin-left: 1rem;
        background: var(--green);
        border-radius: 999px;
        padding: 0.5rem 1rem;
        color: var(--white);
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    .question-list {
      margin-top: 2rem;
    }
  }
`
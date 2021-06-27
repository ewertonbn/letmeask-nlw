import styled from 'styled-components';

export const PageRoom = styled.div`

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
        color: var(--black);
      }

      span {
        margin-left: 1rem;
        background: var(--pink-dark);
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
`;

export const FormCreateNewRoom = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--gray-100);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 8.125rem;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      span {
        margin-left: 0.5rem;
        color: var(--black);
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    > span {
      font-size: 0.875rem;
      color: var(--gray-dark);
      font-weight: 500;

      button {
        background: transparent;
        border: 0;
        color: var(--purple);
        text-decoration: underline;
        font-size: 0.875rem;
        cursor: pointer;
        font-weight: 500;
      }
    }
  }
`
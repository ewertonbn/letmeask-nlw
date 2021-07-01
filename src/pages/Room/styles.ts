import styled from 'styled-components';

export const PageRoom = styled.div`

  main {
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 3rem;

    .room-title {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        padding: 0 1rem;
      }

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

      @media (max-width: 768px) {
        padding: 0 1rem;
      }
    }
  }
`;

export const FormCreateNewRoom = styled.form`
  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  textarea {
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.gray100};
    color: ${props => props.theme.colors.title};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 8.125rem;
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    > span {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.text};
      font-weight: 500;

      a {
        color: ${props => props.theme.colors.text};
        text-decoration: underline;
        font-size: 0.875rem;
        cursor: pointer;
        font-weight: 500;
      }
    }
  }
`
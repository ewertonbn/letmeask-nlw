import styled from 'styled-components';

export const QuestionContent = styled.div`
  background: var(--gray-100);
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  & + .question {
    margin-top: 0.5rem;
  }

  &.highlighted {
    background: var(--gray-200);
    border: 1px solid var(--purple);

    footer .user-info span {
       color: var(--black);
    }
  }

  &.answered {
    background: var(--gray-light);
  }

  p {
    color: var(--black);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

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
        color: var(--gray-dark);
        font-size: 0.875rem;
      }
    }

    > div {
      display: flex;
      gap: 1rem;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: var(--gray-dark);
        gap: 0.5rem;

        &.liked {
          color: var(--purple);

          svg path {
            stroke: var(--purple);
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`
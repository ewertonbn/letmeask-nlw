import styled from 'styled-components';

export const ButtonSend = styled.button`
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: var(--green);
  color: var(--white);
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &.outlined {
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
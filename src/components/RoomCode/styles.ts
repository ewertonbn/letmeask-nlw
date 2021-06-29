import styled from 'styled-components'

export const ButtonRoomCode = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: var(--white);
  border: 1px solid var(--purple);
  cursor: pointer;

  display: flex;
  align-items: center;

  div {
    background: var(--purple);
    padding: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 15rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`
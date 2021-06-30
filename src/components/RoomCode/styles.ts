import styled from 'styled-components'

export const ButtonRoomCode = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: ${props => props.theme.colors.gray100};
  border: 1px solid ${props => props.theme.colors.gray400};
  cursor: pointer;

  display: flex;
  align-items: center;

  div {
    background: var(--green);
    padding: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    color: ${props => props.theme.colors.title};
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 15rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`
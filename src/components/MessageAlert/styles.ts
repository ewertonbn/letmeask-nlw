import styled from 'styled-components';

export const MessageContent = styled.div`
  margin-top: 8rem;
  text-align: center;

  h3 {
    margin: 1rem 0;
    color: ${props => props.theme.colors.title};
  }

  p {
    color: ${props => props.theme.colors.text};
  }
`;
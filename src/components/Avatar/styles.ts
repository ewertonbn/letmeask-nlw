import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  span {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.text};
    font-size: 0.875rem;

    @media(max-width: 768px) {
      display: none;
    }
  }
`;
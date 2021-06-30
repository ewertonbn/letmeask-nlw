import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray300};

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 2.813rem;
    }

    > div {
      display: flex;
      gap: 1rem;

      button {
        height: 2.5rem;
      }
    }
  }
`
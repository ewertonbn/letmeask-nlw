import styled from 'styled-components';

export const PageAdminRoom = styled.div`

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #29292e;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 999px;
        padding: 8px 16px;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 14px;
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }
`
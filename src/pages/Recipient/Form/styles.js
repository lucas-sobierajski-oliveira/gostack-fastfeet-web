import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 36px 120px;
  display: flex;
  flex-direction: column;

  form {
    margin-top: 20px;
    padding: 30px;
    border-radius: 6px;
    background: #fff;
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid #666;
      border-radius: 6px;
      padding: 12px 15px;
    }

    strong {
      margin-bottom: 8px;
    }

      section {
        flex: 1;
        display: flex;
        flex-direction: column;

        input {
          margin-bottom: 16px;
        }
      }
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin: auto 0;
  align-items: center;
  justify-content: space-between;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button,
  a {
    border: 0;
    color: #fff;
    font-weight: bold;
    padding: 12px;
    border-radius: 6px;
  }

  button {
    margin-left: 16px;
    background: #7d40e7;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#7d40e7')};
    }
  }

  a {
    background: #999;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#999')};
    }
  }
`;

export const ButtonBack = styled.button`
  background: #999;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#999')};
  }
`;

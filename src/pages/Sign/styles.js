import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 315px;
  width: 100%;
  background: #fff;
  padding: 24px;
  border-radius: 4px;

  img {
    margin: 40px 0 40px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid #999;
      padding: 12px 15px;
      border-radius: 4px;
    }

    span {
      color: red;
    }

    label {
      margin: 8px 0 8px;
      font-weight: bold;
    }

    button {
      padding: 12px 0;
      background: #7d40e7;
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      color: white;
      margin: 16px 0 40px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.1, '#7d40e7')};
      }
    }
  }
`;

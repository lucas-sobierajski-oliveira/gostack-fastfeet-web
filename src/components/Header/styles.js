import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 22px;

    padding-right: 30px;
    margin-right: 30px;
    border-right: 1px solid #999;
  }
`;

export const LinkNav = styled(Link)`
  font-weight: bold;
  color: ${(props) => (props.selected ? '#000' : '#666')};

  & + a {
    margin-left: 8px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;

  button {
    color: red;
    border: 0;
    background: none;
    margin: 2px 0;

    &:hover {
      color: ${darken(0.1, 'red')};
    }
  }

  a {
    color: #666;
    font-weight: bold;
    align-self: center;
    margin: 2px 0;
  }
`;

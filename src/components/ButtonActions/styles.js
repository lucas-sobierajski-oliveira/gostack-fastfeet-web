import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    left: 1.5px;
    top: 13px;

    z-index: 1;
  }
`;

export const Button = styled.button`
  border: 0;
  background: #fff;
  border-radius: 50%;
  z-index: 0;
`;

export const HideContainer = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const ContainerList = styled.div`
  position: relative;
`;

export const ActionList = styled.ul`
  position: absolute;
  width: 110px;
  left: -40px;
  background: #fff;
  border: 1px #999 solid;
  padding: 8px;
  border-radius: 6px;
  z-index: 2;

  li {
    padding: 4px;

    & + li {
      border-top: 1px solid #999;
    }

    button {
      text-align: center;
      display: flex;
      align-items: center;
      border: 0;
      background: none;
      svg {
        margin-right: 4px;
      }
    }
  }
`;

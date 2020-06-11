import styled from 'styled-components';
import ReactModal from 'react-modal';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled(ReactModal)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ContentModal = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 25px;
  border: 1px solid #999;
  border-radius: 6px;

  strong {
    margin-bottom: 4px;
  }

  p {
    margin-bottom: 4px;
  }

  button {
    display: flex;
    align-self: flex-end;
    background: none;
    border: none;
    margin-bottom: 8px;
  }

  hr {
    margin: 12px 0;
  }

  img {
    display: flex;
    align-self: center;
    width: 260px;
    height: 40px;
    margin-top: 4px;
  }
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

    button,
    a {
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

import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdEdit,
  MdPanoramaFishEye,
  MdRemove,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import {
  Button,
  Container,
  ActionList,
  ContainerList,
  ContainerButton,
  HideContainer,
} from './styles';

export default function ButtonActions({ close }) {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <ContainerButton>
        <Button type="button" onClick={toggleVisible}>
          <MdMoreHoriz color="#999" size={22} />
        </Button>
        <HideContainer visible={visible}>
          <MdKeyboardArrowDown className="arrow" size={20} visible={visible} />
          <ContainerList>
            <ActionList>
              <li>
                <button type="button">
                  <MdPanoramaFishEye color="green" />
                  Visualizar
                </button>
              </li>
              <li>
                <button type="button">
                  <MdEdit color="blue" />
                  Editar
                </button>
              </li>
              <li>
                <button type="button">
                  <MdRemove color="red" />
                  Remover
                </button>
              </li>
            </ActionList>
          </ContainerList>
        </HideContainer>
      </ContainerButton>
    </Container>
  );
}

import React, { useState } from 'react';

import {
  MdClear,
  MdMoreHoriz,
  MdPanoramaFishEye,
  MdRemove,
  MdKeyboardArrowDown,
} from 'react-icons/md';

import api from '~/services/api';

import {
  Button,
  Container,
  ActionList,
  ContainerList,
  ContainerButton,
  Modal,
  ContentModal,
  HideContainer,
} from './styles';

Modal.setAppElement('#root');

export default function ButtonActions({ problem, updateProblems }) {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
  }

  function handleModal() {
    setVisible(false);
    setModal(true);
  }

  async function handleRemove(id) {
    setVisible(false);

    const confirm = window.confirm(
      'Você realmente deseja deletar esse registro?'
    );

    if (!confirm) {
      console.tron.log('o item não foi removido');
      return;
    }

    try {
      await api.delete(`/problems/${id}`);
      updateProblems();
      console.tron.log('registro removido');
    } catch (err) {
      console.tron.log('erro ao tentar deletar o registro');
    }
  }

  return (
    <Container>
      <ContainerButton>
        <Button type="button" onClick={toggleVisible}>
          <MdMoreHoriz color="#999" size={22} />
        </Button>
        <Modal isOpen={modal} style={{ overlay: { opacity: 6.0 } }}>
          <ContentModal>
            <button type="button" onClick={() => setModal(false)}>
              <MdClear color="#666" size={22} />
            </button>

            <strong>Visualizar problema</strong>
            <p>{problem.description}</p>
          </ContentModal>
        </Modal>
        <HideContainer visible={visible}>
          <MdKeyboardArrowDown className="arrow" size={20} visible={visible} />
          <ContainerList>
            <ActionList>
              <li>
                <button type="button" onClick={handleModal}>
                  <MdPanoramaFishEye color="green" />
                  Visualizar
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleRemove(problem.id)}>
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

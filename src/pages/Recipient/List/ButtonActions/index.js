import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  MdClear,
  MdMoreHoriz,
  MdEdit,
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
  HideContainer,
} from './styles';

Modal.setAppElement('#root');

export default function ButtonActions({ recipient, updateRecipient }) {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    setVisible(!visible);
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
      await api.delete(`/recipients/${id}`);
      updateRecipient();
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
        <HideContainer visible={visible}>
          <MdKeyboardArrowDown className="arrow" size={20} visible={visible} />
          <ContainerList>
            <ActionList>
              <li>
                <Link
                  to={`/recipient/edit/${recipient.id}`}
                  recipient={recipient}
                >
                  <MdEdit color="blue" />
                  Editar
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleRemove(recipient.id)}
                >
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

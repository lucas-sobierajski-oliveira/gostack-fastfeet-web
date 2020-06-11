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
  ContentModal,
  HideContainer,
} from './styles';

Modal.setAppElement('#root');

export default function ButtonActions({ delivery, updateDeliveries }) {
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
      await api.delete(`/deliveries/${id}`);
      updateDeliveries();
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

            <strong>Informações da encomenda</strong>
            <p>{delivery.recipient.rua}</p>
            <p>{delivery.recipient.cidade}</p>
            <p>{delivery.recipient.cep}</p>
            <hr />
            <strong>Datas</strong>
            <p>
              <b>Entrada</b>: {delivery.start_at}
            </p>
            <p>
              <b>Saída</b>: {delivery.end_at}
            </p>
            <hr />
            <strong>Assinatura do destinatário </strong>
            <img
              src={
                delivery.signature
                  ? delivery.signature.url
                  : 'https://diplomaciacivil.org.br/wp-content/uploads/2019/09/assinatura-rodrigo.png'
              }
              alt="a"
            />
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
                <Link to={`/delivery/edit/${delivery.id}`} delivery={delivery}>
                  <MdEdit color="blue" />
                  Editar
                </Link>
              </li>
              <li>
                <button type="button" onClick={() => handleRemove(delivery.id)}>
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

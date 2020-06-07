import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { setPath } from '~/store/models/user/actions';
import ButtonActions from '~/components/ButtonActions';
import { Container, SearchContainer } from './styles';

export default function Delivery() {
  const dispatch = useDispatch();
  dispatch(setPath('delivery'));
  const [deliveries, setDeliveries] = useState([]);
  const [autoClose, setAutoClose] = useState(false);

  useEffect(() => {
    async function getDeliveries() {
      const response = await api.get('deliveries');
      console.tron.log(response.data);
      setDeliveries(response.data);
    }

    getDeliveries();
  }, []);

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <SearchContainer>
        <AsyncSelect />
        <button type="button">
          <MdAdd color="#fff" size={22} />
          CADASTRAR
        </button>
      </SearchContainer>

      <table>
        <tr>
          <th>ID</th>
          <th>Destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
        {deliveries.map((delivery) => (
          <tr>
            <td>#{delivery.id}</td>
            <td>{delivery.recipient.nome}</td>
            <td>{delivery.deliveryman.name}</td>
            <td>{delivery.recipient.cidade}</td>
            <td>{delivery.recipient.estado}</td>
            <td>ENTREGUE</td>
            <td>
              <ButtonActions close={autoClose} />
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

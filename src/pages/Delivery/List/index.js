import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { setPath } from '~/store/models/user/actions';
import ButtonActions from './ButtonActions';
import ItemStatus from './ItemStatus';
import { Container, SearchContainer, SpanDeliveryman } from './styles';

export default function DeliveryList() {
  const dispatch = useDispatch();
  dispatch(setPath('delivery'));
  const [deliveries, setDeliveries] = useState([]);

  async function loadDeliveries() {
    const response = await api.get('deliveries');
    setDeliveries(response.data);
  }

  useEffect(() => {
    loadDeliveries();
  }, []);

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <SearchContainer>
        <AsyncSelect />
        <Link to="/delivery/new">
          <MdAdd color="#fff" size={22} />
          CADASTRAR
        </Link>
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
            <td>
              <SpanDeliveryman status={delivery.status}>
                {delivery.deliveryman.name.substring(0, 1)}
              </SpanDeliveryman>
              {delivery.deliveryman.name}
            </td>
            <td>{delivery.recipient.cidade}</td>
            <td>{delivery.recipient.estado}</td>
            <td>
              <ItemStatus status={delivery.status} />
            </td>
            <td>
              <ButtonActions
                delivery={delivery}
                updateDeliveries={loadDeliveries}
              />
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

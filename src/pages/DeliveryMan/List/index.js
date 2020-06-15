import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { setPath } from '~/store/models/user/actions';
import ButtonActions from './ButtonActions';
import { Container, SearchContainer, SpanDeliveryman } from './styles';

export default function DeliverymanList() {
  const dispatch = useDispatch();
  dispatch(setPath('deliveryman'));
  const [allDeliveryman, setAllDeliveryman] = useState([]);

  async function loadDeliverymans() {
    const response = await api.get('/deliverymans');
    setAllDeliveryman(response.data);
  }

  useEffect(() => {
    loadDeliverymans();
  }, []);

  return (
    <Container>
      <h2>Gerenciando entregadores</h2>
      <SearchContainer>
        <AsyncSelect />
        <Link to="/deliveryman/new">
          <MdAdd color="#fff" size={22} />
          CADASTRAR
        </Link>
      </SearchContainer>

      <table>
        <tr>
          <th>ID</th>
          <th>Foto</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
        {allDeliveryman.map((deliveryman) => (
          <tr>
            <td>#{deliveryman.id}</td>
            <td>
              <SpanDeliveryman>
                {deliveryman.name.substring(0, 1)}
              </SpanDeliveryman>
            </td>
            <td>{deliveryman.name}</td>
            <td>{deliveryman.email}</td>
            <td>
              <ButtonActions
                deliveryman={deliveryman}
                updateDeliverymans={loadDeliverymans}
              />
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

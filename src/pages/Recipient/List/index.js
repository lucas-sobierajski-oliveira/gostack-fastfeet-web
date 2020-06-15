import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { setPath } from '~/store/models/user/actions';
import ButtonActions from './ButtonActions';
import { Container, SearchContainer } from './styles';

export default function RecipientList() {
  const dispatch = useDispatch();
  dispatch(setPath('recipient'));
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients() {
    const response = await api.get('/recipients');
    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, []);

  return (
    <Container>
      <h2>Gerenciando destinatários</h2>
      <SearchContainer>
        <AsyncSelect />
        <Link to="/recipient/new">
          <MdAdd color="#fff" size={22} />
          CADASTRAR
        </Link>
      </SearchContainer>

      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Ações</th>
        </tr>
        {recipients.map((recipient) => (
          <tr>
            <td>#{recipient.id}</td>
            <td>{recipient.nome}</td>
            <td>{recipient.endereco}</td>
            <td>
              <ButtonActions
                recipient={recipient}
                updateRecipient={loadRecipients}
              />
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

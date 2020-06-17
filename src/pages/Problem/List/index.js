import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { MdAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { setPath } from '~/store/models/user/actions';
import ButtonActions from './ButtonActions';
import { Container, SearchContainer } from './styles';

export default function ProblemList() {
  const dispatch = useDispatch();
  dispatch(setPath('delivery'));
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    const response = await api.get('problems');
    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <h2>Gerenciando problemas</h2>
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
          <th>Problema</th>
          <th>Ações</th>
        </tr>
        {problems.map((problem) => (
          <tr>
            <td>#{problem.id}</td>
            <td>{problem.description}</td>
            <td>
              <ButtonActions
                problem={problem}
                updateDeliveries={loadProblems}
              />
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

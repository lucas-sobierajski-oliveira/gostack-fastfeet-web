import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, TitleContainer, ActionContainer } from './styles';

export default function DeliverymanForm({ match }) {
  const { id } = match.params;
  const [deliveryman, setDeliveryman] = useState(null);

  useEffect(() => {
    async function getDeliveryById(id) {
      const response = await api.get(`/deliverymans/${id}`);

      if (response.data) {
        setDeliveryman(response.data);
        console.tron.log(response.data);
      }
    }

    getDeliveryById(id);
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>Edição de entregador</h2>
        <ActionContainer>
          <Link to="/deliveryman">VOLTAR</Link>
          <button type="button">SALVAR</button>
        </ActionContainer>
      </TitleContainer>

      <Form>
        <section>
          <strong>Nome</strong>
          <Input name="name" value={deliveryman && deliveryman.name} />
        </section>
        <section>
          <strong>E-mail</strong>
          <Input name="email" value={deliveryman && deliveryman.email} />
        </section>
      </Form>
    </Container>
  );
}

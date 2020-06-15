import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

import {
  Container,
  TitleContainer,
  ActionContainer,
  BackgroundContainer,
} from './styles';

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    async function getDeliveryById(id) {
      const response = await api.get(`/deliveries/${id}`);

      if (response.data) {
        setDelivery(response.data);
        console.tron.log(response.data);
      }
    }

    getDeliveryById(id);
  }, []);

  return (
    <BackgroundContainer>
      <Container>
        <TitleContainer>
          <h2>Edição de encomendas</h2>
          <ActionContainer>
            <Link to="/delivery">VOLTAR</Link>
            <button type="button">SALVAR</button>
          </ActionContainer>
        </TitleContainer>

        <Form>
          <div>
            <section>
              <strong>Destinatário</strong>
              <Input
                name="recipient"
                value={delivery && delivery.recipient.nome}
              />
            </section>
            <section>
              <strong>Entregador</strong>
              <Input
                name="deliveryman"
                value={delivery && delivery.deliveryman.name}
              />
            </section>
          </div>
          <strong>Nome do produto</strong>
          <Input name="product" value={delivery && delivery.product} />
        </Form>
      </Container>
    </BackgroundContainer>
  );
}

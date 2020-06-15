import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import api from '~/services/api';

import {
  Container,
  TitleContainer,
  ActionContainer,
  BackgroundContainer,
} from './styles';

export default function DeliveryForm() {
  return (
    <BackgroundContainer>
      <Container>
        <TitleContainer>
          <h2>Cadastro de encomenda</h2>
          <ActionContainer>
            <Link to="/delivery">VOLTAR</Link>
            <button type="button">CRIAR</button>
          </ActionContainer>
        </TitleContainer>

        <Form>
          <div>
            <section>
              <strong>Destinatário</strong>
              <Input name="recipient" />
            </section>
            <section>
              <strong>Entregador</strong>
              <Input name="deliveryman" />
            </section>
          </div>
          <strong>Nome do produto</strong>
          <Input name="product" />
        </Form>
      </Container>
    </BackgroundContainer>
  );
}

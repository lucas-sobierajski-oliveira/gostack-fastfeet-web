import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import api from '~/services/api';

import { Container, TitleContainer, ActionContainer } from './styles';

export default function DeliverymanNew() {
  return (
    <Container>
      <TitleContainer>
        <h2>Cadastro de encomenda</h2>
        <ActionContainer>
          <Link to="/deliveryman">VOLTAR</Link>
          <button type="button">CRIAR</button>
        </ActionContainer>
      </TitleContainer>

      <Form>
        <section>
          <strong>Nome</strong>
          <Input name="name" />
        </section>
        <section>
          <strong>E-mail</strong>
          <Input name="email" />
        </section>
      </Form>
    </Container>
  );
}

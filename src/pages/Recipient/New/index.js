import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import api from '~/services/api';

import { Container, TitleContainer, ActionContainer } from './styles';

export default function RecipientNew() {
  return (
    <Container>
      <TitleContainer>
        <h2>Cadastro de destinatario</h2>
        <ActionContainer>
          <Link to="/recipient">VOLTAR</Link>
          <button type="button">CRIAR</button>
        </ActionContainer>
      </TitleContainer>

      <Form>
        <section>
          <strong>Nome</strong>
          <Input name="nome" />
        </section>
        <section>
          <strong>Rua</strong>
          <Input name="rua" />
        </section>
        <section>
          <strong>Numero</strong>
          <Input name="numero" />
        </section>
        <section>
          <strong>Complemento</strong>
          <Input name="complemento" />
        </section>
        <section>
          <strong>Cidade</strong>
          <Input name="cidade" />
        </section>
        <section>
          <strong>Estado</strong>
          <Input name="estado" />
        </section>
        <section>
          <strong>CEP</strong>
          <Input name="cep" />
        </section>
      </Form>
    </Container>
  );
}

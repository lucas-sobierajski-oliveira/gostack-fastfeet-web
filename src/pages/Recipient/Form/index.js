import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, TitleContainer, ActionContainer } from './styles';

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const [recipient, setRecipient] = useState(null);

  useEffect(() => {
    async function getRecipientById(id) {
      const response = await api.get(`/recipients/${id}`);

      if (response.data) {
        setRecipient(response.data);
        console.tron.log(response.data);
      }
    }

    getRecipientById(id);
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h2>Edição de destinatario</h2>
        <ActionContainer>
          <Link to="/recipient">VOLTAR</Link>
          <button type="button">CRIAR</button>
        </ActionContainer>
      </TitleContainer>

      <Form>
        <section>
          <strong>Nome</strong>
          <Input name="nome" value={recipient && recipient.nome} />
        </section>
        <section>
          <strong>Rua</strong>
          <Input name="rua" value={recipient && recipient.rua} />
        </section>
        <section>
          <strong>Numero</strong>
          <Input name="numero" value={recipient && recipient.numero} />
        </section>
        <section>
          <strong>Complemento</strong>
          <Input
            name="complemento"
            value={recipient && recipient.complemento}
          />
        </section>
        <section>
          <strong>Cidade</strong>
          <Input name="cidade" value={recipient && recipient.cidade} />
        </section>
        <section>
          <strong>Estado</strong>
          <Input name="estado" value={recipient && recipient.estado} />
        </section>
        <section>
          <strong>CEP</strong>
          <Input name="cep" value={recipient && recipient.cep} />
        </section>
      </Form>
    </Container>
  );
}

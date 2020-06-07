import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet-logo.png';
import { Container } from './styles';
import { signInRequest } from '~/store/models/auth/actions';

export default function Sign() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  function handleOnSubmit({ email, password }) {
    console.tron.log('aqui');
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleOnSubmit} schema={schema}>
        <label>SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />
        <label>SUA SENHA</label>
        <Input name="password" type="password" placeholder="********" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}

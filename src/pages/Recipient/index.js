import React from 'react';
import { useDispatch } from 'react-redux';

import { setPath } from '~/store/models/user/actions';
// import { Container } from './styles';

export default function Recipient() {
  const dispatch = useDispatch();
  dispatch(setPath('recipient'));
  
  return <h1>Recipient</h1>;
}

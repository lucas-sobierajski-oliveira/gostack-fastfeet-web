import React from 'react';
import { useDispatch } from 'react-redux';

import { setPath } from '~/store/models/user/actions';
// import { Container } from './styles';

export default function DeliveryMan() {
  const dispatch = useDispatch();
  dispatch(setPath('deliveryman'));

  return <h1>DeliveryMan</h1>;
}

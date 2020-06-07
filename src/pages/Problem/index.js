import React from 'react';
import { useDispatch } from 'react-redux';

import { setPath } from '~/store/models/user/actions';
// import { Container } from './styles';

export default function Problem() {
  const dispatch = useDispatch();
  dispatch(setPath('problem'));
  return <h1>Problem</h1>;
}

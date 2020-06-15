import React from 'react';

import { Span } from './styles';

export default function ItemStatus({ status }) {
  return (
    <Span status={status}>
      <div />
      <strong>{status}</strong>
    </Span>
  );
}

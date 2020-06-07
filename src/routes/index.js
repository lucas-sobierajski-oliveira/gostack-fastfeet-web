import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Sign from '~/pages/Sign';
import Delivery from '~/pages/Delivery';
import DeliveryMan from '~/pages/DeliveryMan';
import Recipient from '~/pages/Recipient';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/delivery" isPrivate component={Delivery} />
      <Route path="/deliveryman" isPrivate component={DeliveryMan} />
      <Route path="/recipient" isPrivate component={Recipient} />
      <Route path="/problem" isPrivate component={Problem} />
    </Switch>
  );
}

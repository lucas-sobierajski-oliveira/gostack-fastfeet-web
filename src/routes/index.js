import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Sign from '~/pages/Sign';
import { DeliveryList, DeliveryForm, DeliveryNew } from '~/pages/Delivery';
import {
  DeliverymanForm,
  DeliverymanList,
  DeliverymanNew,
} from '~/pages/DeliveryMan';

import { RecipientForm, RecipientList, RecipientNew } from '~/pages/Recipient';
import { ProblemList } from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/delivery" exact isPrivate component={DeliveryList} />
      <Route path="/delivery/new" isPrivate component={DeliveryNew} />
      <Route
        path="/delivery/edit/:id"
        exact
        isPrivate
        component={DeliveryForm}
      />
      <Route path="/deliveryman" exact isPrivate component={DeliverymanList} />
      <Route path="/deliveryman/new" isPrivate component={DeliverymanNew} />
      <Route
        path="/deliveryman/edit/:id"
        exact
        isPrivate
        component={DeliverymanForm}
      />
      <Route path="/recipient" exact isPrivate component={RecipientList} />
      <Route path="/recipient/new" exact isPrivate component={RecipientNew} />
      <Route
        path="/recipient/edit/:id"
        exact
        isPrivate
        component={RecipientForm}
      />
      <Route path="/problem" isPrivate component={ProblemList} />
    </Switch>
  );
}

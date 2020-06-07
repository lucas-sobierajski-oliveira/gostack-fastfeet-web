import React from 'react';
import PropTypes from 'prop-types';
import { Route as RouteDom, Redirect } from 'react-router-dom';

import { store } from '../store';
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

export default function Route({ component: Component, isPrivate, ...rest }) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/delivery" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <RouteDom
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Route.defaultProps = {
  isPrivate: false,
};

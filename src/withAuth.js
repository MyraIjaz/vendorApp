// withAuth.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from './authService';

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      if (!isAuthenticated()) {
        return <Redirect to="/login" />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuth;
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const PublicRoute = ({
  auth,
  moneyHubConnection,
  pay360Connection,
  donationLevel,
  charityConnection,
  component: Component
}) => {
  if (auth) {
    if (pay360Connection && moneyHubConnection) {
      return <Redirect to={{pathname: '/home'}} />
    } else if (donationLevel) {
      return <Redirect to={{pathname: '/account/main'}} />
    } else if (charityConnection) {
      return <Redirect to={{pathname: '/donation/set-level'}} />
    } else if (!charityConnection) {
      return <Redirect to={{pathname: '/onboarding'}} />
    }
  } else {
    return <Route component={Component} />
  }
};

const mapStateToProps = (state) => ({
  moneyHubConnection: state.auth.moneyHubConnection,
  pay360Connection: state.auth.pay360Connection,
  donationLevel: state.auth.donationLevel,
  charityConnection: state.auth.charityConnection,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicRoute);

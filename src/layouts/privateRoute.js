import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {changeLoginState} from '../actions/auth';

const PrivateRoute = (props) => {
  if (props.auth) {
    if (!props.isLoggedIn && props.changeLoginState) props.changeLoginState(true);
    return <Route {...props} component={props.component} />
  }
  if (props.isLoggedIn) props.changeLoginState(false);
  return <Redirect to={{pathname: '/auth/login'}} />
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  changeLoginState: (isLoggedIn) => {
    dispatch(changeLoginState(isLoggedIn));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

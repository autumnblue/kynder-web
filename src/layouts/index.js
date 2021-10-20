import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {changeLoginState} from '../actions/auth';

/**
 * header component
 */
import Header from './header';

/**
 * footer component
 */
import Footer from './footer';

/**
 * main routes
 */
import Dashboard from '../components/dashboard';
import Terms from '../components/terms';

import GetStarted from '../components/getStarted';
import Onboarding from '../components/onboarding';

import Charities from '../containers/charities/charities';
import SelectedCharity from '../containers/charities/selectedCharity';
import ConfirmedCharity from '../components/charities/confirmedCharity';
import ContactUs from '../containers/charities/contactUs';

import SetDonationLevel from '../containers/donation/setDonationLevel';

import AccountMain from '../containers/accountConnection/main';
import AvailableBanks from '../containers/accountConnection/moneyhub/availableBanks';
import BankConnection from '../containers/accountConnection/moneyhub/bankConnection';
import Pay360 from '../containers/accountConnection/pay360';
import AccountSetupComplete from '../components/accountConnection/complete';

// auth routes
import Login from '../containers/auth/login';
import Register from '../containers/auth/register';
import ForgotPwd from '../containers/auth/forgotPwd';
import CheckInbox from '../containers/auth/checkInbox';
import RecoveryCode from '../containers/auth/recoveryCode';
import ResetPwd from '../containers/auth/resetPwd';

// home route
import Home from '../components/home';

// settings route
import Settings from '../containers/mainSettings';
import UnlinkMoneyhub from '../containers/mainSettings/unlinkMoneyhub';
import PrivacyPolicy from '../components/mainSettings/privacyPolicy';
import About from '../components/mainSettings/about';
import Support from '../components/mainSettings/support';
import NewCharityRequest from '../containers/mainSettings/newCharityRequest';
import AskQuestion from '../containers/mainSettings/askQuestion';
import LeaveFeedback from '../containers/mainSettings/leaveFeedback';
import ChangePassword from '../containers/mainSettings/changePassword';
import DonationPot from '../containers/mainSettings/donationPot';

// public route
import PublicRoute from '../layouts/publicRoute';

// private route
import PrivateRoute from '../layouts/privateRoute';

const Routes = ({isLoggedIn, token}) => {
  return (
    <div className="route-container">
      <Header auth={token} />
      <Switch>
        <PublicRoute path="/auth/login" auth={token} component={Login} />
        <PublicRoute path="/auth/register" auth={token} component={Register} />
        <PublicRoute path="/auth/forgot-password" auth={token} component={ForgotPwd} />
        <PublicRoute path="/auth/check-inbox" auth={token} component={CheckInbox} />
        <PublicRoute path="/auth/recovery-code" auth={token} component={RecoveryCode} />
        <PublicRoute path="/auth/reset-password" auth={token} component={ResetPwd} />
        <PrivateRoute path="/charities/contact-us" auth={token} component={ContactUs} />
        <PrivateRoute path="/charities/confirmed/edit" auth={token} component={ConfirmedCharity} />
        <PrivateRoute path="/charities/confirmed" auth={token} component={ConfirmedCharity} />
        <PrivateRoute path="/charities/edit" auth={token} component={Charities} />
        <PrivateRoute path="/charities/:id/edit" auth={token} component={SelectedCharity} />
        <PrivateRoute path="/charities/:id" auth={token} component={SelectedCharity} />
        <PrivateRoute path="/charities" auth={token} component={Charities} />
        <PrivateRoute path="/donation/set-level/edit" auth={token} component={SetDonationLevel} />
        <PrivateRoute path="/donation/set-level" auth={token} component={SetDonationLevel} />
        <PrivateRoute path="/account/main/moneyhub" auth={token} component={AccountMain} />
        <PrivateRoute path="/account/main" auth={token} component={AccountMain} />
        <PrivateRoute path="/account/available-banks" auth={token} component={AvailableBanks} />
        <PrivateRoute path="/moneyhub" auth={token} component={BankConnection} />
        <PrivateRoute path="/pay360" auth={token} component={Pay360} />
        <PrivateRoute path="/account/complete" auth={token} component={AccountSetupComplete} />
        <PrivateRoute path="/onboarding" auth={token} component={Onboarding} />
        <PrivateRoute path="/get-started" auth={token} component={GetStarted} />
        <PrivateRoute path="/donation-pot" auth={token} component={DonationPot} />
        <PrivateRoute path="/settings/unlink-moneyhub" auth={token} component={UnlinkMoneyhub} />
        <PrivateRoute path="/settings/change-password" auth={token} component={ChangePassword} />
        <PrivateRoute path="/settings" auth={token} component={Settings} />
        <PrivateRoute path="/support/new-charity" auth={token} component={NewCharityRequest} />
        <PrivateRoute path="/support/ask-question" auth={token} component={AskQuestion} />
        <PrivateRoute path="/support/leave-feedback" auth={token} component={LeaveFeedback} />
        <PrivateRoute path="/support" auth={token} component={Support} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-conditions" component={Terms} />
        <PrivateRoute path="/about" auth={token} component={About} />
        <PrivateRoute path="/home" auth={token} component={Home} />
        <PublicRoute exact path="/" auth={token} component={Dashboard} />
      </Switch>
      <Footer auth={token} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginState: (isLoggedIn) => {
      dispatch(changeLoginState(isLoggedIn))
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);

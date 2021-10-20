import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import ContactUs from '../../../components/charities/contactUs';
import {contactUsForCharity} from '../../../actions/charities';

const mapStateToProps = (state) => {
  return {
    isLoading: state.charities.isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    contactUsForCharity: (data) => {
      dispatch(contactUsForCharity(data, ownProps.history));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactUs)
);
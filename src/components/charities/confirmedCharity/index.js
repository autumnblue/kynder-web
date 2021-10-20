import React from 'react';
import {withRouter} from 'react-router-dom';

import CommonHeader from '../../common/header';
import WhiteButton from '../../common/form/button/whiteButton';
import DefaultButton from '../../common/form/button/defaultButton';

const ConfirmedCharity = ({history, location}) => {
  const handleAction = () => {
    if ((location.pathname && location.pathname.indexOf('/edit') > -1)) {
      history.push('/donation/set-level/edit');
    } else {
      history.push('/donation/set-level');
    }
  };

  return (
    <div className="confirmed-charity-container">
      <CommonHeader
        mainMode={false}
        step={1}
        edit={(location.pathname && location.pathname.indexOf('/edit') > -1) || false}
      />
      <div className="charity-wrapper">
        <div className="charity-content">
          <p className="title">Your charity selection is confirmed</p>
          <p className="description">Now Kynder needs to know how much you'd like to start setting aside for it.</p>
          <div className="button-group">
            <WhiteButton
              title={(location.pathname && location.pathname.indexOf('/edit') > -1) ? 'Check donation level' : 'Set donation level'}
              action={handleAction}
            />
            <DefaultButton
              title="Go back"
              mainMode={false}
              action={() => history.goBack()}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(ConfirmedCharity);

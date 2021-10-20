import React from 'react';
import {useHistory} from 'react-router-dom';

import Images from '../../assets/images';
import WhiteButton from '../../components/common/form/button/whiteButton';

const GetStarted = () => {
  const history = useHistory();

  return (
    <div className="get-started-container">
      <p className="title">Getting started</p>
      <div className="setup-flow">
        <div className="flow-item">
          <div className="img-wrapper">
            <img src={Images.getStarted1} alt="" />
          </div>
          <p className="item-title">
            Choose a charity
          </p>
        </div>
        <div className="flow-item">
          <div className="img-wrapper">
            <img src={Images.getStarted2} alt="" />
          </div>
          <p className="item-title">
            Set your donation level
          </p>
        </div>
        <div className="flow-item">
          <div className="img-wrapper">
            <img src={Images.getStarted3} alt="" />
          </div>
          <p className="item-title">
            Connect your account
          </p>
        </div>
        <div className="flow-item">
          <div className="img-wrapper">
            <img src={Images.getStarted4} alt="" />
          </div>
          <p className="item-title">
            That’s it!
          </p>
        </div>
      </div>
      <div className="btn-wrapper">
        <WhiteButton title="Let's start" action={() => history.push('/charities')} />
      </div>
    </div>
  )
};

export default GetStarted;

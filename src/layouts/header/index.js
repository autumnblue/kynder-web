import React from 'react';
import {withRouter} from 'react-router-dom'

import Images from '../../assets/images';

const Header = ({auth, location, history}) => {
  const renderClassName = () => {
    if (location.pathname === '/' || location.pathname === '/get-started' || location.pathname === '/onboarding') {
      return 'green';
    }
    if (
      location.pathname.indexOf('/auth') > -1 ||
      location.pathname === '/privacy-policy' ||
      location.pathname === '/terms-and-conditions'
    ) {
      return 'd-none';
    }
    if (auth) {
      return 'd-none';
    }
  };

  const renderClassNameForRight = () => {
    if (auth) {
      return 'd-none';
    }
  };

  const moveTo = (route) => {
    history.push(route);
  }

  const onOpenMailBox = () => {
    window.open('mailto:support@kynder.co.uk', 'mail');
  };

  return (
    <div className={`header-container ${renderClassName()}`}>
      <div className="left wow bounceInLeft">
        <img src={Images.whiteLogo} alt="" onClick={() => moveTo('/')} />
      </div>
      <div className={`right wow bounceInRight ${renderClassNameForRight()}`}>
        <a
          className="support"
          onClick={onOpenMailBox}
        >
          Support
        </a>
        <button className="login" onClick={() => moveTo('/auth/login')}>Login</button>
      </div>
    </div>
  )
};

export default withRouter(Header);

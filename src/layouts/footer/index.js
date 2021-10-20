import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';

const Footer = ({auth, location}) => {
  const history = useHistory();

  const renderClassName = () => {
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

  return (
    <div className={`footer-container ${renderClassName()}`}>
      <p className="footer-item">© 2021 KYNDER</p>
      <a
        className="footer-item explore-link"
        onClick={() => history.push('/terms-and-conditions')}
      >
        TERMS & CONDITIONS
      </a>
      <a
        className="footer-item explore-link"
        onClick={() => history.push('/privacy-policy')}
      >
        PRIVACY POLICY
      </a>
      {/* <a
        className="footer-item explore-link"
        onClick={() => history.push('/help')}
      >
        HELP CENTER
      </a>
      <a
        className="footer-item explore-link"
        onClick={() => history.push('/request')}
      >
        PR REQUESTS
      </a>
      <a
        className="footer-item explore-link"
        onClick={() => history.push('/partnerships')}
      >
        PARTNERSHIPS
      </a> */}
    </div>
  );
};

export default withRouter(Footer);

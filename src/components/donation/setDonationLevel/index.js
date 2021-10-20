import React, {useState, useEffect} from 'react';

import CommonHeader from '../../common/header';
import GreenButton from '../../common/form/button/greenButton';

const SetDonationLevel = ({
  isLoading,
  selectedCharity,
  setDonationLevel,
  donationLevel,
  location,
}) => {
  const [donationValue, setDonationValue] = useState(0.5);

  useEffect(() => {
    if (donationLevel) {
      setDonationValue(donationLevel);
    }
  }, [donationLevel]);

  const handleDonationLevel = () => {
    const data = {
      value: donationValue,
    };
    if ((location.pathname && location.pathname.indexOf('/edit') > -1)) {
      setDonationLevel(data, true);
    } else {
      setDonationLevel(data);
    }
  };

  return (
    <div className="set-donation-container">
      <CommonHeader
        mainMode
        step={2}
        edit={(location.pathname && location.pathname.indexOf('/edit') > -1) || false}
        title="Your donation level"
      />
      <div className="set-donation-wrapper">
        <div className="set-donation-content">
          <p className="title">Set your donation level</p>
          <p className="description">
            Kynder automatically sets aside a percentage of your eligible spending in your donation pot. To get started, set a level you are comfortable with. You can always come back and change it at any time.
          </p>
          <div className="donation-detail">
            <div className="level-counter">
              <p className="title">Donation level</p>
              <div className="counter-detail">
                <button
                  className="btn left"
                  disabled={donationValue === 0.5}
                  onClick={() => setDonationValue(donationValue - 0.5)}
                >
                  -
                </button>
                <p className="donation-value">{`${donationValue}%`}</p>
                <button
                  className="btn right"
                  onClick={() => setDonationValue(donationValue + 0.5)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="selected-charity">
              <p className="label">Beneficiary</p>
              <div className="charity-content">
                <div className="logo-wrapper">
                  <img src={selectedCharity && selectedCharity.logoUrl} alt="" className="charity-logo" />
                </div>
                <div className="charity-detail">
                  <p className="charity-name">
                    {selectedCharity && selectedCharity.name}
                  </p>
                  <p className="charity-headline">
                    {selectedCharity && selectedCharity.headline}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <GreenButton
              title={(location.pathname && location.pathname.indexOf('/edit') > -1) ? 'Submit new donation level' : 'Send'}
              action={handleDonationLevel}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default SetDonationLevel;

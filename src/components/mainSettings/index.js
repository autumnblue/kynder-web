import React, {useEffect, useState} from 'react';

import CommonHeader from '../common/header';
import Modal from '../common/modal';
import Loader from '../../animation/Loader';
import WhiteButton from '../common/form/button/whiteButton';
import DefaultButton from '../common/form/button/defaultButton';

import Images from '../../assets/images';

const MainSettings = ({
  isLoading,
  moneyHubConnection,
  pay360Connection,
  donationLevel,
  charityConnection,
  email,
  settingsData,
  getSettings,
  history,
  logout,
}) => {
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    getSettings();
  }, []);

  if (isLoading) {
    return <Loader width={200} height={200} classes="animation-loader" />
  }

  const moveToAction = (route) => {
    history.push(route)
  };

  return (
    <div className="main-settings-container">
      <CommonHeader edit title="Settings" isLogout extraAction={() => setOpenModal(true)} />
      <div className="main-settings-wrapper">
        <div className="main-settings-content">
          <div className="main-settings-top">
            <div className="left">
              <div className="card-wrapper" onClick={() => moveToAction('/charities/edit')}>
                <img src={Images.settingCharityIcon} alt="" />
                <div className="card-content">
                  <p className="card-title">Selected Charity</p>
                  <p className="card-description">{charityConnection && charityConnection.name}</p>
                </div>
                <img src={Images.settingArrowRightIcon} alt="" className="arrow" />
              </div>
              <div className="card-wrapper" onClick={() => moveToAction('/donation/set-level/edit')}>
                <img src={Images.settingDonationLevelIcon} alt="" />
                <div className="card-content">
                  <p className="card-title">Your donation level</p>
                  <p className="card-description">{donationLevel && donationLevel}%</p>
                </div>
                <img src={Images.settingArrowRightIcon} alt="" className="arrow" />
              </div>
            </div>
            <div className="right">
              <div className="card-wrapper" onClick={() => moveToAction('/settings/unlink-moneyhub')}>
                <img src={Images.settingPaymentIcon} alt="" />
                <div className="card-content">
                  <p className="card-title">Connect your account</p>
                  <p className="card-description">
                    {
                      moneyHubConnection
                        ? 'Moneyhub connected'
                        : 'Moneyhub is not connected'
                    }
                  </p>
                </div>
                <img src={Images.settingArrowRightIcon} alt="" className="arrow" />
              </div>
              <div className="card-wrapper" onClick={() => moveToAction('/donation-pot')}>
                {settingsData && settingsData.donationStatus === 1 && (
                  <img src={Images.settingDonationPotIcon} alt="" />
                )}
                {settingsData && settingsData.donationStatus === 2 && (
                  <img src={Images.settingDonationPauseIcon} alt="" />
                )}
                {settingsData && settingsData.donationStatus === 3 && (
                  <img src={Images.settingDonationCancelIcon} alt="" />
                )}
                <div className="card-content">
                  <p className="card-title">Donation pot</p>
                  <p className="card-description">
                    {settingsData && settingsData.donationStatus === 1 && <span>&pound;</span>}
                    {settingsData &&
                      settingsData.donationStatus === 1 &&
                      settingsData.donationAmount}
                    {settingsData &&
                      settingsData.donationStatus === 2 &&
                      'Paused'}
                    {settingsData &&
                      settingsData.donationStatus === 3 &&
                      'Cancelled'}
                  </p>
                </div>
                <img src={Images.settingArrowRightIcon} alt="" className="arrow" />
              </div>
            </div>
          </div>
          <div className="main-settings-bottom">
            <div className="left">
              <p className="title">Personal information</p>
              <div className="setting-item">
                <p className="item-title">Email</p>
                <p className="item-description">{email}</p>
              </div>
              <a
                className="explore-link"
                onClick={() => history.push('/settings/change-password')}
              >
                Change Password
              </a>
            </div>
            <div className="right">
              <p className="title">Help</p>
              <a
                className="explore-link"
                onClick={() => history.push('/support')}
              >
                Support
              </a>
              <a
                className="explore-link"
                onClick={() => history.push('/about')}
              >
                About Kynder
              </a>
              <a
                className="explore-link"
                onClick={() => history.push('/privacy-policy')}
              >
                Privacy Policy
              </a>
              <a
                className="explore-link"
                onClick={() => history.push('/terms-and-conditions')}
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
        mainMode={false}
        className="logout-modal"
      >
        <p className="title">Log out</p>
        <p className="description">Are you sure you want to log out?</p>
        <div className="btn-group">
          <WhiteButton title="No" action={() => setOpenModal(false)} />
          <DefaultButton title="Yes, log out" mainMode={false} action={() => logout()} />
        </div>
      </Modal>
    </div>
  )
};

export default MainSettings;

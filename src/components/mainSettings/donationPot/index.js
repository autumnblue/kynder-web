import React, {useState} from 'react';
import moment from 'moment';
import Select from 'react-select';

import CommonHeader from '../../common/header';
import Modal from '../../common/modal';
import WhiteButton from '../../common/form/button/whiteButton';
import DefaultButton from '../../common/form/button/defaultButton';
import Loader from '../../../animation/Loader';

import {pauseDonationOptions} from '../../../utils/variable';

import Images from '../../../assets/images';

const DonationPot = ({
  isLoading,
  settingsData,
  requestDonationStatus,
  rescheduleDonation,
}) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenPauseModal, setOpenPauseModal] = useState(false);
  const [isOpenCancelModal, setOpenCancelModal] = useState(false);
  const [isActiveOptions, setActiveOptions] = useState(false);
  const [selectedOption, handleChangeSelect] = useState(null);

  const changeDonationStatus = () => {
    const data = {
      status: 1,
    };
    requestDonationStatus(data);
  };

  const onPauseDonation = () => {
    if (!selectedOption) {
      return;
    }
    const data = {
      option: selectedOption.value,
    };
    setOpenPauseModal(false);
    rescheduleDonation(data);
  };

  const onCancelDonation = () => {
    setOpenCancelModal(false);
    const data = {
      status: 3,
    };
    requestDonationStatus(data);
  };

  if (isLoading) {
    return <Loader width={200} height={200} classes="animation-loader" />
  }

  return (
    <div className="donation-pot-container">
      <CommonHeader edit title="Donation pot" />
      <div className="donation-pot-wrapper">
        <div className="donation-pot-content">
          <p className="title">Your balance</p>
          <p className="description">The amount of your donation that Kynder has accumulated from purchases you made.</p>
          <div className="donation-pot-detail">
            <div className="donation-pot-status">
              {settingsData && settingsData.donationStatus === 1 ? (
                <p className="title">
                  Total donations this month
                </p>
              ) : (settingsData && settingsData.donationStatus === 2) ? (
                <div className="donation-paused">
                  <img src={Images.pauseDonationIcon} alt="" />
                  <p className="title">
                    Your donations are paused
                  </p>
                </div>
              ) : (
                <div className="donation-cancelled">
                  <img src={Images.cancelDonationIcon} alt="" />
                  <p className="title">
                    Your donations are cancelled
                  </p>
                </div>
              )}
              <div
                className={`donation-pot-data ${(settingsData && settingsData.donationStatus === 1) ? 'active' : ''}`}
              >
                <div
                  className={`donation-value ${(settingsData && settingsData.donationStatus === 1) ? 'active' : ''}`}
                >
                  &pound;{settingsData && settingsData.donationAmount}
                </div>
                {settingsData && settingsData.donationStatus === 1 ? (
                  <div className="donation-active">
                    {isActiveOptions ? (
                      <div className="option-active">
                        <div className="btn" onClick={() => setOpenPauseModal(true)}>
                          <img src={Images.pauseDonationIcon} alt="" />
                          <span>Pause donations</span>
                        </div>
                        <div className="btn" onClick={() => setOpenCancelModal(true)}>
                          <img src={Images.cancelDonationIcon} alt="" />
                          <span>Cancel donations</span>
                        </div>
                      </div>
                    ) : (
                      <div className="option-inactive">
                        <p className="donation-date">
                          {settingsData &&
                          moment(settingsData.donationDate).format(
                            'DD MMM YYYY',
                          )}
                        </p>
                        <p className="next-donation">
                          Next donation scheduled
                        </p>
                      </div>
                    )}
                    <img
                      src={Images.expandIcon}
                      className="menu-icon"
                      alt=""
                      onClick={() => setActiveOptions(!isActiveOptions)}
                    />
                  </div>
                ) : (
                  <div
                    className="donation-inactive"
                    onClick={changeDonationStatus}
                  >
                    <img src={Images.newChartiyIcon} alt="" />
                    <span>Renew donations</span>
                  </div>
                )}
              </div>
              <div className="moneyhub-description">
                <p className="title">Powered by</p>&nbsp;&nbsp;
                <img src={Images.moneyhubLogo} alt="" onClick={() => setOpenModal(true)} />
              </div>
            </div>
            <div className="selected-charity">
              <p className="label">Beneficiary</p>
              <div className="charity-content">
                <div className="logo-wrapper">
                  <img src={settingsData && settingsData.charity.logoUrl} alt="" className="charity-logo" />
                </div>
                <div className="charity-detail">
                  <p className="charity-name">
                    {settingsData && settingsData.charity.name}
                  </p>
                  <p className="charity-headline">
                    {settingsData && settingsData.charity.headline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
        mainMode
        className="moneyhub-modal"
      >
        <div className="modal-header">
          <p className="title">Powered by</p>&nbsp;&nbsp;
          <img src={Images.moneyhubLogo} alt="" />
        </div>
        <p className="description">
          Kynder Company is the registered agent of Moneyhub Financial Technology Ltd (“Moneyhub”) who is authorised and regulated by the Financial Conduct Authority under the Payment Services Regulations 2017 (reg. no. 809360) for the provision of payment services.
        </p>
        <p className="description">
          Head office Regus House, 1 Friary, Temple Way, Bristol, BS16EA.
        </p>
        <p className="description">
          Email: support@moneyhub.co.uk
        </p>
      </Modal>
      <Modal
        isOpenModal={isOpenPauseModal}
        setOpenModal={setOpenPauseModal}
        mainMode={false}
        className="pause-donation-modal"
      >
        <p className="title">Pause donation</p>
        <p className="description">For how long would you like to pause your donations?</p>
        <div className="select-options">
          <Select
            classNamePrefix="kynder-select"
            maxMenuHeight={150}
            value={selectedOption}
            onChange={handleChangeSelect}
            options={pauseDonationOptions}
          />
        </div>
        <div className="btn-group">
          <WhiteButton
            title="Pause my donations"
            action={onPauseDonation}
          />
        </div>
      </Modal>
      <Modal
        isOpenModal={isOpenCancelModal}
        setOpenModal={setOpenCancelModal}
        mainMode={false}
        className="cancel-donation-modal"
      >
        <p className="title">Cancel donation</p>
        <p className="description">Are you sure you want to cancel donations?</p>
        <div className="btn-group">
          <WhiteButton title="No" action={() => setOpenCancelModal(false)} />
          <DefaultButton title="Yes, cancel" mainMode={false} action={onCancelDonation} />
        </div>
      </Modal>
    </div>
  )
};

export default DonationPot;

import React from 'react';

import Images from '../../../assets/images';

const CommonHeader = ({
  mainMode,
  step,
  edit,
  title,
  isLogout,
  extraAction
}) => {
  return (
    <div className={`common-header-container ${mainMode ? "white" : "green"}`}>
      {edit ? (
        <>
          {edit && <p className="edit-title">{title}</p>}
          {isLogout && <p className="log-out" onClick={extraAction}>Log out</p>}
        </>
      ) : (
        <>
          <div className="logo-wrapper">
            <img src={mainMode ? Images.greenLogo : Images.whiteLogo} alt="" />
          </div>
          <div className="step-item">
            <img src={mainMode ? Images.charityCheckedGreen : Images.charityCheckedWhite} alt="" />
            <div className="expand-line" />
          </div>
          <div className="step-item">
            <img src={step >= 2 ? mainMode ? Images.settingCheckedGreen : Images.settingCheckedWhite : Images.settingUnchecked} alt="" />
            <div className="expand-line" />
          </div>
          <div className="step-item">
            <img src={step >= 3 ? mainMode ? Images.paymentCheckedGreen : Images.paymentCheckedWhite : Images.paymentUnchecked} alt="" />
            <div className="expand-line" />
          </div>
          <div className="step-item">
            <img src={step >= 4 ? Images.setupCheckedWhite : Images.setupUnchecked} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default CommonHeader;

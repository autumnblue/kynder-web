import React, {useState} from 'react';

import CommonHeader from '../../common/header';
import Modal from '../../common/modal';
import Loader from '../../../animation/Loader';
import WhiteButton from '../../common/form/button/whiteButton';
import DefaultButton from '../../common/form/button/defaultButton';

import Images from '../../../assets/images';

const UnlinkMoneyhub = ({isLoading, unLinkMoneyhub}) => {
  const [isOpenModal, setOpenModal] = useState(false);

  if (isLoading) {
    return <Loader width={200} height={200} classes="animation-loader" />
  }

  return (
    <div className="unlink-moneyhub-container">
      <CommonHeader edit title="Connect your account" />
      <div className="unlink-moneyhub-wrapper">
        <div className="unlink-moneyhub-content">
          <p className="title">Connect to</p>
          <img src={Images.moneyhubLogo} alt="" />
          <p className="description">
            Kynder partners with Moneyhub to passively accrue your donations.
          </p>
          <p className="description">
            Your Moneynub account is already connected.<br />
            You can edit which transactions to accrue on, and which to ignore – it’s up to you.
          </p>
          <div className="btn-group">
            <button
              className="unlink-moneyhub"
              onClick={() => setOpenModal(true)}
            >
              Unlink Moneyhub
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
        mainMode={false}
        className="logout-modal"
      >
        <p className="title">Unlink Moneyhub</p>
        <p className="description">Are you sure you want to unlink your connection with Moneyhub?</p>
        <div className="btn-group">
          <WhiteButton title="No, save" action={() => setOpenModal(false)} />
          <DefaultButton title="Yes, unlink" mainMode={false} action={() => unLinkMoneyhub()} />
        </div>
      </Modal>
    </div>
  )
};

export  default UnlinkMoneyhub;

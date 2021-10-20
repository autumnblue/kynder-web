import React from 'react';
import { Modal } from 'react-responsive-modal';

const BaseModal = ({
  isOpenModal,
  setOpenModal,
  children,
  className,
  mainMode = false,
}) => {
  return (
    <div className="base-modal-container">
      <Modal
        open={isOpenModal}
        onClose={() => setOpenModal(false)}
        center
        classNames={{
          modal: `custom-kynder-modal ${className || ''} ${mainMode ? 'white' : 'green'}`,
          overlay: 'custom-kynder-modal-overlay'
        }}
        showCloseIcon={false}
      >
        {children}
      </Modal>
    </div>
  )
};

export default BaseModal;

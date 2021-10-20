import React from 'react';

import Loader from '../../../../animation/Loader';
import Images from '../../../../assets/images';

const GreenButton = ({isLoading, title, action, disabled, isMoneyhub = false}) => {
  return (
    <button className="custom-button green" disabled={isLoading || disabled} onClick={action}>
      {isLoading ? (
        <Loader animation="ButtonLoader" width={21} height={21} />
      ) : (
        <>
          <span>{title}</span>
          {isMoneyhub && <img src={Images.moneyhubButton} alt="" />}
        </>
      )}
    </button>
  )
};

export default GreenButton;
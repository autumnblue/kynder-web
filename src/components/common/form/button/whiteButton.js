import React from 'react';

import Loader from '../../../../animation/Loader';

const WhiteButton = ({isLoading, title, action}) => {
  return (
    <button className="custom-button white" disabled={isLoading} onClick={action}>
      {isLoading ? <Loader animation="ButtonLoader" width={21} height={21} /> : title}
    </button>
  )
};

export default WhiteButton;

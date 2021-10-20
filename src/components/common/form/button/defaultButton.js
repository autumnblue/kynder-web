import React from 'react';

const DefaultButton = ({title, action, mainMode}) => {
  return (
    <button
      className={`default-button ${mainMode ? 'white' : 'green'}`}
      onClick={action}
    >
      {title}
    </button>
  )
};

export default DefaultButton;

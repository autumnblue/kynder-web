import React from 'react';

const NormalInput = ({placeholder, type, value, onChange, error, errorText, textArea}) => {
  return (
    <div className="normal-input">
      {textArea ? (
        <textarea
          placeholder={placeholder}
          type={type || 'text'}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      ) : (
        <input
          placeholder={placeholder}
          type={type || 'text'}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      )}
      {error && !value && <p className="error-text wow slideIn">This field is required</p>}
      {error && value && <p className="error-text wow slideIn">{errorText}</p>}
    </div>
  )
};

export default NormalInput;

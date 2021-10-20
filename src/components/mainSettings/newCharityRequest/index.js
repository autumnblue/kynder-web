import React, {useState} from 'react';

import CommonHeader from '../../common/header';
import NormalInput from '../../common/form/input/normalInput';
import GreenButton from '../../common/form/button/greenButton';

const NewCharityRequest = ({isLoading, charityRequest}) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [website, onChangeWebsite] = useState('');
  const [description, onChangeDescription] = useState('');
  const [error, setError] = useState(false);
  const contactUsRequest = () => {
    const data = {
      name,
      email,
      website,
      description
    }
    if (!data.name || !data.description) {
      setError(true);
      return;
    }
    setError(false);
    charityRequest(data);
  };

  return (
    <div className="new-charity-container">
      <CommonHeader edit title="Suggest a new charity" />
      <div className="new-charity-wrapper">
        <div className="new-charity-content">
          <p className="title">Charity not yet in our database?</p>
          <p className="description">No problem. Fill out the details below and we'll get working right away on adding it in.</p>
          <div className="input-row">
            <NormalInput
              placeholder="Сharity name"
              value={name}
              onChange={onChangeName}
              error={error}
            />
          </div>
          <div className="input-row">
            <NormalInput
              placeholder="Сharity contact email (optional)"
              value={email}
              onChange={onChangeEmail}
            />
            <NormalInput
              placeholder="Сharity website (optional)"
              value={website}
              onChange={onChangeWebsite}
            />
          </div>
          <div className="input-row">
            <NormalInput
              placeholder="Anything else you'd like us to know?"
              value={description}
              onChange={onChangeDescription}
              error={error}
              textArea
            />
          </div>
          <div className="btn-group">
            <GreenButton
              title="Send"
              action={contactUsRequest}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default NewCharityRequest;

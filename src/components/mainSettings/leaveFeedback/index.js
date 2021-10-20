import React, {useState} from 'react';

import CommonHeader from '../../common/header';
import NormalInput from '../../common/form/input/normalInput';
import GreenButton from '../../common/form/button/greenButton';

const LeaveFeedback = ({isLoading, requestLeaveFeedback}) => {
  const [error, setError] = useState(false);
  const [question, onChangeQuestion] = useState('');

  const submitRequest = () => {
    if (!question) {
      setError(true);
      return;
    }
    setError(false);
    const data = {
      question,
    }
    requestLeaveFeedback(data);
  };

  return (
    <div className="leave-feedback-container">
      <CommonHeader edit title="Leave Feedback" />
      <div className="leave-feedback-wrapper">
        <div className="leave-feedback-content">
          <p className="title">Do you have an idea for Kynder?</p>
          <p className="description">Tell us about your idea to help us be the best for you.</p>
          <div className="input-row">
            <NormalInput
              placeholder="Anything else you'd like us to know?"
              value={question}
              onChange={onChangeQuestion}
              error={error}
              textArea
            />
          </div>
          <div className="btn-group">
            <GreenButton
              title="Send"
              action={submitRequest}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default LeaveFeedback;

import React, {useState} from 'react';

import CommonHeader from '../../common/header';
import NormalInput from '../../common/form/input/normalInput';
import GreenButton from '../../common/form/button/greenButton';

const AskQuestion = ({isLoading, requestAskQuestion}) => {
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
    };
    requestAskQuestion(data);
  };

  return (
    <div className="ask-question-container">
      <CommonHeader edit title="Ask a question" />
      <div className="ask-question-wrapper">
        <div className="ask-question-content">
          <p className="title">Still have questions?</p>
          <p className="description">Tell us about your problem below and we'll get right to solving it.</p>
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

export default AskQuestion;

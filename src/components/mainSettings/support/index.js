import React from 'react';
import {useHistory} from 'react-router-dom';

import CommonHeader from '../../common/header';
import Images from '../../../assets/images';

const Support = () => {
  const history = useHistory();

  const moveToAction = (route) => {
    history.push(route);
  };

  return (
    <div className="support-container">
      <CommonHeader edit title="Support" />
      <div className="support-wrapper">
        <div className="support-content">
          <p className="title">
            Do you need our help?
          </p>
          <p className="description">
            Select the section that interests you.
          </p>
          <div className="btn-group">
            <button
              className="cta-btn"
              onClick={() => moveToAction('/support/new-charity')}
            >
              <img src={Images.newChartiyIcon} alt="" />
              <p className="btn-title">
                Suggest a new charity
              </p>
              <img src={Images.rightArrowWhiteIcon} className="arrow" alt="" />
            </button>
            <button
              className="cta-btn"
              onClick={() => moveToAction('/support/ask-question')}
            >
              <img src={Images.askQuestionIcon} alt="" />
              <p className="btn-title">
                Ask a question
              </p>
              <img src={Images.rightArrowWhiteIcon} className="arrow" alt="" />
            </button>
            <button
              className="cta-btn"
              onClick={() => moveToAction('/support/leave-feedback')}
            >
              <img src={Images.leaveFeedbackIcon} alt="" />
              <p className="btn-title">
                Leave Feedback
              </p>
              <img src={Images.rightArrowWhiteIcon} className="arrow" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Support;

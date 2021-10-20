import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';

import WhiteButton from '../../components/common/form/button/whiteButton';
import {onboardingData} from '../../utils/variable';

const Onboarding = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const history = useHistory();
  return (
    <div className="onboarding-container">
      <Carousel
        swipeable
        showStatus={false}
        showArrows={false}
        infiniteLoop
        showThumbs={false}
        emulateTouch
        onChange={(param) => setSelectedItem(param)}
      >
        {onboardingData.map((item, index) => {
          return (
            <div key={index.toString()} className="carousel-item">
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
              <p className="sub-description">{item.subDescription}</p>
            </div>
          )
        })}
      </Carousel>
      <div className="btn-wrapper">
        <WhiteButton
          title={selectedItem === 2 ? "Continue" : "Skip"}
          action={() => history.push('/get-started')}
        />
      </div>
    </div>
  )
};

export default Onboarding;

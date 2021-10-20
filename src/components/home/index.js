import React from 'react';
import {useHistory} from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';

import {homeCarouselData} from '../../utils/variable';
import Images from '../../assets/images';

const HomePage = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      <div className="carousel-header">
        <img src={Images.homeHeaderLogo} alt="" />
        <img
          src={Images.homeSettingsIcon}
          onClick={() => history.push('/settings')}
          alt=""
        />
      </div>
      <Carousel
        swipeable
        showStatus={false}
        showArrows={false}
        infiniteLoop
        showThumbs={false}
        emulateTouch
      >
        {homeCarouselData.map((item, index) => {
          return (
            <div key={index.toString()} className="carousel-item">
              <p className="description">{item.description}</p>
              <p className={`name ${(index === 1 || index === 5) ? 'black' : 'white'}`}>{item.name}</p>
              <img src={item.img} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
};

export default HomePage;

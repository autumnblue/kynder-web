import React from 'react';

import CommonHeader from '../../common/header';
import Images from '../../../assets/images';

const About = () => {
  const downloadApp = (link) => {
    window.open(
      link,
      '_blank'
    )
  };
  return (
    <div className="about-container">
      <CommonHeader edit title="About Kynder" />
      <div className="about-wrapper">
        <div className="about-content">
          <div className="section-2">
            <div className="left wow bounceInLeft">
              <img src={Images.kynderMobile2.default} alt="" className="kynder2" />
            </div>
            <div className="right wow bounceInRight">
              <p className="title green">What is Kynder?</p>
              <p className="description green">
                Kynder is a simple way of giving to the causes that matter most to you.
              </p>
              <p className="description green">
                Choose a charity, an amount to give, and Kynder will do the rest. Each time you make a purchase, Kynder accrues a portion in your donation pot.
              </p>
            </div>
          </div>
          <div className="section-3">
            <div className="left wow bounceInLeft">
              <p className="title white">How it works</p>
              <p className="description white">
                Kynder works by allowing users to connect their bank account to a chosen charity via OpenBanking. It will then charge a nominated percentage of the users monthly spend and donate it to the Charity of their choice. Kynder does not track against Insurance, Utilities, Rent, Mortgage payments or any other debt repayments.
              </p>
              <p className="description white">
                So if a user has spent £1000 in a month (on top of the categories listed above) and set their donation level to 1%, Kynder will donate £10 on their behalf at the first day of the following month. If the user spends less the donation decreases, if they spend more, the charity shares in that benefit. This way, every coffee, cab and online shopping splurge becomes a micro-donation and a slightly Kynder act.
              </p>
            </div>
            <div className="right wow bounceInRight">
              <img src={Images.kynderMobile2.default} alt="" className="kynder2" />
            </div>
          </div>
          <div className="section-4">
            <div className="left wow bounceInLeft">
              <img src={Images.kynderMobile2.default} alt="" className="kynder2" />
            </div>
            <div className="right wow bounceInRight">
              <p className="title">Just to let you know</p>
              <p className="description">
                Kynder does not store any of your financial or personal information.
              </p>
              <p className="description">
                Whilst Kynder does charge a 1.5% fee on donations, it does not charge the charities anything for use of the platform. So everyone, big or small can benefit from your Kyndness
              </p>
            </div>
          </div>
          <div className="section-5">
            <div className="left">
              <p className="title white">What’s next?</p>
              <p className="description white">
                See your spending and pause or adjust your donation levels whenever you like – or just let Kynder do its job in the background.
              </p>
              <p className="description white">
                We call it passive philanthropy.
              </p>
            </div>
            <div className="right">
              <img src={Images.macbook.default} alt="" className="macbook" />
              <img src={Images.kynderMobile3.default} alt="" className="kynder3" />
            </div>
          </div>
          <div className="section-6">
            <div className="left">
              <img src={Images.kynderAppIcon} alt="" />
              <p className="description">Be Kynder in your everyday life. Download the app now.</p>
              <div className="download-app">
                <img
                  src={Images.appleStore}
                  alt=""
                  onClick={() => downloadApp('https://apps.apple.com/gb/app/kynder/id1543859545')}
                />
                <img
                  src={Images.googlePlayStore}
                  alt=""
                  onClick={() => downloadApp('https://play.google.com/store/apps/details?id=com.kynder.app&gl=GB')}
                />
              </div>
            </div>
            <div className="right">
              <img src={Images.kynderMobile4.default} alt="" className="kynder4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;

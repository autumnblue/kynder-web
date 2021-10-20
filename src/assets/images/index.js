/**
 * header images
 */
import whiteLogo from './header/white_logo.svg';
import greenLogo from './header/green_logo.svg';
import charityCheckedGreen from './header/charity_checked_green.svg';
import charityCheckedWhite from './header/charity_checked_white.svg';
import paymentCheckedGreen from './header/payment_checked_green.svg';
import paymentCheckedWhite from './header/payment_checked_white.svg';
import paymentUnchecked from './header/payment_unchecked.svg';
import settingCheckedGreen from './header/setting_checked_green.svg';
import settingCheckedWhite from './header/setting_checked_white.svg';
import settingUnchecked from './header/setting_unchecked.svg';
import setupCheckedWhite from './header/setup_checked_white.svg';
import setupUnchecked from './header/setup_unchecked.svg';

import homeHeaderLogo from './home/settings_logo.svg';
import homeSettingsIcon from './home/settings.svg';

/**
 * auth images
 */
import authLogo from './auth/auth_logo.svg';

/**
 * getStarted images
 */
import getStarted1 from './getStarted/charity.svg';
import getStarted2 from './getStarted/donation.svg';
import getStarted3 from './getStarted/card.svg';
import getStarted4 from './getStarted/done.svg';

/**
 * mainSettings images
 */
import settingCharityIcon from './settings/charity.svg';
import settingDonationLevelIcon from './settings/donation_level.svg';
import settingPaymentIcon from './settings/payment.svg';
import settingDonationPotIcon from './settings/donation_pot.svg';
import settingDonationPauseIcon from './settings/donation_pause.svg';
import settingDonationCancelIcon from './settings/donation_cancel.svg';
import settingArrowRightIcon from './settings/right_arrow.svg';
import moneyhubLogo from './settings/moneyhub_logo.svg';
import newChartiyIcon from './settings/new_charity.svg';
import askQuestionIcon from './settings/ask_question.svg';
import leaveFeedbackIcon from './settings/leave_feedback.svg';
import rightArrowWhiteIcon from './settings/right_arrow_white.svg';
import expandIcon from './settings/expand.svg';
import pauseDonationIcon from './settings/pause_donation.svg';
import cancelDonationIcon from './settings/cancel_donation.svg';
import moneyhubButton from './settings/moneyhub_button.svg';

/**
 * dashboard images
 */
import kynderAppIcon from './dashboard/kynder_app_icon.svg';
import appleStore from './dashboard/apple_store.svg';
import googlePlayStore from './dashboard/google_play_store.svg';


/**
 * Get device resolution
 */
const getResolution = () => {
  const retinaSuffix = window.devicePixelRatio;
  if (retinaSuffix === 1) {
    return 1;
  } else if (2 >= retinaSuffix && retinaSuffix > 1) {
    return 2;
  } else if (3 >= retinaSuffix && retinaSuffix > 2) {
    return 3;
  } else {
    return 3;
  }
};

const kynderMobile1 = require(`./dashboard/kynder1@${getResolution()}x.png`);
const kynderMobile2 = require(`./dashboard/kynder2@${getResolution()}x.png`);
const kynderMobile3 = require(`./dashboard/kynder3@${getResolution()}x.png`);
const kynderMobile4 = require(`./dashboard/kynder4@${getResolution()}x.png`);
const macbook = require(`./dashboard/macbook@${getResolution()}x.png`);

/**
 * charities images
 */
const charityBackground = require(`./charities/background@${getResolution()}x.png`);

/**
 * home images
 */
const homeCarousel1 = require(`./home/home1@${getResolution()}x.png`);
const homeCarousel2 = require(`./home/home2@${getResolution()}x.png`);
const homeCarousel3 = require(`./home/home3@${getResolution()}x.png`);
const homeCarousel4 = require(`./home/home4@${getResolution()}x.png`);
const homeCarousel5 = require(`./home/home5@${getResolution()}x.png`);
const homeCarousel6 = require(`./home/home6@${getResolution()}x.png`);
const homeCarousel7 = require(`./home/home7@${getResolution()}x.png`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  whiteLogo,
  greenLogo,
  kynderAppIcon,
  appleStore,
  googlePlayStore,
  kynderMobile1,
  kynderMobile2,
  kynderMobile3,
  kynderMobile4,
  macbook,
  authLogo,
  getStarted1,
  getStarted2,
  getStarted3,
  getStarted4,
  charityBackground,
  charityCheckedGreen,
  charityCheckedWhite,
  paymentCheckedGreen,
  paymentCheckedWhite,
  paymentUnchecked,
  settingCheckedGreen,
  settingCheckedWhite,
  settingUnchecked,
  setupCheckedWhite,
  setupUnchecked,
  homeCarousel1,
  homeCarousel2,
  homeCarousel3,
  homeCarousel4,
  homeCarousel5,
  homeCarousel6,
  homeCarousel7,
  homeHeaderLogo,
  homeSettingsIcon,
  settingCharityIcon,
  settingDonationLevelIcon,
  settingPaymentIcon,
  settingDonationPotIcon,
  settingDonationPauseIcon,
  settingDonationCancelIcon,
  settingArrowRightIcon,
  moneyhubLogo,
  newChartiyIcon,
  askQuestionIcon,
  leaveFeedbackIcon,
  rightArrowWhiteIcon,
  expandIcon,
  pauseDonationIcon,
  cancelDonationIcon,
  moneyhubButton,
}

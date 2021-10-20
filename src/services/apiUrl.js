/**
 * api base url
 * type { String }
 */
const {REACT_APP_BASE_URL} = process.env;

const VERSION_URL = `${REACT_APP_BASE_URL}/v1`;

const AUTH_ENDPOINTS = `${VERSION_URL}/users`;
export const LOG_IN_ENDPOINT = `${AUTH_ENDPOINTS}/login`;
export const SIGN_UP_ENDPOINT = `${AUTH_ENDPOINTS}/signup`;
export const FORGOT_PASSWORD_ENDPOINT = `${AUTH_ENDPOINTS}/forget`;
export const VERIFY_CODE_ENDPOINT = `${AUTH_ENDPOINTS}/verifyRecoveryCode`;
export const RESET_PASSWORD_ENDPOINT = `${AUTH_ENDPOINTS}/reset`;
export const CHANGE_PASSWORD_ENDPOINT = `${AUTH_ENDPOINTS}/changePassword`;

export const CHARITY_ENDPOINTS = `${VERSION_URL}/charity`;
export const GET_ALL_CHARITIES_ENDPOINT = `${CHARITY_ENDPOINTS}/all`;
export const SELECT_CHARITY_ENDPOINT = `${CHARITY_ENDPOINTS}/select`;
export const CONTACT_US_FOR_CHARITY_ENDPOINT = `${CHARITY_ENDPOINTS}/request`;

export const SET_DONATION_LEVEL_ENDPOINT = `${VERSION_URL}/donation-level`;
export const REQUEST_DONATION_STATUS_ENDPOINT = `${VERSION_URL}/donation-status`;
export const RESCHEDULE_DONATION_ENDPOINT = `${VERSION_URL}/donation-reschedule`;

export const MONEYHUB_ENDPOINTS = `${VERSION_URL}/moneyhub`;
export const GET_ALL_BANK_ENDPOINT = `${MONEYHUB_ENDPOINTS}/connections`;
export const BANK_AUTH_ENDPOINT = `${MONEYHUB_ENDPOINTS}/auth`;
export const MONEYHUB_SUCCESS_ENDPOINT = `${MONEYHUB_ENDPOINTS}/success`;
export const UNLINK_MONEYHUB_ENDPOINT = `${MONEYHUB_ENDPOINTS}/unlink`;

export const CARD_REQUEST_ENDPOINT = `${VERSION_URL}/card-request`;
export const CARD_STATUS_ENDPOINT = `${VERSION_URL}/card-status`;

export const REQUEST_ASK_QUESTION_ENDPOINT = `${VERSION_URL}/faq`;
export const REQUEST_LEAVE_FEEDBACK_ENDPOINT = `${VERSION_URL}/feedback`;

export const GET_SETTINGS_ENDPOINT = `${VERSION_URL}/settings`;
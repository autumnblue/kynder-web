import {toast} from 'react-toastify';

export const getResolution = () => {
  const retinaSuffix = window.devicePixelRatio;
  if (retinaSuffix === 1) {
    return 1;
  } else if (2 >= retinaSuffix > 1) {
    return 2;
  } else if (3 >= retinaSuffix > 2) {
    return 3;
  } else {
    return 3;
  }
};

export const notification = (type, message) => {
  toast.configure({
    autoClose: 3000,
    draggable: false,
    position: 'top-right',
    hideProgressBar: true
  });

  toast[type](message);

  return `${type}, ${message}`;
};

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phoneNumber) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phoneNumber).toLowerCase());
};

export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
import {Dimensions, Platform} from 'react-native';
import {check, RESULTS, request} from 'react-native-permissions';

export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((dimen.height === 780 || dimen.width === 780)
      || (dimen.height === 812 || dimen.width === 812)
      || (dimen.height === 844 || dimen.width === 844)
      || (dimen.height === 896 || dimen.width === 896)
      || (dimen.height === 926 || dimen.width === 926))
  );
};

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const checkPermission = async (permission, onAuthorized, showAlert) => {
  check(permission).then(async response => {
    if (response === RESULTS.GRANTED) {
      if (onAuthorized) {
        onAuthorized();
      }
    } else if (response === RESULTS.BLOCKED) {
      if (showAlert) {
        showAlert();
      }
    } else {
      try {
        const status = await request(permission);
        if (status === RESULTS.GRANTED) {
          if (onAuthorized) {
            onAuthorized();
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  }).catch(error => console.log('error permission: ', error));
};

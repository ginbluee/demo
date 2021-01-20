import {scale} from 'react-native-size-matters';
import {Platform} from 'react-native';
import {isIphoneX} from './Utils';

const Fonts = {
  defaultThin: {
    fontFamily: 'Montserrat-Thin',
  },
  defaultRegular: {
    fontFamily: 'Montserrat-Regular',
  },
  defaultMedium: {
    fontFamily: 'Montserrat-Medium',
  },
  defaultBold: {
    fontFamily: 'Montserrat-Bold',
  },
  defaultSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  defaultExtraBold: {
    fontFamily: 'Montserrat-ExtraBold',
  },
  defaultItalic: {
    fontFamily: 'Montserrat-MediumItalic',
  },
};

class CommonColors {
  static white = '#FFFFFF';
  static black = '#000000';
  static transparent = 'transparent';
  static facebook = '#5C78FF';
  static gray_1 = '#A1AFC3';
  static gray_2 = '#979797';
}

class CommonSize {
  static paddingTopHeader = Platform.OS === 'ios' ? (isIphoneX() ? scale(34) : scale(20)) : 0; //StatusBar.currentHeight;

  static headerHeight = scale(65) + CommonSize.paddingTopHeader;

  static paddingBottom = isIphoneX() ? scale(20) : 0;
}

export {CommonSize, CommonColors, Fonts};

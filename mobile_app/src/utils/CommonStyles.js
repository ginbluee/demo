import {scale} from 'react-native-size-matters';
import {Dimensions, Platform} from 'react-native';
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
  static facebook = '#3B5998';
  static gray_1 = '#A1AFC3';
  static gray_2 = '#979797';
  static bgColor = '#F6F7FB';
  static purple = '#7C42FF';
}

class CommonSize {
  static paddingTopHeader = Platform.OS === 'ios' ? (isIphoneX() ? scale(34) : scale(20)) : 0; //StatusBar.currentHeight;

  static headerHeight = scale(65) + CommonSize.paddingTopHeader;

  static paddingBottom = isIphoneX() ? scale(20) : 0;

  static screenWidth = Dimensions.get('window').width;

  static screenHeight = Dimensions.get('window').height;
}

export {CommonSize, CommonColors, Fonts};

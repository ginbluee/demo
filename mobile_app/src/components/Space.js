import React from 'react';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';

const Space = ({width, height}) => {
  return (
    <View
      style={[
        width ? {width: scale(width)} : {},
        height ? {height: scale(height)} : {},
      ]}
    />
  );
};

export default Space;

import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {icon_back} from '../../assets/images';
import {scale, ScaledSheet} from "react-native-size-matters";

const BackButton = ({icon, size, onPress, navigation}) => {
  const onBack = () => {
    const {goBack} = navigation;

    goBack();
  };

  return (
    <TouchableOpacity
      hitSlop={{top: 30, right: 30, left: 30, bottom: 30}}
      onPress={onPress || onBack}
      style={styles.container}
    >
      <Image
        source={icon || icon_back}
        resizeMode="contain"
        style={{width: size || scale(28), height: size || scale(28), marginLeft: - scale(6)}}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = ScaledSheet.create({
  container: {
    marginLeft: '20@s',
  },
});

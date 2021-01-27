import {Image, Text, TouchableOpacity} from "react-native";
import {CommonColors, CommonSize, Fonts} from "@app/utils/CommonStyles";
import React from "react";
import {scale, ScaledSheet} from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";

const Button = (props) => {
  const {icon, title, onPress, bgColor, textColor, startColor, endColor} = props;

  return (
    <TouchableOpacity
      style={[styles.container, bgColor ? {backgroundColor: bgColor} : null]}
      onPress={onPress}
    >
      {startColor && endColor && (
        <LinearGradient
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          colors={[startColor, endColor]}
          style={styles.gradient}
        />
      )}
      {icon && <Image
        source={icon}
        style={styles.iconButton}
      />}
      <Text style={[
        styles.textButton,
        textColor ? {color: textColor} : null,
        !icon ? {...Fonts.defaultBold} : null,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: CommonSize.screenWidth - scale(40),
    height: '48@s',
    borderRadius: '25@s',
    backgroundColor: CommonColors.facebook,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: CommonColors.black,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '25@s',
  },
  iconButton: {
    position: 'absolute',
    left: '20@s',
    width: '24@s',
    height: '25@s',
  },
  textButton: {
    ...Fonts.defaultMedium,
    fontSize: '15@ms',
    color: CommonColors.white,
  },
});

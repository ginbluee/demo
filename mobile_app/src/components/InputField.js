import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { scale, ScaledSheet } from "react-native-size-matters";
import { CommonColors, CommonSize, Fonts } from "@app/utils/CommonStyles";

const InputField = (props) => {
  const {iconLeft, refField} = props;

  const onFocus = () => {
    if (refField) refField.current.focus();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onFocus}
    >
      <Image
        source={iconLeft}
        style={styles.icon}
      />
      <TextInput
        ref={refField}
        {...props}
        style={styles.textInput}
        placeholderTextColor={CommonColors.gray_1}
      />
    </TouchableOpacity>
  );
};

export default InputField;

const styles = ScaledSheet.create({
  container: {
    height: '48@s',
    width: CommonSize.screenWidth - scale(40),
    backgroundColor: CommonColors.white,
    borderRadius: '8@s',
    paddingHorizontal: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: CommonColors.gray_2,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  icon: {
    width: '24@s',
    height: '24@s',
    marginRight: '10@s',
  },
  textInput: {
    flex: 1,
    ...Fonts.defaultRegular,
    color: CommonColors.black,
    fontSize: '14@ms',
  },
});

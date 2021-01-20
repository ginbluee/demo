import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from "react-native-size-matters";
import {CommonColors, Fonts} from "@app/utils/CommonStyles";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Fonts.defaultRegular,
  },
});

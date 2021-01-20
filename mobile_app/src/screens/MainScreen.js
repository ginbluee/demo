import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from "react-native-size-matters";
import {CommonColors, Fonts} from "../utils/CommonStyles";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

export default MainScreen;

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

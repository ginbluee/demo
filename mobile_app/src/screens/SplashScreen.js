import React, {useEffect} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {ScaledSheet} from "react-native-size-matters";
import Splash from 'react-native-splash-screen'
import {SCREEN_NAME} from "@app/utils/Const";
import {on_boarding} from "@app/assets/images";

const {width, height} = Dimensions.get('window');

const SplashScreen = (props) => {
  useEffect(() => {
    Splash.hide();
    setTimeout(() => {
      props.navigation.replace(SCREEN_NAME.LOGIN_SOCIAL_SCREEN);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={on_boarding}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  image: {
    width,
    height,
  },
});

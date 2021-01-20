import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {SCREEN_NAME} from "./utils/Const";
//screen
import SplashScreen from "./screens/SplashScreen";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/login/LoginScreen";
import LoginSocialScreen from "./screens/login/LoginSocialScreen";

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAME.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={SCREEN_NAME.MAIN_SCREEN} component={MainScreen} />
      <Stack.Screen name={SCREEN_NAME.LOGIN_SOCIAL_SCREEN} component={LoginSocialScreen} />
      <Stack.Screen name={SCREEN_NAME.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;

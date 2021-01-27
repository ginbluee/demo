import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {SCREEN_NAME} from "@app/utils/Const";
//screen
import SplashScreen from "./screens/SplashScreen";
import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/login/LoginScreen";
import LoginSocialScreen from "./screens/login/LoginSocialScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import {Loading} from "@app/components";
import {useSelector} from "react-redux";

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAME.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={SCREEN_NAME.MAIN_SCREEN} component={MainScreen} />
      <Stack.Screen name={SCREEN_NAME.LOGIN_SOCIAL_SCREEN} component={LoginSocialScreen} />
      <Stack.Screen name={SCREEN_NAME.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={SCREEN_NAME.REGISTER_SCREEN} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  const system = useSelector(state => state.system);
  const {showLoading} = system;

  return (
    <NavigationContainer>
      <MainStack />
      {showLoading && <Loading/>}
    </NavigationContainer>
  );
};

export default StackNavigator;

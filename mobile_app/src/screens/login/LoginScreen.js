import React, {useState, useRef} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {scale, ScaledSheet} from "react-native-size-matters";
import {useDispatch} from "react-redux";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import I18n from '@app/i18n';
import {CommonColors, CommonSize, Fonts} from "@app/utils/CommonStyles";
import {ic_facebook, ic_google, ic_password, ic_username} from "@app/assets/images";
import {Space, BackButton, InputField, Button} from "@app/components";
import {SCREEN_NAME} from "@app/utils/Const";
import {setLoading} from "@app/redux/system/system.action";

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const focus_email = useRef(null);
  const focus_password = useRef(null);
  const dispatch = useDispatch();

  const renderHeader = () => {
    return (
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>
          {I18n.t('Common.hello')}
          <Text style={{color: CommonColors.purple}}>
            {` ${I18n.t('Common.there')}!`}
          </Text>
        </Text>
        <Text style={styles.textSubHeader}>
          {I18n.t('LoginScreen.sign_in_to_continue')}
        </Text>
      </View>
    );
  };

  const renderInput = () => {
    return (
      <>
        <InputField
          refField={focus_email}
          value={username}
          onChangeText={onChangeUsername}
          placeholder={I18n.t('LoginScreen.username')}
          iconLeft={ic_username}
        />
        <Space height={scale(15)}/>
        <InputField
          refField={focus_password}
          value={password}
          onChangeText={onChangePassword}
          placeholder={I18n.t('LoginScreen.password')}
          iconLeft={ic_password}
          secureTextEntry
        />
      </>
    );
  };

  const onChangeUsername = (value) => setUsername(value);
  const onChangePassword = (value) => setPassword(value);

  const renderForgot = () => {
    return (
      <TouchableOpacity style={styles.buttonForgot}>
        <Text style={styles.textForgot}>
          {I18n.t('LoginScreen.forgot_password')}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderButtonLogin = () => {
    return (
      <Button
        title={I18n.t('LoginSocialScreen.sign_in')}
        startColor={'#986EFF'}
        endColor={'#6D5CFF'}
        onPress={onLogin}
      />
    );
  };

  const onLogin = () => {
    dispatch(setLoading(true));
  };

  const renderLoginSocial = () => {
    return (
      <View>
        <Button
          icon={ic_facebook}
          title={I18n.t('LoginSocialScreen.login_fb')}
        />
        <Space height={15}/>
        <Button
          icon={ic_google}
          title={I18n.t('LoginSocialScreen.login_gg')}
          bgColor={CommonColors.white}
          textColor={CommonColors.gray_1}
        />
      </View>
    );
  };

  const renderSignUp = () => {
    return (
      <View style={styles.viewRegister}>
        <Text style={styles.textRegister}>{`${I18n.t('LoginScreen.dont_have_account')}? `}</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={[styles.textRegister, {color: CommonColors.purple}]}>{I18n.t('LoginSocialScreen.sign_up')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const goToRegister = () => {
    navigation.navigate(SCREEN_NAME.REGISTER_SCREEN);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <BackButton navigation={navigation}/>
      <KeyboardAwareScrollView
        extraHeight={scale(80)}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: scale(20), paddingBottom: scale(60)}}
      >
        {renderHeader()}
        {renderInput()}
        {renderForgot()}
        {renderButtonLogin()}
        {renderSignUp()}
        {renderLoginSocial()}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.bgColor,
    paddingTop: CommonSize.paddingTopHeader,
    paddingBottom: CommonSize.paddingBottom,
  },
  viewHeader: {
    paddingTop: '20@s',
    paddingBottom: '100@s',
  },
  textHeader: {
    ...Fonts.defaultBold,
    fontSize: '36@ms',
    lineHeight: '43@s',
    color: CommonColors.black,
  },
  textSubHeader: {
    ...Fonts.defaultRegular,
    color: CommonColors.gray_2,
    paddingLeft: '2@s',
  },
  buttonForgot: {
    flexDirection: 'row',
    width: '120@s',
    paddingTop: '10@s',
    paddingBottom: '20@s',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  textForgot: {
    ...Fonts.defaultRegular,
    color: CommonColors.gray_1,
    fontSize: '13@ms',
  },
  viewRegister: {
    flexDirection: 'row',
    paddingTop: '24@s',
    paddingBottom: '40@s',
    justifyContent: 'center',
  },
  textRegister: {
    ...Fonts.defaultMedium,
    fontSize: '14@ms',
    color: CommonColors.gray_1,
  },
});

import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {moderateScale, scale, ScaledSheet} from "react-native-size-matters";
import {CommonColors, CommonSize, Fonts} from "@app/utils/CommonStyles";
import {ic_facebook, ic_google, login_social_bg, login_social_image} from "../../../assets/images";
import I18n from '../../i18n';
import Space from "../../components/Space";
import {SCREEN_NAME} from "@app/utils/Const";

const {width, height} = Dimensions.get('window');

const LoginSocialScreen = (props) => {
  const renderBackground = () => {
    return (
      <View style={styles.background}>
        <Image
          source={login_social_image}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={login_social_bg}
          style={[styles.image, {position: 'absolute'}]}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={[styles.textHeader, {fontSize: moderateScale(36)}]}>{I18n.t('Common.hello')}</Text>
        <Text style={styles.textHeader}>{I18n.t('Common.there')}</Text>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.content}>
        {buttonLoginSocial(ic_facebook, I18n.t('LoginSocialScreen.login_fb'))}
        <Space height={15}/>
        {buttonLoginSocial(ic_google, I18n.t('LoginSocialScreen.login_gg'), CommonColors.white, CommonColors.gray_1)}
        {renderOr()}
        {buttonLoginSocial(null, I18n.t('LoginSocialScreen.sign_up').toUpperCase(), CommonColors.black)}
        {renderLogin()}
      </View>
    );
  };

  const buttonLoginSocial = (icon, title, bgColor, textColor) => {
    return (
      <TouchableOpacity
        style={[styles.buttonLoginSocial, bgColor ? {backgroundColor: bgColor} : null]}
        onPress={() => {}}
      >
        <Image
          source={icon}
          style={styles.icon_login}
        />
        <Text
          style={[styles.textLoginSocial, textColor ? {color: textColor} : null, !icon ? {...Fonts.defaultBold} : null]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderOr = () => {
    return (
      <View style={styles.viewOr}>
        <View style={styles.line}/>
        <Text style={styles.textOr}>{I18n.t('LoginSocialScreen.or').toLowerCase()}</Text>
        <View style={styles.line}/>
      </View>
    );
  };

  const renderLogin = () => {
    return (
      <View style={styles.viewLogin}>
        <Text style={styles.textLogin}>{`${I18n.t('LoginSocialScreen.already_account')}? `}</Text>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={goToLogin}
        >
          <Text style={styles.textLogin}>{I18n.t('LoginSocialScreen.sign_in')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const goToLogin = () => {
    props.navigation.navigate(SCREEN_NAME.LOGIN_SCREEN);
  };

  return (
    <View style={styles.container}>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default LoginSocialScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
  },
  background: {
    flex: 1,
    position: 'absolute',
  },
  image: {
    width,
    height,
  },
  header: {
    position: 'absolute',
    top: scale(52) + CommonSize.paddingTopHeader,
    left: '25@s',
    right: '25@s',
  },
  textHeader: {
    ...Fonts.defaultBold,
    color: CommonColors.white,
    fontSize: '55@ms',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: CommonSize.paddingBottom + scale(25),
  },
  buttonLoginSocial: {
    flexDirection: 'row',
    width: width - scale(50),
    height: '48@s',
    borderRadius: '25@s',
    backgroundColor: CommonColors.facebook,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_login: {
    position: 'absolute',
    left: '20@s',
    width: '24@s',
    height: '25@s',
  },
  textLoginSocial: {
    ...Fonts.defaultMedium,
    fontSize: '15@ms',
    color: CommonColors.white,
  },
  viewOr: {
    flexDirection: 'row',
    paddingVertical: '20@s',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textOr: {
    ...Fonts.defaultItalic,
    fontSize: '16@ms',
    color: CommonColors.white,
    paddingHorizontal: '20@s',
    fontStyle: 'italic',
  },
  line: {
    width: '80@s',
    height: '1@s',
    borderRadius: '0.5@s',
    backgroundColor: CommonColors.gray_1,
  },
  viewLogin: {
    flexDirection: 'row',
    paddingTop: '24@s',
  },
  buttonLogin: {
    borderBottomWidth: '1@s',
    borderBottomColor: CommonColors.white,
  },
  textLogin: {
    ...Fonts.defaultMedium,
    fontSize: '15@ms',
    color: CommonColors.white,
  },
});

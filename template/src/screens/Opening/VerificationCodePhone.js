import {CustomText, colors, gs, sizes} from '~components';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPTextView from 'react-native-otp-textinput';
import {calcWidth, fontSize, goBack} from '~/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

const VerificationCodePhone = () => {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(0);
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();
  useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 4 digits long
    let timer = setTimeout(() => {
      setShow(true);
    }, 60000);
    if (value.length === 4) {
      console.log(value);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  const Header = () => (
    <TouchableOpacity style={ListHeader} onPress={() => goBack()}>
      <MaterialCommunityIcons
        name={'arrow-left'}
        color={colors.color9}
        size={sizes.f24}
      />
      <CustomText
        style={{marginLeft: 20}}
        f18
        children={t('verificationCodePhoneText1')}
      />
    </TouchableOpacity>
  );
  const {Container, KeyboardAvoid, ListHeader, TextInputStyle} = styles;
  return (
    <KeyboardAwareScrollView
      style={[KeyboardAvoid, {paddingTop: insets.top}]}
      keyboardShouldPersistTaps="always">
      <View style={Container}>
        <Header />
        {/* <View style={{...gs.asc}}>
          <VectorImage source={logoHorizontal} />
        </View> */}
        <CustomText
          f24
          style={{
            marginVertical: 20,
            width: calcWidth(100) - 40,
            ...gs.asc,
          }}
          fSemibold
          children={t('verificationCodePhoneText2')}
        />
        <CustomText
          f14
          style={{
            marginVertical: 20,
            width: calcWidth(100) - 40,
            ...gs.asc,
            color: colors.color13,
          }}
          children={t('verificationCodePhoneText3')}
        />
        <CustomText
          f20
          style={{
            width: calcWidth(100) - 40,
            ...gs.asc,
            ...gs.textCc,
          }}
          fSemibold
          children={'0 536 633 6175'}
        />
        <View
          style={{
            marginHorizontal: 55,
            backgroundColor: colors.White,
            borderRadius: 10,
            paddingVertical: 20,
          }}>
          <OTPTextView
            ref={e => (otpInput = e)}
            textInputStyle={TextInputStyle}
            handleTextChange={text => setValue(text)}
            keyboardType="numeric"
            tintColor={colors.color19}
            offTintColor={colors.color13}
            containerStyle={{
              ...gs.asc,
            }}
          />
          <TouchableOpacity
            onPress={() => console.log('kodu yeniden gönder')}
            disabled={!show}
            style={[
              {
                marginTop: 25,
                backgroundColor: colors.color19,
                marginHorizontal: 26,
                paddingVertical: 12,
                borderRadius: 25,
                ...gs.jccaic,
              },
              !show && {backgroundColor: colors.color13},
            ]}>
            <CustomText
              f14
              children={t('verificationCodePhoneText4')}
              style={{color: colors.color7}}
            />
          </TouchableOpacity>
          <View style={{...gs.asc, marginTop: 20}}>
            <CountdownCircleTimer
              size={90}
              key={key}
              isPlaying
              strokeWidth={5}
              duration={60}
              colors={['#656F77', '#656F77', '#656F77', '#656F77']}
              colorsTime={[7, 5, 2, 0]}
              onComplete={() => [true, 1000]}>
              {({remainingTime}) => <CustomText f26 children={remainingTime} />}
            </CountdownCircleTimer>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  KeyboardAvoid: {
    flex: 1,
    backgroundColor: colors.color7,
  },
  Container: {
    backgroundColor: colors.color7,
  },
  ListHeader: {
    width: calcWidth(100),
    height: fontSize(50),
    paddingLeft: 20,
    ...gs.aic,
    ...gs.fdr,
    backgroundColor: colors.color7,
  },
  TextInputStyle: {
    backgroundColor: colors.color7,
    width: fontSize(40),
    height: fontSize(40),
    fontSize: sizes.f16,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 10,
    ...gs.asc,
  },
});
export {VerificationCodePhone};

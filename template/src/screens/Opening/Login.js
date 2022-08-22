import {
  CustomButton,
  CustomInputLabel,
  CustomText,
  colors,
  gs,
  sizes,
} from '~/components';
import {EmailContent, LoginContent, PasswordContent} from '~/assets';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {calcHeight, calcWidth, fontSize, goBack, navigate} from '~/utils';

import {EmailLoginScreen} from '~/schema';
import {Formik} from 'formik';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {rootStack} from '~/config';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

const Login = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  const Actions = useActions();
  const [formikInitialValues, setFormikinitialValues] = useState({
    email: '',
    password: '',
  });
  const {t} = useTranslation();
  return (
    <View style={[styles.sliderContainer, {paddingTop: insets.top}]}>
      <View style={{width: '100%'}}>
        <LoginContent />
        <TouchableOpacity
          style={{
            ...gs.posAbs,
            left: 20,
            top: 10,
            padding: 10,
            zIndex: 9999,
          }}
          onPress={() => goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={colors.color9}
            size={sizes.f26}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...gs.posAbs,
            right: 20,
            top: 10,
            padding: 10,
            zIndex: 9999,
          }}
          onPress={() => {
            // Actions.setInitial();
            navigate(rootStack.main);
          }}>
          <MaterialCommunityIcons
            name="close"
            color={colors.color9}
            size={sizes.f26}
          />
        </TouchableOpacity>
      </View>
      <Formik
        validationSchema={EmailLoginScreen}
        initialValues={formikInitialValues}
        onSubmit={values => {
          console.log(values);
        }}>
        {({handleSubmit, values, isValid, errors}) => (
          <View style={Container}>
            <CustomInputLabel
              name={'email'}
              containerProps={{
                keyboardType: 'email-address',
                label: t('emailText'),
                placeholder: 'turgut@kurt.com',
                maxLength: 25,
                leftIcon: (
                  <View style={{paddingLeft: 20}}>
                    <EmailContent />
                  </View>
                ),
              }}
            />
            <CustomInputLabel
              name={'password'}
              secureTextEntry
              containerProps={{
                label: t('passText'),
                placeholder: 'Şifre',
                maxLength: 25,
                leftIcon: (
                  <View style={{paddingLeft: 20}}>
                    <PasswordContent />
                  </View>
                ),
              }}
            />
            <CustomButton
              style={[
                {marginTop: 10},
                values.password !== '' && isValid === true
                  ? {backgroundColor: colors.color9}
                  : {backgroundColor: colors.color14},
              ]}
              disabled={!(values.password !== '' && isValid === true)}
              children={t('login')}
              onPress={() => {
                navigate(rootStack.verificationCodePhone);
              }}
            />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => {
          navigate(rootStack.register);
        }}
        style={{
          ...gs.posAbs,
          bottom: 50 + insets.bottom,
          width: calcWidth(100) - 40,
          height: fontSize(50),
          ...gs.asc,
          ...gs.jccaic,
          ...gs.fdr,
        }}>
        <CustomText
          style={{color: colors.color14}}
          f14
          children={t('loginText2')}
        />
        <CustomText fSemibold children={t('loginText3')} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    backgroundColor: colors.color7,
  },
  pagination: {
    height: 36,
    width: calcWidth(100),
    bottom: calcHeight(22),
  },
  TopText: {...gs.globalWidth, paddingLeft: 40},
  BottomText: {
    ...gs.globalWidth,
    marginTop: 35,
    paddingLeft: 40,
    paddingRight: 100,
  },
});

export {Login};

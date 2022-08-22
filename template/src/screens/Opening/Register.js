import {
  BirthdayContent,
  EmailContent,
  NameContent,
  PasswordContent,
  RegisterContent,
  SavePhoneContent,
} from '~/assets';
import {
  CustomButton,
  CustomInputLabel,
  CustomText,
  colors,
  fonts,
  gs,
  sizes,
  weights,
} from '~/components';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {calcHeight, calcWidth, fontSize, goBack, navigate} from '~/utils';

import {CheckBox} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import {EmailLoginScreen} from '~/schema';
import {Formik} from 'formik';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {rootStack} from '~/config';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

const Register = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  const Actions = useActions();
  const [formikInitialValues, setFormikinitialValues] = useState({
    name: '',
    email: '',
    birthday: '',
    password: '',
  });
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(moment().startOf('day').toDate());
  const [copyDate, setCopyDate] = useState('');
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();
  return (
    <View style={[styles.sliderContainer, {paddingTop: insets.top}]}>
      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        minimumDate={new Date('Jan 1 1920')}
        maximumDate={moment().toDate()}
        locale={'tr'}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setCopyDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View style={{width: '100%'}}>
        <RegisterContent />
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
              phone={true}
              name={'phone'}
              containerProps={{
                label: t('registerText7'),
                keyboardType: 'number-pad',
                placeholder: 'Telefon',
                maxLength: 11,
                leftIcon: (
                  <View style={{paddingLeft: 20}}>
                    <SavePhoneContent />
                  </View>
                ),
              }}
            />
            <CustomInputLabel
              name={'name'}
              containerProps={{
                label: t('nameText'),
                placeholder: 'Turgut Kurt',
                maxLength: 25,
                leftIcon: (
                  <View style={{paddingLeft: 20}}>
                    <NameContent />
                  </View>
                ),
              }}
            />
            <CustomInputLabel
              name={'email'}
              containerProps={{
                keyboardType: 'email-address',
                label: t('emailText'),
                placeholder: 'Turgut@kurt.com',
                maxLength: 25,
                leftIcon: (
                  <View style={{paddingLeft: 20}}>
                    <EmailContent />
                  </View>
                ),
              }}
            />
            <CustomText
              f14
              style={{
                color: colors.color14,
                width: calcWidth(100) - 40,
                ...gs.asc,
                marginBottom: 10,
              }}
              children={t('birthdayText')}
            />
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={{
                width: calcWidth(100) - 40,
                height: fontSize(50),
                ...gs.asc,
                ...gs.aic,
                ...gs.jcfs,
                ...gs.fdr,
                borderWidth: 2,
                borderColor: colors.color13,
                borderRadius: 50,
              }}>
              <View style={{paddingLeft: 20, paddingRight: 15}}>
                <BirthdayContent />
              </View>
              <CustomText
                children={
                  copyDate ? date.toLocaleDateString() : t('birthdaySelect')
                }
                style={{color: colors.color9}}
              />
            </TouchableOpacity>
            <CustomText
              f14
              style={{
                color: colors.color14,
                width: calcWidth(100) - 40,
                ...gs.asc,
                marginTop: 17,
                marginBottom: 7,
              }}
              children={t('gender')}
            />
            <View
              style={{
                ...gs.fdr,
                ...gs.jcfs,
                width: calcWidth(100) - 40,
                ...gs.asc,
                marginBottom: 10,
              }}>
              <CheckBox
                center
                title={t('registerText4')}
                onPress={() => {
                  setChecked1(true);
                  setChecked2(false);
                  setChecked3(false);
                  setGender('erkek');
                }}
                checked={checked1}
                checkedIcon="circle-slice-8"
                uncheckedIcon="circle-outline"
                iconType={'material-community'}
                checkedColor={colors.color13}
                uncheckedColor={colors.color13}
                containerStyle={styles.CheckBoxStyle2}
                wrapperStyle={{
                  ...gs.jcfs,
                }}
                textStyle={[styles.TextStyle]}
              />
              <CheckBox
                center
                title={t('registerText5')}
                onPress={() => {
                  setChecked1(false);
                  setChecked2(true);
                  setChecked3(false);
                  setGender('false');
                }}
                checked={checked2}
                checkedIcon="circle-slice-8"
                uncheckedIcon="circle-outline"
                iconType={'material-community'}
                checkedColor={colors.color13}
                uncheckedColor={colors.color13}
                containerStyle={styles.CheckBoxStyle2}
                wrapperStyle={{
                  ...gs.jcfs,
                }}
                textStyle={[styles.TextStyle]}
              />
              <CheckBox
                center
                title={t('registerText6')}
                onPress={() => {
                  setChecked1(false);
                  setChecked2(false);
                  setChecked3(true);
                  setGender('bilinmiyor');
                }}
                checked={checked3}
                checkedIcon="circle-slice-8"
                uncheckedIcon="circle-outline"
                iconType={'material-community'}
                checkedColor={colors.color13}
                uncheckedColor={colors.color13}
                containerStyle={styles.CheckBoxStyle2}
                wrapperStyle={{
                  ...gs.jcfs,
                }}
                textStyle={[styles.TextStyle]}
              />
            </View>
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
            <CheckBox
              center
              title={t('registerText3')}
              onPress={() => setChecked(!checked)}
              checked={checked}
              checkedIcon="circle-slice-8"
              uncheckedIcon="circle-outline"
              iconType={'material-community'}
              checkedColor={colors.color13}
              uncheckedColor={colors.color13}
              containerStyle={styles.CheckBoxStyle}
              wrapperStyle={{
                ...gs.jcfs,
              }}
              textStyle={[styles.TextStyle]}
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
            />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => {
          navigate(rootStack.login);
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
          children={t('registerText1')}
        />
        <CustomText fSemibold children={t('registerText2')} />
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
  CheckBoxStyle: {
    width: calcWidth(100) - 40,
    ...gs.asc,
    borderWidth: 0,
    paddingLeft: 0,
    backgroundColor: colors.color7,
    marginVertical: 0,
    marginHorizontal: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  CheckBoxStyle2: {
    ...gs.asc,
    borderWidth: 0,
    paddingLeft: 0,
    backgroundColor: colors.color7,
    marginVertical: 0,
    marginHorizontal: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  TextStyle: {
    color: colors.color14,
    fontSize: sizes.f12,
    ...fonts.Light,
    fontWeight: weights.wn,
  },
});

export {Register};

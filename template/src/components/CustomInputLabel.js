import {TextPropTypes, ViewPropTypes} from 'deprecated-react-native-prop-types';
import {calcWidth, calculate, fontSize} from '~utils';
import {colors, fonts, gs} from './config';

import {Input} from 'react-native-elements';
import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useField} from 'formik';

const CustomInputLabel = props => {
  const {
    containerStyle,
    inputContainerStyle,
    errorColor,
    succesColor,
    inputStyle,
    labelStyle,
    errorStyle,
    label,
    name,
    phone,
    placeholder,
    placeholderTextColor,
    containerProps,
    secureTextEntry,
  } = props;
  const [field, meta] = useField({
    name: name,
  });
  const {error, touched, value} = meta;
  const {onBlur, onChange} = field;
  return (
    <Input
      containerStyle={[styles.Container, containerStyle]}
      inputContainerStyle={[
        styles.InputContainer,
        inputContainerStyle,
        value === ''
          ? inputContainerStyle
          : error
          ? {borderColor: errorColor}
          : {borderColor: succesColor},
      ]}
      inputStyle={[styles.Input, inputStyle]}
      labelStyle={[styles.Label, labelStyle]}
      errorStyle={[styles.Error, errorStyle]}
      value={value}
      onBlur={onBlur(name)}
      onChangeText={text =>
        onChange(name)(phone ? text.replace(/[^0-9]/g, '') : text)
      }
      errorMessage={value !== '' && error}
      renderErrorMessage={!!(value !== '' && error)}
      autoCapitalize="none"
      placeholder={placeholder}
      label={label}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      {...containerProps}
    />
  );
};
CustomInputLabel.propTypes = {
  containerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  errorColor: PropTypes.string.isRequired,
  succesColor: PropTypes.string.isRequired,
  inputStyle: TextPropTypes.style,
  labelStyle: TextPropTypes.style,
  errorStyle: TextPropTypes.style,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  containerProps: PropTypes.object.isRequired,
};
CustomInputLabel.defaultProps = {
  placeholder: 'placeholder',
  label: 'label',
  errorColor: colors.color12,
  succesColor: colors.color13,
  placeholderTextColor: colors.color9,
  secureTextEntry: false,
};

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  InputContainer: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginHorizontal: 0,
    marginVertical: 3,
    borderRadius: 50,
    ...gs.asc,
    height: fontSize(50),
    backgroundColor: colors.color7,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.color13,
    width: calcWidth(100) - 40,
  },
  Input: {
    paddingLeft: 10,
    ...gs.asc,
    width: calcWidth(92),
    backgroundColor: colors.color7,
    color: colors.color9,
    borderRadius: 50,
    fontSize: fontSize(16),
    ...fonts.Regular,
  },
  Label: {
    width: calcWidth(100),
    ...gs.asc,
    fontWeight: 'normal',
    color: colors.color14,
    fontSize: fontSize(14),
    paddingLeft: 20,
    marginBottom: 7,
    ...fonts.Regular,
  },
  Error: {
    width: calcWidth(100),
    ...gs.asc,
    fontSize: fontSize(10),
    marginBottom: 15,
    paddingLeft: calcWidth(8),
    ...fonts.Regular,
  },
});
export {CustomInputLabel};

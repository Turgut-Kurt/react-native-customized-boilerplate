import {PropTypes, colors, fonts, gs, sizes, weights} from './config';
import {StyleSheet, View} from 'react-native';

import {Input} from 'react-native-elements';
import React from 'react';
import {useField} from 'formik';

const CustomInput = props => {
  const {
    succesColor,
    errorColor,
    name,
    ContainerProps,
    phone,
    container,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    labelStyle,
    errorStyle,
  } = props;
  const [field, meta] = useField({
    name: name,
  });
  const {error, value} = meta;
  const {onBlur, onChange} = field;
  const {
    Container,
    ContainerStyle,
    InputContainer,
    TextInput,
    LabelStyle,
    ErrorStyle,
  } = styles;
  return (
    <View style={[Container, container]}>
      <Input
        containerStyle={[ContainerStyle, containerStyle]}
        inputContainerStyle={[
          InputContainer,
          value === ''
            ? InputContainer
            : error
            ? {borderColor: errorColor}
            : {borderColor: succesColor},
          inputContainerStyle,
        ]}
        inputStyle={[TextInput, inputStyle]}
        labelStyle={[LabelStyle, labelStyle]}
        errorStyle={[ErrorStyle, errorStyle]}
        value={value}
        onBlur={onBlur(name)}
        onChangeText={text =>
          onChange(name)(phone ? text.replace(/[^0-9]/g, '') : text)
        }
        errorMessage={value !== '' && error}
        renderErrorMessage={!!(value !== '' && error)}
        autoCapitalize="none"
        {...ContainerProps}
      />
    </View>
  );
};
//Atom Input component styles
const styles = StyleSheet.create({
  Container: {
    ...gs.globalWidth,
    ...gs.asc,
  },
  ContainerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  InputContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingLeft: 5,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 5,
    ...gs.asc,
    ...gs.inputContainerStyle,
    backgroundColor: colors.color7,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.color7,
    overflow: 'hidden',
    zIndex: 99999,
    ...gs.shadow3,
  },
  TextInput: {
    paddingLeft: 5,
    borderRadius: 5,
    ...gs.asc,
    ...gs.textInputStyle,
    backgroundColor: colors.color7,
    color: colors.color2,
    fontSize: sizes.f16,
    ...fonts.Regular,
    zIndex: 5,
  },
  LabelStyle: {
    ...gs.globalWidth,
    ...gs.asc,
    fontWeight: weights.wn,
    color: colors.color2,
    ...fonts.Regular,
    fontSize: sizes.f14,
  },
  ErrorStyle: {
    fontSize: sizes.f10,
    ...fonts.Regular,
    color: colors.color12,
    marginBottom: 15,
    marginTop: 5,
  },
});

//propTypes
CustomInput.propTypes = {
  name: PropTypes.string,
  succesColor: PropTypes.string,
  errorColor: PropTypes.string,
  ContainerProps: PropTypes.object,
};

//defaultProps
CustomInput.defaultProps = {
  name: 'email',
  succesColor: colors.Green3,
  errorColor: colors.Red2,
  ContainerProps: {
    placeholderTextColor: colors.Gray3,
    maxLength: 40,
    keyboardType: 'email-address',
    label: 'E-posta adresi',
    placeholder: 'teklif@al.com',
  },
};
//export Atom Input component
export {CustomInput};

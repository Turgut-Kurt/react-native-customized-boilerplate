import {PropTypes, colors, fonts, sizes} from './config';
import {StyleProp, StyleSheet, Text} from 'react-native';

import React from 'react';
import {TextPropTypes} from 'deprecated-react-native-prop-types';

//Custom Text component
const CustomText = props => {
  const {DefaultTextStyle, Light, Semibold} = styles;
  const {
    style,
    children,
    color1,
    color2,
    color3,
    fLight,
    fSemibold,
    f10,
    f12,
    f14,
    f16,
    f18,
    f20,
    f22,
    f24,
    f10Style,
    f12Style,
    f14Style,
    f16Style,
    f18Style,
    f20Style,
    f22Style,
    f24Style,
    ...rest
  } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        DefaultTextStyle,
        StyleSheet.flatten([style]),
        f10 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f10,
            },
            f10Style,
          ]),
        f12 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f12,
            },
            f12Style,
          ]),
        f14 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f14,
            },
            f14Style,
          ]),
        f16 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f16,
            },
            f16Style,
          ]),
        f18 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f18,
            },
            f18Style,
          ]),
        f20 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f20,
            },
            f20Style,
          ]),
        f22 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f22,
            },
            f22Style,
          ]),
        f24 &&
          StyleSheet.flatten([
            {
              fontSize: sizes.f24,
            },
            f24Style,
          ]),
        color1 &&
          StyleSheet.flatten([
            {
              color: colors.color1,
            },
          ]),
        color2 &&
          StyleSheet.flatten([
            {
              color: colors.color2,
            },
          ]),
        color3 &&
          StyleSheet.flatten([
            {
              color: colors.color3,
            },
          ]),
        fLight && Light,
        fSemibold && Semibold,
      ])}
      {...rest}>
      {children}
    </Text>
  );
};
//propTypes
CustomText.propTypes = {
  style: TextPropTypes.style,
  color1: PropTypes.bool,
  color2: PropTypes.bool,
  color3: PropTypes.bool,
  fLight: PropTypes.bool,
  fSemibold: PropTypes.bool,
  f10: PropTypes.bool,
  f12: PropTypes.bool,
  f14: PropTypes.bool,
  f16: PropTypes.bool,
  f18: PropTypes.bool,
  f20: PropTypes.bool,
  f22: PropTypes.bool,
  f24: PropTypes.bool,
  // f10Style: Text.propTypes.style,

  // f12Style: TextPropTypes.style,
  // f14Style: TextPropTypes.style,
  // f16Style: TextPropTypes.style,
  // f18Style: TextPropTypes.style,
  // f20Style: TextPropTypes.style,
  // f22Style: TextPropTypes.style,
  // f24Style: TextPropTypes.style,
  children: PropTypes.node,
};

//defaultProps
CustomText.defaultProps = {
  color1: false,
  color2: false,
  color3: false,
  fLight: false,
  fSemibold: false,
  f10: false,
  f12: false,
  f14: false,
  f16: false,
  f18: false,
  f20: false,
  f22: false,
  f24: false,
  style: {},
  f10Style: {},
  f12Style: {},
  f14Style: {},
  f16Style: {},
  f18Style: {},
  f20Style: {},
  f22Style: {},
  f24Style: {},
  children: 'Custom Text',
};

//Atom Text component styles
const styles = StyleSheet.create({
  DefaultTextStyle: {
    paddingTop: 1,
    fontSize: sizes.f16,
    color: colors.color2,
    ...fonts.Regular,
  },
  Light: {
    ...fonts.Light,
  },
  Semibold: {
    ...fonts.Semibold,
  },
});
//export Custom Text component
export {CustomText};

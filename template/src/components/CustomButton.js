import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {calcWidth, fontSize} from '~/utils';
import {colors, gs, sizes} from './config';

import {CustomText} from './CustomText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const CustomButton = props => {
  const {style, withIcon, bordered, ...rest} = props;
  const {DefaultButtonStyle, BorderedButtonStyle, WithIconStyle} = styles;
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        DefaultButtonStyle,
        StyleSheet.flatten([style]),
        bordered && StyleSheet.flatten(BorderedButtonStyle),
        withIcon && StyleSheet.flatten(WithIconStyle),
      ])}
      {...rest}>
      <CustomText
        style={[{marginRight: 5}, !bordered && {color: colors.color7}]}
      />
      {withIcon && (
        <MaterialCommunityIcons
          name="arrow-right"
          color={colors.color7}
          size={sizes.f26}
        />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  DefaultButtonStyle: {
    width: calcWidth(100) - 40,
    ...gs.asc,
    height: fontSize(50),
    backgroundColor: colors.color9,
    borderRadius: 50,
    ...gs.jccaic,
    ...gs.shadow2,
  },
  BorderedButtonStyle: {
    width: calcWidth(100) - 40,
    ...gs.asc,
    height: fontSize(46),
    backgroundColor: colors.color7,
    borderWidth: 2,
    borderColor: colors.color9,
    borderRadius: 50,
    ...gs.jccaic,
  },
  WithIconStyle: {
    backgroundColor: colors.color9,
    ...gs.fdr,
    ...gs.asc,
    ...gs.jccaic,
    width: 'auto',
    paddingHorizontal: 10,
  },
});

export {CustomButton};

import {CustomButton, CustomText, colors, gs, sizes} from '~/components';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {calcHeight, calcWidth, fontSize, goBack, navigate} from '~/utils';

import {AuthInitialContent} from '~/assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {rootStack} from '~/config';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

const AuthInitial = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  const Actions = useActions();
  const {t} = useTranslation();
  return (
    <View style={[styles.sliderContainer, {paddingTop: insets.top}]}>
      <View style={{width: '100%'}}>
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
        <AuthInitialContent
          style={{
            marginVertical: 25,
            ...gs.asc,
          }}
        />
        <CustomText
          fSemibold
          f24
          children={t('authInitial')}
          style={{
            ...gs.asc,
            width: calcWidth(100) - 60,
            ...gs.textCc,
            marginVertical: 15,
          }}
        />
      </View>
      <CustomButton
        bordered
        style={{...gs.posAbs, bottom: 60 + insets.bottom + fontSize(50)}}
        children={t('register')}
        onPress={() => navigate(rootStack.register)}
      />
      <CustomButton
        style={{...gs.posAbs, bottom: 50 + insets.bottom}}
        children={t('login')}
        onPress={() => navigate(rootStack.login)}
      />
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

export {AuthInitial};

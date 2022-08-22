import {CustomButton, CustomText, colors, gs} from '~/components';
import React, {createElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {Swiper1, Swiper2, Swiper3} from '~/assets';
import {calcHeight, calcWidth, navigate} from '~/utils';

import CompSwiper from 'react-native-swiper';
import {rootStack} from '~/config';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

const Swiper = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  const Actions = useActions();
  const {t} = useTranslation();
  let initialSlide = [
    {
      id: 1,
      comp: Swiper1,
      topText: t('swiper1TopText'),
      bottomText: t('swiper1BottomText'),
    },
    {
      id: 2,
      comp: Swiper2,
      topText: t('swiper2TopText'),
      bottomText: t('swiper2BottomText'),
    },
    {
      id: 3,
      comp: Swiper3,
      topText: t('swiper3TopText'),
      bottomText: t('swiper3BottomText'),
    },
  ];
  return (
    <View style={[styles.sliderContainer, {paddingTop: insets.top}]}>
      <CompSwiper
        autoplay
        autoplayTimeout={6}
        dotColor={colors.color10}
        paginationStyle={styles.pagination}
        activeDotColor={colors.color9}
        activeDotStyle={styles.activeDot}>
        {initialSlide.map((item, i) => (
          <View style={{width: '100%'}} key={'item+' + i}>
            {createElement(item.comp, {
              style: {
                marginVertical: 25,
                ...gs.asc,
              },
            })}
            <CustomText
              fSemibold
              f24
              children={item.topText}
              style={{
                ...gs.asc,
                width: calcWidth(100) - 60,
                ...gs.textCc,
                marginVertical: 15,
              }}
            />
            <CustomText
              f18
              children={item.bottomText}
              f18Style={{
                color: colors.color11,
                width: calcWidth(100) - 60,
                ...gs.asc,
                ...gs.textCc,
              }}
            />
          </View>
        ))}
      </CompSwiper>
      <CustomButton
        children={t('startUsing')}
        withIcon
        name="arrow-right"
        style={{...gs.posAbs, right: 30, bottom: 50 + insets.bottom}}
        onPress={() => {
          // Actions.setInitial();
          navigate(rootStack.authInitial);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    ...gs.asc,
    backgroundColor: colors.color7,
  },
  activeDot: {width: 20},
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

export {Swiper};

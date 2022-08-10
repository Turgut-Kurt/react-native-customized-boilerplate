import {CustomButton, CustomText, colors, gs} from '~/components';
import React, {createElement, createFactory} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Swiper1, Swiper2, Swiper3} from '~/assets';
import {calcHeight, calcWidth} from '~/utils';

import CompSwiper from 'react-native-swiper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let initialSlide = [
  {
    id: 1,
    comp: Swiper1,
    topText: 'Seyehat güzergahını seç',
    bottomText: 'Hemen seyehat etmek istediğin güzergah bilgilerini seç',
  },
  {
    id: 2,
    comp: Swiper2,
    topText: 'Yol arkadaşınızı bulun',
    bottomText:
      'Sizinle aynı ya da yakın güzergaha seyehat etmek isteyen yol arkadaşınızı bulun ve iletişime geçin',
  },
  {
    id: 3,
    comp: Swiper3,
    topText: 'Seyehatize başlayın',
    bottomText: 'Yol arkadaşınızla buluşup seyehatinizi tamamlayın',
  },
];
const Swiper = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  return (
    <View style={[styles.sliderContainer, {paddingTop: insets.top}]}>
      {/* <CustomButton />
      <CustomButton bordered />
      <CustomButton withIcon /> */}
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

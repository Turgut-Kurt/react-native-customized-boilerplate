import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {colors, CustomText} from '~/components';
import React, {useState} from 'react';
import {changeLanguage} from 'i18next';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
import {langSelector} from '~/modules/settings/selector';
const Tab1 = props => {
  const {Container} = styles;
  const lang = useSelector(langSelector);
  console.log('lang: lang : ' + lang);
  const [langs, setLangs] = useState(lang);
  const insets = useSafeAreaInsets();
  const Actions = useActions();
  const {t} = useTranslation();
  const changeLang = () => {
    console.log('changeLang: lang');
    changeLanguage(langs).catch();
    moment.locale(langs);
    Actions.changeLang(langs);
  };
  return (
    <View style={[Container, {marginTop: insets.top}]}>
      <CustomText
        children={
          'info Linking ttf assets to iOS project WARN ERRGROUP Group Resources does not exist in your Xcode project. We have created it automatically for you.info Linking ttf assets to Android project '
        }
      />
      <CustomText
        fSemibold
        children={
          'info Linking ttf assets to iOS project WARN ERRGROUP Group Resources does not exist in your Xcode project. We have created it automatically for you.info Linking ttf assets to Android project '
        }
      />
      <CustomText
        fLight
        children={
          'info Linking ttf assets to iOS project WARN ERRGROUP Group Resources does not exist in your Xcode project. We have created it automatically for you.info Linking ttf assets to Android project '
        }
      />
      <TouchableOpacity onPress={() => setLangs('tr')}>
        <CustomText children={'Türkçe'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLangs('en')}>
        <CustomText children={'İngilizce'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: colors.color4, padding: 20}}
        onPress={changeLang}>
        <CustomText children={'değiştir'} />
      </TouchableOpacity>
      <CustomText children={t('hi')} />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
});

export {Tab1};
// exports Example Screen
// export * from './Example';

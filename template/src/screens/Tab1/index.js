import {CustomText, colors} from '~/components';
import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab1 = props => {
  const {Container} = styles;
  const insets = useSafeAreaInsets();
  return (
    <View style={[Container, {marginTop: insets.top}]}>
      <Text></Text>
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
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
});

export {Tab1};
// exports Example Screen
// export * from './Example';

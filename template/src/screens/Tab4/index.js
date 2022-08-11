import {StyleSheet, Text, View} from 'react-native';

import {Loader} from '~/components';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab4 = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <Text>Tab4</Text>
      <Loader loading={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
});

export {Tab4};
// exports Example Screen
// export * from './Example';

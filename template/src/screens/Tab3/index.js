import {CustomText, gs} from '~/components';
import {StyleSheet, Text, View} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Second Item2',
  },
  {
    title: 'Second Item3',
  },
  {
    title: 'Second Item4',
  },
  {
    title: 'Second Item5',
  },
  {
    title: 'Second Item3',
  },
  {
    title: 'Second Item4',
  },
  {
    title: 'Second Item5',
  },
  {
    title: 'Second Item3',
  },
  {
    title: 'Second Item4',
  },
  {
    title: 'Second Item5',
  },
];
const Tab3 = props => {
  const {Container} = styles;
  const insets = useSafeAreaInsets();
  return (
    <View style={[Container, {marginTop: insets.top}]}>
      <CustomText children={'@shopify/flash-list'} />
      <Text>Tab3</Text>
      <FlashList
        // ListHeaderComponent={<CustomText children={'header'} />}
        data={DATA}
        contentContainerStyle={{backgroundColor: 'blue'}}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListHeaderComponent={() => <View style={{height: 10}} />}
        ListFooterComponent={() => <View style={{height: 10}} />}
        renderItem={({item}) => (
          <View style={{borderWidth: 1, marginHorizontal: 10, padding: 50}}>
            <CustomText children={item.title} />
          </View>
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1},
});

export {Tab3};
// exports Example Screen
// export * from './Example';

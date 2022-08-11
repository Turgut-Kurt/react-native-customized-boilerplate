import {Button, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

import {getStatusBarHeight} from '~/utils';

const Cats = memo(props => {
  console.log('rendering Cats');
  return (
    <View style={{flex: 1}}>
      <Text style={{padding: 5}}>{props.catsData}</Text>
    </View>
  );
});
export {Cats};

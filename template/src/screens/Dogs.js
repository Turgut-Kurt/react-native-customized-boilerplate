import {Button, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

import {getStatusBarHeight} from '~/utils';

const Dogs = memo(props => {
  console.log('rendering Dogs');
  return (
    <View style={{flex: 1}}>
      <Text style={{padding: 5}}>{props.dogsData}</Text>
    </View>
  );
});
export {Dogs};

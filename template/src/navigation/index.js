import {Loading, Swiper} from '~screens';
import React, {useEffect, useState} from 'react';

import HomeTabs from './HomeTabs';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {loadingSelector} from '~/modules/auth/selector';
import {rootStack} from '~config';
import useActions from '~/hooks/useActions';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
function RootStack() {
  // const Actions = useActions();
  // const loading = useSelector(loadingSelector);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={rootStack.main}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={rootStack.swiper}
        component={Swiper}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={rootStack.main}
        component={HomeTabs}
      />
    </Stack.Navigator>
  );
}

export default RootStack;

import {AuthInitial, Loading, Login, Register, Swiper} from '~screens';
import React, {useEffect, useState} from 'react';
import {initialSelector, loadingSelector} from '~/modules/auth/selector';

import HomeTabs from './HomeTabs';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import i18next from 'i18next';
import moment from 'moment';
import {rootStack} from '~config';
import useActions from '~/hooks/useActions';
import {useSelector} from 'react-redux';

moment.locale(i18next.language);
const Stack = createNativeStackNavigator();
function RootStack() {
  // const Actions = useActions();
  // const loading = useSelector(loadingSelector);
  const initial = useSelector(initialSelector);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={initial ? rootStack.main : rootStack.swiper}
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
      <Stack.Screen
        options={{headerShown: false}}
        name={rootStack.authInitial}
        component={AuthInitial}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={rootStack.login}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={rootStack.register}
        component={Register}
      />
    </Stack.Navigator>
  );
}

export default RootStack;

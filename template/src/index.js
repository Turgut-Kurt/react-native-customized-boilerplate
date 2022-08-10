import React, {Suspense, lazy, useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import {ActivityIndicator} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
// import SplashScreen from 'react-native-lottie-splash-screen';
import configureStore from './config-store';
import {navigationRef} from '~utils';
import {init} from './utils/i18n';
import global from './utils/global';
const Router = lazy(() => import('./navigation/index.js'));
const onBeforeLift = async () => {
  global.setLang(store.getState().settings.lang);
  await init();
};
const {store, persistor} = configureStore();
const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1500);
  // }, []);
  return (
    <Suspense fallback={<ActivityIndicator size={'large'} style={{flex: 1}} />}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          onBeforeLift={onBeforeLift}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer ref={navigationRef}>
              <Router />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </Suspense>
  );
};

export default App;

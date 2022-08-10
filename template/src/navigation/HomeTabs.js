import {Home, HomeAct} from '~assets';
import {Tab1, Tab2, Tab3, Tab4} from '~screens';

import MyTabs from './MyTabs';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {homeTabs} from '~config';

const Tab = createBottomTabNavigator();
export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeTabs.tab1}
      screenOptions={{
        tabBarStyle: {borderWidth: 1},
        gestureEnabled: false,
        headerShown: false,
      }}
      keyboardHidesNavigationBar={false}
      tabBar={props => <MyTabs {...props} />}>
      <Tab.Screen
        name={homeTabs.tab1}
        // children={() => <Home inTabView={true} />}
        component={Tab1}
        options={{
          tabBarLabel: 'Tab1',
          svg1: HomeAct,
          svg2: Home,
        }}
      />
      <Tab.Screen
        name={homeTabs.tab2}
        component={Tab2}
        options={{
          tabBarLabel: 'Tab2',
          svg1: HomeAct,
          svg2: Home,
        }}
      />
      <Tab.Screen
        name={homeTabs.tab3}
        component={Tab3}
        options={{
          tabBarLabel: 'Tab3',
          svg1: HomeAct,
          svg2: Home,
        }}
      />
      <Tab.Screen
        name={homeTabs.tab4}
        component={Tab4}
        options={{
          tabBarLabel: 'Tab4',
          svg1: HomeAct,
          svg2: Home,
        }}
      />
    </Tab.Navigator>
  );
}

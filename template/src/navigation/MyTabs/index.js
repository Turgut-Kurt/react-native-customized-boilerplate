import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, gs, sizes, weights} from '~/components';

import React from 'react';
import {fontSize} from '~utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function MyTabs({state, descriptors, navigation}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        height: fontSize(50) + insets.bottom,
        backgroundColor: colors.color7,
        ...gs.bottomTabShadow,
      }}>
      <View style={styles.barStyle}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const Comp1 = options.svg1;
          const Comp2 = options.svg2;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.buttonStyle]}>
              {isFocused ? <Comp1 color={colors.color8} /> : <Comp2 />}
              <Text
                style={[
                  styles.tabBarLabelStyle,
                  {color: isFocused ? colors.color8 : colors.color2},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.color7,
    height: fontSize(50),
    ...gs.fdr,
    borderTopWidth: 1,
    borderColor: colors.color6,
  },
  buttonStyle: {flex: 1, ...gs.jccaic},
  svgStyle: {width: fontSize(28), height: fontSize(28)},
  tabBarLabelStyle: {
    fontSize: sizes.f10,
    ...fonts.Semibold,
    fontWeight: weights.t6,
  },
});
export default MyTabs;

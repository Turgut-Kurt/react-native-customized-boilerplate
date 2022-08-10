import {CommonActions, StackActions} from '@react-navigation/native';

import React from 'react';


const navigationRef = React.createRef();
//ref my default navigation
function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
//ref my default replace
function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
// add other navigation functions that you need and export them

function customNavigate(routeName, params) {
  navigationRef.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
}
function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}
function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}
export {customNavigate, navigate, replace, push, navigationRef, goBack};

/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
<script src="http://localhost:8097" />;

import React from 'react';

import RoutesforNavigation from './src/components/Routes';

//Added gestureEnabled and gestureDirection for swiping enabled in android, ios doesn't need those settings
//same for Header mode and animation fade are directly available on ios andriod needs manula enable
export default function App() {
  return <RoutesforNavigation />;
}

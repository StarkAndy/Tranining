/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/Home';
import MusicScreen from './src/components/Music';
import DetailScreen from './src/components/Details';
import SettingScreen from './src/components/Settings';

const Main = createStackNavigator();
const Settings = createBottomTabNavigator();

function SettingsTabs() {
  return (
    <Settings.Navigator>
      <Settings.Screen name="SettingScreen" component={SettingScreen} />
      <Settings.Screen name="DetailScreen" component={DetailScreen} />
    </Settings.Navigator>
  );
}
//Added gestureEnabled and gestureDirection for swiping enabled in android, ios doesn't need those settings
//same for Header mode and animation fade are directly available on ios andriod needs manula enable
export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#23A6D9',
          },
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '200',
            fontSize: 30,
          },
        }}
        headerMode="float"
        animation="fade">
        <Main.Screen name="Home" component={HomeScreen} />
        <Main.Screen name="Music" component={MusicScreen} />
        <Main.Screen name="Settings" component={SettingsTabs} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#23A6D9',
    paddingVertical: 12,
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
  },
});

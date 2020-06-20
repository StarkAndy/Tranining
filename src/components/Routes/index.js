import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Home/';
import MovieDetail from '../MovieDetail/';
const Main = createStackNavigator();
const Settings = createBottomTabNavigator();
const RoutesforNavigation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#272532',
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
        <Main.Screen name="MovieDetail" component={MovieDetail} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default RoutesforNavigation;

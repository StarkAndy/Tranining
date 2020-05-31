/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Cardlist, Cards} from './src/components/Cards/Cards';

import Card from './src/components/CardTest';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('hello')}>
       <Card cardid="Card1"/>
       <Card cardid="Card2"/>
       <Card cardid="Card3"/>
      </TouchableOpacity>
    );
  }
}

export default App;

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
        {Cardlist(Cards.Card1)}
      </TouchableOpacity>
    );
  }
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import reducer from './src/pages/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SearchPage from './src/pages/SearchPage';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <SearchPage />
        </View>
      </Provider>
    );
  }
}

export default App;

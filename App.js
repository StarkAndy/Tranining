/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component{




  render(){
    return(
      <TouchableOpacity
      onPress={()=>alert("hello")}    
      >
        <Text style={{backgroundColor:'blue',padding:40,alignSelf:'center'}}>Hello</Text>
      </TouchableOpacity>
   
    )
  }

}

export default App;

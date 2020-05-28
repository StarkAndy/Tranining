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

import Button from './component/Button';
import UserInput from './component/UserInput';


class App extends Component{

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }

  _nameChange=(text)=>{
    this.setState({username:text})
  }
  _passwordChange=(text)=>{
    this.setState({password:text})
  }
  _checkUserInfo=()=>{

    this.state.username ==='User' && this.state.password === 'password'?alert('success'):alert("failure");
  }
  render(){
    return(
     <View style={{flex:1,justifyContent:'center'}}>
       <UserInput 
        label="Enter Username"
        placeholder="username"
        autoFocus={true} 
        value={this.state.username}
        changeInput={
          this._nameChange}/>
       <UserInput label="Enter passworxd" 
         placeholder="password" 
         password={true}
         value={this.state.password} 
         changeInput={
          this._passwordChange}/>
       <Button label="Login" onPress={this._checkUserInfo}/>
       
     </View>
   
    )
  }

}

export default App;

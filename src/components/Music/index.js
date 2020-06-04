import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const MusicScreen = ({route, navigation}) => {
  let {userName, action} = route.params;
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('../../../assets/music.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>Music Screen</Text>
        <Text style={{fontWeight: '600', marginVertical: 32}}>
          {userName} asks to {action} React Native
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{color: '#FFF'}}>Go to Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderColor: '#23A6D9',
              borderWidth: 1,
              marginTop: 12,
              backgroundColor: '#fff',
            },
          ]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: '#23A6D9'}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
export default MusicScreen;

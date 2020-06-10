/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('../../../assets/settings.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{fontWeight: '100', fontSize: 32}}>Settings Screen</Text>
        </View>
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
export default SettingScreen;

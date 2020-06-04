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
import MusicScreen from './src/components/Music';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('./assets/home.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Music', {
              userName: 'Deep',
              action: 'Like',
            });
          }}>
          <Text style={{color: '#FFF'}}>Go to Music Screen</Text>
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
            navigation.navigate('Settings');
          }}>
          <Text style={{color: '#23A6D9'}}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
// function MusicScreen({route, navigation}) {
//   let {userName, action} = route.params;
//   return (
//     <View style={styles.container}>
//       <View style={{width: '100%', flex: 1, marginTop: 64}}>
//         <Image
//           source={require('./assets/music.png')}
//           style={{width: undefined, height: undefined, flex: 1}}
//           resizeMode="contain"
//         />
//       </View>
//       <View style={{flex: 2, alignItems: 'center'}}>
//         <Text style={{fontWeight: '100', fontSize: 32}}>Music Screen</Text>
//         <Text style={{fontWeight: '600', marginVertical: 32}}>
//           {userName} asks to {action} React Native
//         </Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             navigation.navigate('Home');
//           }}>
//           <Text style={{color: '#FFF'}}>Go to Home Screen</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.button,
//             {
//               borderColor: '#23A6D9',
//               borderWidth: 1,
//               marginTop: 12,
//               backgroundColor: '#fff',
//             },
//           ]}
//           onPress={() => {
//             navigation.goBack();
//           }}>
//           <Text style={{color: '#23A6D9'}}>Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

function SettingScreen() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('./assets/settings.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{fontWeight: '100', fontSize: 32}}>Settings Screen</Text>
        </View>
      </View>
    </View>
  );
}
function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        <Image
          source={require('./assets/details.png')}
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"
        />
        <View style={{flex: 2, alignItems: 'center'}}>
          <Text style={{fontWeight: '100', fontSize: 32}}>Details Screen</Text>
        </View>
      </View>
    </View>
  );
}

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
export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#23A6D9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '200',
            fontSize: 30,
          },
        }}>
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

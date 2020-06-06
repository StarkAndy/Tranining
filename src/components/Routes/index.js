import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Routes = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Routes.Navigator
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
        <Routes.Screen name="Home" component={HomeScreen} />
        <Routes.Screen name="Music" component={MusicScreen} />
        <Routes.Screen name="Settings" component={SettingsTabs} />
      </Routes.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

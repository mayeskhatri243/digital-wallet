import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* <Stack.Screen name="Scan" component={Scan} /> */}
        {/* <Stack.Screen name="User" component={User} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

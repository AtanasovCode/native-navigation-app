import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './routes/HomeScreen';
import AboutScreen from './routes/AboutScreen';
import ScrollScreen from './routes/ScrollScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          options={{title: 'About'}}
        />
        <Stack.Screen 
          name="Scroll"
          component={ScrollScreen}
          options={{title: "Scroll"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
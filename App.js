import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './routes/HomeScreen';
import Categories from './routes/Categories';
import ScrollScreen from './routes/ScrollScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: "rgb(0, 76, 126)",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Scroll"
          component={ScrollScreen}
          options={{ title: "Scroll" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
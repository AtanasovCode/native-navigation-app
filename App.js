import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import HomeScreen from './routes/HomeScreen';
import Introduction from './routes/Introduction';
import Explanation from './routes/Explanation';

const Stack = createNativeStackNavigator();

const App = () => {

  const [isFirstTime, setIsFirstTime] = useState("true");

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const value = await AsyncStorage.getItem('isFirstTime');
        if (value !== null) {
          setIsFirstTime(false);
        }
      } catch (error) {
        console.error('Error reading AsyncStorage:', error);
      }
    }

    checkFirstTime();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstTime === "true" ? "Introduction" : "Home"}>
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Explanation"
          component={Explanation}
          options={({ route }) => ({
            title: route.params?.name,
            headerStyle: {
              backgroundColor: "#1a1a1b70",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
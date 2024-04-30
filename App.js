import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import HomeScreen from './routes/HomeScreen';
import Introduction from './routes/Categories';
import ScrollScreen from './routes/ScrollScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    async function checkFirstTime() {
      try {
        const value = await AsyncStorage.getItem('appOpenedBefore');
        if (value !== null) {
          setIsFirstTime(false);
        }
      } catch (error) {
        console.error('Error reading AsyncStorage:', error);
      }
    }

    checkFirstTime();
  }, []);

  const markAppOpenedBefore = async () => {
    try {
      await AsyncStorage.setItem('appOpenedBefore', 'true');
    } catch (error) {
      console.error('Error storing data in AsyncStorage:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Introduction}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            blur: () => {
              markAppOpenedBefore();
              navigation.navigate('Dashboard');
            },
          })}
        />
        <Stack.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: "rgb(0, 76, 126)",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// LoginRegisterStack.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreenStack from './HomeScreenStack';
import HomeScreen from './HomeScreen';
import Questions from './Questions';

const Stack = createNativeStackNavigator();

function LoginRegisterStack() {
    
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenStack} options={{headerShown: false}}/>
        <Stack.Screen name="Questions" component={Questions} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
  );
}

export default LoginRegisterStack;

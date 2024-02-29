// HomeScreenStack.js

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '../components/BottomNavigator';
import HomeScreen from './HomeScreen';
// import SettingsScreen from './SettingsScreen';
// import GoalsScreen from './GoalsScreen';
// import AchievementScreen from './AchievementScreen';

const Stack = createNativeStackNavigator();

function HomeScreenStack() {
  return (
    <BottomNavigator />
  );
}

export default HomeScreenStack;

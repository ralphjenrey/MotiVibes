//BottomNavigator.js
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../pages/HomeScreen";
import SettingsScreen from "../pages/SettingsScreen";
import GoalsScreen from "../pages/GoalScreen";
import AchievementScreen from "../pages/AchievementScreen";


const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      shifting={false}
      activeColor="#6200EE"
      inactiveColor="#828282"
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen
        name="Homes"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen} // Assuming these are valid component names or paths
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={26} />
          ),
        }}r
      />
      <Tab.Screen
        name="Achievement"
        component={AchievementScreen} // Assuming these are valid component names or paths
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="trophy-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Goals"
        component={GoalsScreen} // Assuming these are valid component names or paths
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

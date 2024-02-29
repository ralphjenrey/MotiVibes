// SettingsScreen.js
import React from 'react';
import { View, Button, FlatList, TouchableOpacity, Text, Alert} from 'react-native'; // Import Alert along with other components
import { useAuth } from '../AuthContext'; // Adjust the path as per your project structure

const SettingsScreen = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Logout',
          onPress: () => {
            logout();
          }
        }
      ],
      { cancelable: false }
    );
  };

  // List of options including the logout option
  const options = [
    { id: '1', title: 'Option 1' },
    { id: '2', title: 'Option 2' },
    { id: '3', title: 'Option 3' },
    { id: '4', title: 'Logout', onPress: handleLogout } // Include the logout option
  ];

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={item.onPress ? item.onPress : () => console.log(item.title)}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1}}>
    <View style={{ marginTop: 40, marginLeft: 20}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
      </View>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ flexGrow: 1,marginTop: 40 }}
          />
      
    </View>
  );
};



export default SettingsScreen;

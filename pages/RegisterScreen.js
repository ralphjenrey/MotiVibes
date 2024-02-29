import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../Theme';

const FloatingLabelInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    const { theme } = useTheme();
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
  
    return (
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { top: isFocused || value ? 0 : 18, color: isFocused ? theme.primaryColor : theme.textColor }]}>
          {label}
        </Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.textColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry}
          style={[styles.input, { color: theme.textColor }]}
        />
      </View>
    );
  };

const RegisterScreen = ({navigation, route}) => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    // Logic for registering the user
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Create new account</Text>
      <FloatingLabelInput
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <FloatingLabelInput
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <FloatingLabelInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <FloatingLabelInput
        label="Birthdate"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <FloatingLabelInput
        label="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]} onPress={handleRegister}>
        <Text style={[styles.buttonText, { color: theme.textColor }]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
    inputContainer: {
      marginVertical: 10,
    },
    label: {
      position: 'absolute',
      left: 12,
      fontSize: 16,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: 'gray',
      paddingVertical: 8,
      paddingHorizontal: 12,
      fontSize: 18,
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    signUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    signUpText: {
      fontSize: 16,
    },
    signUpLink: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    darkModeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    darkModeText: {
      marginRight: 10,
    },
  });
  
export default RegisterScreen;

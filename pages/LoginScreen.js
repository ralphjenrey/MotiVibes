//LoginScreen
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../Theme';
import { useAuth } from '../AuthContext';

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

const LoginScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("Questions");
      // navigation.navigate("Home");
    }
  }, [isAuthenticated, navigation]);

  const handleSignIn = () => {
  login();
}

    return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Login</Text>
      <FloatingLabelInput
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <FloatingLabelInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]}>
        <Text style={[styles.buttonText, { color: theme.textColor }]}  onPress={handleSignIn}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={[styles.signUpText, { color: theme.textColor }]}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.signUpLink, { color: theme.textColor }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.darkModeContainer}>
        <Text style={[styles.darkModeText, { color: theme.textColor }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme.backgroundColor}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={theme.mode === 'dark'}
        />
      </View>
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

export default LoginScreen;

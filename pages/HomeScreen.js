import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../AuthContext";

const HomeScreen = ({ navigation }) => {
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login");
    }
  }, [isAuthenticated, navigation]);

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      {isAuthenticated !== null ? (
        isAuthenticated ? (
          <View style={styles.card}>
        <Text style={styles.cardHeaderText}>Quote of the Day</Text>
        <Text style={styles.quote}>
          "Your limitation—it’s only your imagination."
        </Text>
      </View>
        ) : (
          <Text style={styles.title}>You are not authenticated!</Text>
        )
      ) : (
        <Text style={styles.title}>Loading...</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  cardHeaderText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quote: {
    fontSize: 16,
  },
});

export default HomeScreen;

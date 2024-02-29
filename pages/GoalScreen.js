import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you're using Expo for icons

const GoalsScreen = () => {
  // Example JSON data for goals
  const goalsData = [
    { id: 1, title: "Goal 1", description: "Description of goal 1" },
    { id: 2, title: "Goal 2", description: "Description of goal 2" },
    { id: 3, title: "Goal 3", description: "Description of goal 3" },
  ];

  // Function to handle finishing a goal
  const finishGoal = (id) => {
    // Your implementation of finishGoal function here
    console.log("Finish goal with id:", id);
  };

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
      <TouchableOpacity onPress={() => finishGoal(item.id)}>
        <FontAwesome
          name="flag"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 40,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Goals</Text>
        <TouchableOpacity onPress={() => addGoals()}>
          <FontAwesome name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={goalsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
      />
    </View>
  );
};

export default GoalsScreen;

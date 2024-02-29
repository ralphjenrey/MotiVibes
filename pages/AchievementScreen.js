import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const AchievementScreen = () => {
  // Define level names
  const levelNames = [
    'Sergeant',
    'Staff Sergeant',
    'Master Sergeant',
    'Lieutenant',
    'Captain',
  ];

  // Generate random current level
  const currentLevelIndex = Math.floor(Math.random() * levelNames.length);
  const currentLevel = levelNames[currentLevelIndex];

  // Calculate progress percentage based on current level
  const progress = (currentLevelIndex + 1) * (100 / levelNames.length);

  // Define SVG component for achievement medal
  const AchievementMedal = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Circle cx="12" cy="12" r="12" fill="gold" />
    </Svg>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Achievements</Text>
      </View>
     
      <View style={styles.progressCard}>
        <Text style={styles.progressCardHeaderText}>Progress</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]}></View>
        </View>
        <Text style={styles.levelText}>Current Level: {currentLevel}</Text>
        {/* Render achievement medals */}
        <View style={styles.achievementsContainer}>
          {[...Array(16)].map((_, index) => (
            <View key={index} style={styles.achievementContainer}>
              <AchievementMedal />
            </View>
          ))}
        </View>
      </View>
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
  
  progressCard: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },
  progressCardHeaderText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'green',
  },
  levelText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  achievementsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  achievementContainer: {
    width: '22%', // Adjust the width to fit 4 icons per row
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default AchievementScreen;

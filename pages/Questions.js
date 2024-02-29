import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import questions from "../questions.json";

const Questions = ({navigation}) => {
  const categories = Object.keys(questions);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    console.log("Selected Answers:", selectedAnswers);
  }, [selectedAnswers]);

  const handleNextQuestion = () => {
    const allQuestions = categories.reduce((acc, category) => {
      return acc.concat(questions[category]);
    }, []);
    if (currentQuestionIndex + 1 < allQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (currentCategoryIndex + 1 < categories.length) {
        setCurrentCategoryIndex(currentCategoryIndex + 1);
        setCurrentQuestionIndex(0);
      } else {
        setFinished(true);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      if (currentCategoryIndex > 0) {
        setCurrentCategoryIndex(currentCategoryIndex - 1);
        const prevCategoryQuestions = questions[categories[currentCategoryIndex]];
        setCurrentQuestionIndex(prevCategoryQuestions.length - 1);
      }
    }
  };

  const handleSelectOption = (option) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestionIndex]: option,
    }));
  };

  const allQuestions = categories.reduce((acc, category) => {
    return acc.concat(questions[category]);
  }, []);
  
  const currentQuestion = allQuestions[currentQuestionIndex];

  const isNextDisabled = !selectedAnswers[currentQuestionIndex];

  const handleFinish = () => {
    navigation.navigate("Home");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!finished ? (
        <View style={styles.questionsContainer}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            {/* {currentQuestion ? currentQuestion.category.toUpperCase() : ''} */}
            Answer all questions
          </Text>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16 }}>{currentQuestion ? currentQuestion.prompt : ''}</Text>
            {currentQuestion ? currentQuestion.options.map((option, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <RadioButton.Android
                  value={option}
                  status={selectedAnswers[currentQuestionIndex] === option ? 'checked' : 'unchecked'}
                  onPress={() => handleSelectOption(option)}
                />
                <Text style={{ marginLeft: 10 }}>{option}</Text>
              </View>
            )) : null}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              title="Previous"
              onPress={handlePrevQuestion}
              disabled={currentQuestionIndex === 0 && currentCategoryIndex === 0}
            />
            <Button
              title={currentCategoryIndex === categories.length - 1 || currentQuestionIndex === allQuestions.length - 1  ? 'Finish' : 'Next'}
              onPress={currentCategoryIndex === categories.length - 1 || currentQuestionIndex === allQuestions.length - 1 ? () => handleFinish() : handleNextQuestion}
              disabled={isNextDisabled}
            />
          
          </View>
        </View>
      ) : (
        <View style={styles.thankYouContainer}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Thank you for answering all questions.</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  questionsContainer: {
    marginHorizontal: 35,
  },
  thankYouContainer: {
    marginHorizontal: 35,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  }
});

export default Questions;

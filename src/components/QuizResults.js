import React from "react";
import { ScreenContainer } from "./ScreenContainer";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

export function QuizResults({ route, navigation }) {
  const { deckTitle, correctAnswers, incorrectAnswers } = route.params;
  console.log(
    "quizRezults component: ",
    deckTitle,
    correctAnswers,
    incorrectAnswers
  );
  const totalQuestions = correctAnswers + incorrectAnswers;
  return (
    <ScreenContainer>
      <Text>QuizRezults</Text>
      <Text>Deck title: {deckTitle}</Text>
      <Text>-----</Text>
      <Text>Total question: {totalQuestions}</Text>
      <Text>Correct answers: {correctAnswers}</Text>
      <Text>Incorrect answers: {incorrectAnswers}</Text>
      <Text>-----</Text>
      <Button title="Retake" onPress={() => alert("TODO Retake")} />
      <Button title="Done" onPress={() => alert("TODO Done")} />
    </ScreenContainer>
  );
}

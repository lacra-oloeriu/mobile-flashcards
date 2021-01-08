import React from "react";
import { ScreenContainer } from "./ScreenContainer";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { SCREEN_DECK_DETAILS, SCREEN_QUIZ_PERFORM } from "../utils/screenNames";

export function QuizResults({ route, navigation }) {
  const { deckTitle, correctAnswers, incorrectAnswers, deckId } = route.params;
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
      <Button
        title="Retake"
        onPress={() => {
          navigation.navigate(SCREEN_QUIZ_PERFORM, { deckId });
        }}
      />
      <Button
        title="Done"
        onPress={() => navigation.navigate(SCREEN_DECK_DETAILS, { deckId })}
      />
    </ScreenContainer>
  );
}

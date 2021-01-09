import React from "react";
import { ScreenContainer } from "./ScreenContainer";
import { Text, Button } from "react-native";
import { SCREEN_DECK_DETAILS, SCREEN_QUIZ_PERFORM } from "../utils/screenNames";

import { clearLocalNotification , setLocalNotification} from "../utils/notificationHelper";

export function QuizResults({ route, navigation }) {
  const { deckTitle, correctAnswers, incorrectAnswers, deckId } = route.params;
  const totalQuestions = correctAnswers + incorrectAnswers;

  //reset notifications and sent them again for tommorow
  clearLocalNotification().then(() => {
    setLocalNotification();
  });

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

import React, { useState } from "react";
import { ScreenContainer } from "./ScreenContainer";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { SCREEN_QUIZ_RESULTS } from "../utils/screenNames";

function quizPerform({ decks, questions, route, navigation }) {
  const { deckId } = route.params;
  const deck = decks[deckId];
  const totalQuestions = deck.questions.length;

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorectAnswers] = useState(0);

  const questionId = deck.questions[index];
  const question = questions[questionId];

  const remainingQuestions = totalQuestions - index;

  function submitShowAnswer() {
    setShowAnswer(true);
  }

  function submitAnswer(answer) {
    setShowAnswer(false);
    let correct = correctAnswers;
    let incorrect = incorrectAnswers;

    if (answer) {
      ++correct;
      setCorrectAnswers(correct);
    } else {
      ++incorrect;
      setIncorectAnswers(incorrect);
    }
    if (index === totalQuestions - 1) {
      setIndex(0);
      setShowAnswer(false);
      setCorrectAnswers(0);
      setIncorectAnswers(0);

      navigation.navigate(SCREEN_QUIZ_RESULTS, {
        deckTitle: deck.title,
        correctAnswers: correct,
        incorrectAnswers: incorrect,
        deckId,
      });
    } else {
      let newIndex = index + 1;
      setIndex(newIndex);
    }
  }

  const buttonShowAnswer = !showAnswer ? (
    <Button title="Show answer" onPress={() => submitShowAnswer()} />
  ) : (
    <Text></Text>
  );

  const textAnswer = showAnswer ? (
    <Text>Answer: {question.answer}</Text>
  ) : (
    <Text></Text>
  );

  const goodOrNotGoodButtons = showAnswer ? (
    <View>
      <Button title="Correct" onPress={() => submitAnswer(true)} />
      <Button title="Incorrect" onPress={() => submitAnswer(false)} />
    </View>
  ) : (
    <View></View>
  );

  return (
    <ScreenContainer>
      <Text>QuizPerform component</Text>
      <Text>------</Text>
      <Text>
        Progress: {index + 1} / {totalQuestions}
      </Text>
      <Text>Remaining questions to answer: {remainingQuestions}</Text>
      <Text>Question: {question.questionText}</Text>
      {textAnswer}
      <Text>------</Text>
      {buttonShowAnswer}
      {goodOrNotGoodButtons}
    </ScreenContainer>
  );
}

export const QuizPerform = connect((state) => ({
  decks: state.decks,
  questions: state.questions,
}))(quizPerform);

import React, { useState } from "react";
import { ScreenContainer } from "./ScreenContainer";
import { Button, Text } from "react-native";
import { connect } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { v4 as uuidv4 } from "uuid";
import { handleAddQuestion } from "../data/actions/questions";
import { handlDeckAppendQuestionId } from "../data/actions/decks";

function cardCreate({ dispatch, route, navigation }) {
  const { deckId } = route.params;
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");

  const questionRef = React.createRef();
  const answerRef = React.createRef();

  function submitCreateDeck() {
    if (questionText && answerText) {
      let questionId = uuidv4();

      dispatch(handleAddQuestion(deckId, questionText, answerText, questionId));
      dispatch(handlDeckAppendQuestionId(deckId, questionId));

      questionRef.current.clear();
      setQuestionText("")
      answerRef.current.clear();
      setAnswerText("")

      navigation.goBack()
    }
  }

  return (
    <ScreenContainer>
      <Text>Create card screen</Text>
      <TextInput
        placeholder="Insert question here"
        ref={questionRef}
        onChangeText={(text) => {
          setQuestionText(text);
        }}
      />
      <TextInput
        placeholder="Set correct answer here"
        ref={answerRef}
        onChangeText={(text) => {
          setAnswerText(text);
        }}
      />
      <Button title="Create card" onPress={() => submitCreateDeck()} />
    </ScreenContainer>
  );
}

export const CardCreate = connect((state) => ({}))(cardCreate);

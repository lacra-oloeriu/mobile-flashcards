import React, { useState } from "react";
import { ScreenContainer } from "./ScreenContainer";
import { Button, Text } from "react-native";
import { connect } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { v4 as uuidv4 } from "uuid";

function cardCreate({ route, navigation }) {
  const { deckId } = route.params;
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");

  const questionRef = React.createRef();
  const answerRef = React.createRef();

  function submitCreateDeck() {
    if (questionText && answerText) {
      let id = uuidv4();
      
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

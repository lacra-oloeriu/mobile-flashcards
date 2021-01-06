import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { connect } from "react-redux";
import { addDeck } from "../data/actions/decks";
import { TextInput } from "react-native-gesture-handler";

function CreateDeck({ decks, dispatch, navigation }) {
  const [deckTitle, setDeckTitle] = useState("");

  const [count, setCount] = useState(0);

  console.log(deckTitle);
  return (
    <ScreenContainer>
      <Text>New deck title</Text>
      <TextInput
        placeholder="Deck title"
        onChangeText={(title) => {
          setDeckTitle(title);
        }}
      />
      <Text>{deckTitle}</Text>
      <Text>You clicked {count} times</Text>
      <Button title="Press me" onPress={() => setCount(count + 1)} />
    </ScreenContainer>
  );
}

export const CreateDeckComponent = connect((state) => ({ decks: state.decks }))(
  CreateDeck
);

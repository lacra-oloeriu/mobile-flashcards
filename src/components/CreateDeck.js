import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { connect } from "react-redux";
import { addDeck } from "../data/actions/decks";
import { TextInput } from "react-native-gesture-handler";

function submitCreateDeck({ dispatch, title, navigation }) {
  
  if (title) {
    navigation.navigate("Decks")
  } 
}

function CreateDeck({ decks, dispatch, navigation }) {
  const [deckTitle, setDeckTitle] = useState("");

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
      <Button
        title="Create"
        onPress={() => submitCreateDeck({ dispatch, title: deckTitle, navigation })}
      />
    </ScreenContainer>
  );
}

export const CreateDeckComponent = connect((state) => ({ decks: state.decks }))(
  CreateDeck
);

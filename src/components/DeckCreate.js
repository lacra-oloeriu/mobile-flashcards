import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { connect } from "react-redux";
import { addDeck } from "../data/actions/decks";
import { TextInput } from "react-native-gesture-handler";
import { v4 as uuidv4 } from "uuid";
import { handleAddDeck } from "../data/actions/decks";
import { SCREEN_DECK_DETAILS } from "../utils/screenNames";

function DeckCreate({ decks, dispatch, navigation }) {
  const [deckTitle, setDeckTitle] = useState("");

  let myRef = React.createRef();

  function submitCreateDeck() {
    if (deckTitle) {
      let deckId = uuidv4();

      dispatch(handleAddDeck(deckTitle, deckId));

      myRef.current.clear();
      setDeckTitle("");

      navigation.navigate(SCREEN_DECK_DETAILS, { deckId });
    }
  }

  return (
    <ScreenContainer>
      <Text>New deck title</Text>
      <TextInput
        placeholder="Deck title"
        ref={myRef}
        onChangeText={(title) => {
          setDeckTitle(title);
        }}
      />
      <Text>{deckTitle}</Text>
      <Button title="Create" onPress={() => submitCreateDeck()} />
    </ScreenContainer>
  );
}

export const CreateDeckComponent = connect((state) => ({ decks: state.decks }))(
  DeckCreate
);

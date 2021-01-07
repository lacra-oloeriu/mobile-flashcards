import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { _getDecks } from "../utils/_data";
import { _getQuestions } from "../utils/_data";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREEN_DECK_DETAILS } from "../utils/screenNames";

function handleTouch(navigation, deckId) {
  navigation.navigate(SCREEN_DECK_DETAILS, { deckId });
}

function DeckList({ decks, dispatch, navigation }) {
  const deckList = [];
  Object.keys(decks).forEach((key) => {
    let deck = decks[key];
    deckList.push(
      <TouchableOpacity key={key} onPress={() => handleTouch(navigation, key)}>
        <Text>{deck.title}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <ScreenContainer>
      <Text>Deck list component</Text>
      {deckList}
    </ScreenContainer>
  );
}

export const DeckListComponent = connect((state) => ({ decks: state.decks }))(
  DeckList
);

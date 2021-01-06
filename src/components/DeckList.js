import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { _getDecks } from "../utils/_data";
import { _getQuestions } from "../utils/_data";
import { connect } from "react-redux";

function DeckList({ decks, dispatch, navigation }) {
  console.log("deckList", decks)
  return (
    <ScreenContainer>
      <Text>Deck list component</Text>
    </ScreenContainer>
  );
}

export const DeckListComponent = connect((state) => ({ decks: state.decks }))(
  DeckList
);

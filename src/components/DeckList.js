import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { _getDecks } from "../utils/_data";
import { _getQuestions } from "../utils/_data";
import { connect } from "react-redux";

function DeckList({ decks, dispatch, navigation }) {
  console.log("deckList", decks);

  const deckList = [];
  Object.keys(decks).forEach((key) => {
    let deck = decks[key]
    deckList.push(<Text key={key}>{deck.title}</Text>)
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

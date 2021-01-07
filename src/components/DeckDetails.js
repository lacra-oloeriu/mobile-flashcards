import React from "react";
import { ScreenContainer } from "./ScreenContainer";
import { View, Text } from "react-native";
import { connect } from "react-redux";

function deckDetails({ decks, route, navigation }) {
  const { deckId } = route.params;
  const deck = decks[deckId];

  console.log("Details fror ", deckId);

  return (
    <ScreenContainer>
      <Text>Deck details: {deck.title}</Text>
    </ScreenContainer>
  );
}

export const DeckDetails = connect((state) => ({ decks: state.decks }))(
  deckDetails
);

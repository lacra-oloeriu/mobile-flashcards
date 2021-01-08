import React from "react";
import { ScreenContainer } from "./ScreenContainer";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { SCREEN_CARD_CREATE, SCREEN_QUIZ_PERFORM } from "../utils/screenNames";

function deckDetails({ decks, route, navigation }) {
  const { deckId } = route.params;
  const deck = decks[deckId];

  return (
    <ScreenContainer>
      <Text>Deck: {deck.title}</Text>
      <Text>{deck.questions.length} decks</Text>
      <Button
        title="Add card"
        onPress={() => {
          navigation.navigate(SCREEN_CARD_CREATE, { deckId });
        }}
      />
      <Button
        title="Start Quiz"
        onPress={() => {
          navigation.navigate(SCREEN_QUIZ_PERFORM, { deckId });
        }}
      />
      <Button title="Delete Deck" />
    </ScreenContainer>
  );
}

export const DeckDetails = connect((state) => ({ decks: state.decks }))(
  deckDetails
);

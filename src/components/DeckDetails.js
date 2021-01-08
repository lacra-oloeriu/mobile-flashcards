import React from "react";
import { ScreenContainer } from "./ScreenContainer";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { SCREEN_CARD_CREATE, SCREEN_QUIZ_PERFORM } from "../utils/screenNames";

function deckDetails({ decks, route, navigation }) {
  const { deckId } = route.params;
  let deck = decks[deckId];
  if (deck === undefined) {
    deck = {
      title: "Creating deck pending",
      questions: [],
    };
  }

  console.log("Deck details: ", deckId);
  return (
    <ScreenContainer>
      <Text>Deck: {deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
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
    </ScreenContainer>
  );
}

export const DeckDetails = connect((state) => ({ decks: state.decks }))(
  deckDetails
);

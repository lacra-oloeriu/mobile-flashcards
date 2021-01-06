import React from "react";
import { View, Text } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { connect } from "react-redux";
import { addDeck } from "../data/actions/decks";

function CreateDeck({ decks, dispatch, navigation }) {
  console.log("createDeck", decks)
  
  return (
    <ScreenContainer>
      <Text>Create deck component</Text>
    </ScreenContainer>
  );
}



export const CreateDeckComponent = connect((state) => ({ decks:state.decks }))(
  CreateDeck
);


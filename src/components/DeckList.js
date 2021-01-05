import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScreenContainer } from "./ScreenContainer";
import { _getDecks } from "../utils/_data";
import { _getQuestions } from "../utils/_data";

export class DeckList extends React.Component {
  noDecks = {};
  noQuestions = {};

  state = {
    decks: this.noDecks,
    questions: this.noQuestions,
  };

  async componentDidMount() {
    try {
      let decks = await _getDecks();
      let questions = await _getQuestions();
      console.log("did mount decks", decks);
      console.log("did mount questions", questions);

      this.setState((state) => {
        return {
          ...state,
          [`decks`]: decks,
          [`questions`]: questions,
        };
      });
    } catch (e) {
      console.log("We have errors", e);
    }
  }

  render() {
    console.log("state", this.state);

    let decks = this.state.decks;
    const items = Object.keys(decks).map(function (key) {
      console.log("key, value", key, decks[key]);
      return <Text key={key}>{decks[key].title}</Text>;
    });

    return (
      <ScreenContainer>
        <Text>Deck list component</Text>
        {items}
      </ScreenContainer>
    );
  }
}

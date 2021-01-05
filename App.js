import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DeckList } from "./src/components/DeckList";
import { CreateDeck } from "./src/components/CreateDeck";
import { _getDecks, _getQuestions } from "./src/utils/_data";

const Tabs = createBottomTabNavigator();

export default class App extends React.Component {
  

  render() {
    console.log(this.state);
    return (
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Decks" component={DeckList} />
          <Tabs.Screen name="AddDeck" component={CreateDeck} />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}

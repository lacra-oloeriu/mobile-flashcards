import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DeckList } from "./src/components/DeckList";
import { CreateDeckComponent } from "./src/components/CreateDeck";
import { _getDecks, _getQuestions } from "./src/utils/_data";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/data/reducers";
import middleware from './src/data/middleware'

const Tabs = createBottomTabNavigator();
const store = createStore(reducer, middleware);



export default class App extends React.Component {

  componentDidMount(){
    store.dispatch()
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Decks" component={DeckList} />
            <Tabs.Screen name="AddDeck" component={CreateDeckComponent} />
          </Tabs.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DeckListComponent } from "./src/components/DeckList";
import { DeckDetails } from "./src/components/DeckDetails";
import { CreateDeckComponent } from "./src/components/DeckCreate";
import { _getDecks, _getQuestions } from "./src/utils/_data";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/data/reducers";
import middleware from "./src/data/middleware";
import { handleInitialData } from "./src/data/actions/shared";

import { SCREEN_DECK_LIST, SCREEN_DECK_DETAILS } from "./src/utils/screenNames";

const Tabs = createBottomTabNavigator();
const store = createStore(reducer, middleware);

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={SCREEN_DECK_LIST} component={DeckListComponent} />
      <HomeStack.Screen name={SCREEN_DECK_DETAILS} component={DeckDetails} />
    </HomeStack.Navigator>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    store.dispatch(handleInitialData());
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeStackScreen} />
            <Tabs.Screen name="AddDeck" component={CreateDeckComponent} />
          </Tabs.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

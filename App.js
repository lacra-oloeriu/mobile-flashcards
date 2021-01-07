import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DeckListComponent } from "./src/components/DeckList";
import { CreateDeckComponent } from "./src/components/CreateDeck";
import { _getDecks, _getQuestions } from "./src/utils/_data";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/data/reducers";
import middleware from "./src/data/middleware";
import { handleInitialData } from "./src/data/actions/shared";

export const SCREEN_DECK_LIST = "SCREEN_DECK_LIST";
export const SCREEN_DECK_DETAILS = "SCREEN_DECK_DETAILS";
export const SCREEN_HOME = "SCREEN_HOME";
export const SCREEN_ADD_DECK = "SCREEN_ADD_DECK";

const Tabs = createBottomTabNavigator();
const store = createStore(reducer, middleware);

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={SCREEN_DECK_LIST} component={DeckListComponent} />
      <HomeStack.Screen name={SCREEN_DECK_DETAILS} component={DetailsScreen} />
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

import { saveDeck } from "../../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function handleAddDeck (title, deckId){
    return (dispatch, getState)=>{
        return saveDeck({title, deckId})
            .then((deck)=>dispatch(addDeck(deck)))
    }
}

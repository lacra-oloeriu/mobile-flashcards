
import {
    _getDecks,
    _saveNewDeck,
    _getQuestions,
    _saveNewQuestion,
    _updateDeck
  } from './_data.js'
  
  
  
  export function getInitialData() {
    return Promise.all([
      _getDecks(),
      _getQuestions(),
    ]).then(([decks, questions]) => ({
      decks,
      questions
    }))
  }
  
  export function saveQuestion(info) {
    return _saveNewQuestion(info)
  }
  
  export function saveDeck(info) {
    return _saveNewDeck(info)
  }
  
  export function updateDeck(info){
    return _updateDeck(info)
  }
  
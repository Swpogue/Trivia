import { Trivia } from "./Models/Trivia.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
  
  
  /** @type {import('./Models/Trivia.js').Trivia[]} */
  Trivia = [
  new Trivia({
    "category": "Entertainment: Music",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Who is the lead singer of the British pop rock band Coldplay?",
    "correct_answer": "Chris Martin",
    "incorrect_answers": [
        "Jonny Buckland",
        "Guy Berryman",
        "Will Champion"
    ]




  })


  ]
  
  
  
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

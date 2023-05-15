import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js"
import { triviaApi } from "./AxiosService.js"



class TriviaService{
  async getTriviaFromAnApi(){

const response = await triviaApi.get('api.php?amount=1&category=12&difficulty=easy&type=multiple')
console.log(response.data);
appState.Trivia = response.data.results.map(t => new Trivia(t))

  }
}
export const triviaService = new TriviaService
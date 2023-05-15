import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"
import {triviaService} from "../Services/TriviaService.js"



function drawTrivia(){
  console.log('This is draw trivia', appState.Trivia);

let template = ''

appState.Trivia.forEach(t=>{
  template += t.CardTemplate
})

setHTML('TriviaCard', template)
}



export class TriviaController{
  constructor(){
console.log('Trivia controller');
appState.on('Trivia', drawTrivia)

this.getTriviaFromAnApi()
drawTrivia()


  }
async getTriviaFromAnApi(){
  try{

    // await triviaService.getTriviaFromAnApi()
  }catch (error){
    Pop.error(error)

  }
}




}
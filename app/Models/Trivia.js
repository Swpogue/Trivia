export class Trivia{
constructor(data){
this.id = data.id
this.type = data.type
this.question = data.question
this.correct_answer = data.correct_answer
this.incorrect_answers = data.incorrect_answers



}

get CardTemplate(){
return /*html*/`
<div><p>Question: <span>${this.question}</span></p>  -${this.correct_answer},${this.incorrect_answers}</div>

`

}



}
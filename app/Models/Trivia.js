export class Trivia{
constructor(data){
this.id = data.id
this.type = data.type
this.question = data.question
this.correct_answer = data.correct_answer
this.incorrect_answers = data.incorrect_answers
this.category = data.category


}

get CardTemplate(){
return /*html*/`
<div><p>Category: <span>${this.category}</span></p>
<p>Question: <span>${this.question}</span></p>  -${this.correct_answer},${this.incorrect_answers}</div>

`

}



}
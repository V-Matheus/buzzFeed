import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz_question from '../../../assets/data/quizzQuestion.json'

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  title: string = ''
  questions: any
  questionsSelected: any

  answers:string[] = []
  answersSelected:string = ''

  questionIndex: number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  ngOnInit(): void {
    if(quizz_question) {
      this.finished = false
      this.title = quizz_question.title

      this.questions = quizz_question.questions
      this.questionsSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length

      console.log(this.questionIndex);
      console.log(this.questionMaxIndex);

    }

  }
  playerChose(value:string) {
    this.answers.push(value)
    this.nextStep()
  }

  async nextStep() {
    this.questionIndex++

    if(this.questionMaxIndex > this.questionIndex) {
      this.questionsSelected = this.questions[this.questionIndex]
    } else {
      const finalAnswer: string = await this.checkResult(this.answers)
      this.finished = true
      this.answersSelected = quizz_question.results[finalAnswer as keyof typeof quizz_question.results]
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr) => {
      if(arr.filter(item => item === previous).length > arr.filter(item => item === current).length) {
        return previous
      } else {
        return current
      }
    })
    return  result
  }

}

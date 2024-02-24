import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  title: string = ''
  questions: any
  questionsSelected: any

  answers:string[] = []
  answersSelected:string = ''

  questionIndex: number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetResponse } from 'src/models/GetResponse';
import { Question } from 'src/models/Question';
import { QuizService } from 'src/shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
   this.quizService.getQuestions().subscribe(
     data => {
       this.questions = data.results;           
     }
   );

  }

  // Combine into 1 array all answers and returns a shuffled array of themn
  shuffleAnswers(question: Question): string[] {
    let wrongAnswers: string[] = question.incorrect_answers;
    let correctAnswer: string[] = [question.correct_answer];
    return this.shuffle(wrongAnswers.concat(correctAnswer));
  }

  // Shuffles an array of answers
  shuffle(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5)
  }

  selectedAnswer(e: any) {
    console.log(e.target);
    console.log(e.target.value);
    
  }
}

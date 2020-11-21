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


}

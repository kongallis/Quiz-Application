import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetResponse } from 'src/models/GetResponse';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // WEB API URL
  readonly rootUrl = "https://opentdb.com/api.php?amount=5&type=multiple";

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<GetResponse> {
    return this.http.get<GetResponse>(this.rootUrl);
      
  }
}

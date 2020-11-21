import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [   
{path: "quiz", component: QuizComponent},
{path: "result", component: ResultComponent},
{path: "", redirectTo:"/quiz", pathMatch: "full"},];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

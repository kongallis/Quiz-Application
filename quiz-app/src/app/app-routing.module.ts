import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [   
{path: "register", component: RegisterComponent},
{path: "quiz", component: QuizComponent},
{path: "result", component: ResultComponent},
{path: "", redirectTo:"/register", pathMatch: "full"},];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
